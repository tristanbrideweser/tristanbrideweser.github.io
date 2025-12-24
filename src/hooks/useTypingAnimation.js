/**
 * TYPING ANIMATION HOOK
 * 
 * This custom hook creates a typing animation effect for text.
 * It gradually reveals text character by character, simulating typing.
 * 
 * USAGE:
 * const displayedText = useTypingAnimation('Your text here', 50);
 * 
 * @param {string} text - The text to animate
 * @param {number} speed - Typing speed in milliseconds (lower = faster)
 * @param {boolean} startOnMount - Whether to start animation when component mounts
 * @returns {string} - The currently displayed portion of the text
 */

import { useState, useEffect } from 'react';

function useTypingAnimation(text, speed = 50, startOnMount = true) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!startOnMount) return;

    setDisplayedText('');
    setIsTyping(true);
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, speed);

    // Cleanup on unmount
    return () => clearInterval(typingInterval);
  }, [text, speed, startOnMount]);

  return { displayedText, isTyping };
}

export default useTypingAnimation;

