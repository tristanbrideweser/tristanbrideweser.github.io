/**
 * MAIN APP COMPONENT
 * 
 * This is the root component of your portfolio website.
 * It sets up React Router for navigation between pages.
 * 
 * STRUCTURE:
 * - Router: Wraps the entire app for client-side routing
 * - Header: Fixed navigation header (appears on all pages)
 * - Routes: Defines which component to show for each URL path
 * - Footer: Footer component (appears on all pages)
 * 
 * CUSTOMIZATION:
 * - Add new routes by adding Route components
 * - Change the basename if your GitHub Pages URL is different
 * - Modify the layout structure as needed
 */

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

// Component to handle GitHub Pages 404 redirect
function RedirectHandler() {
  const location = useLocation();

  useEffect(() => {
    // Check if we're on GitHub Pages and need to handle the redirect
    const queryParams = new URLSearchParams(location.search);
    const redirectPath = queryParams.get('/');
    
    if (redirectPath) {
      // Convert the path back from the query string format
      const path = redirectPath
        .replace(/~and~/g, '&')
        .replace(/%26/g, '&');
      
      // Update the URL without the query parameter
      window.history.replaceState({}, '', `${window.location.pathname}${path}${window.location.hash}`);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    /**
     * THEME PROVIDER
     * 
     * Wraps the entire app to provide theme context (light/dark mode)
     * This allows any component to access and toggle the theme
     */
    <ThemeProvider>
      {/**
       * ROUTER SETUP
       * 
       * BrowserRouter enables client-side routing (no page refreshes)
       * basename: Required for GitHub Pages - change if your repo name is different
       * 
       * Example: If your repo is "my-portfolio", change to:
       * basename="/my-portfolio"
       */}
      <Router basename="/">
        <RedirectHandler />
        <div className="App">
        {/* 
          HEADER COMPONENT
          Fixed header that appears on all pages
          Contains logo and navigation menu
        */}
        <Header />

        {/* 
          MAIN CONTENT AREA
          This is where page content is rendered based on the current route
        */}
        <main className="main-content">
          {/**
           * ROUTES CONFIGURATION
           * 
           * Each Route maps a URL path to a component
           * 
           * Structure:
           * <Route path="/url-path" element={<ComponentName />} />
           * 
           * To add a new page:
           * 1. Create a new component in src/components/
           * 2. Import it at the top of this file
           * 3. Add a Route below with the path and component
           * 4. Add the path to the navItems array in Header.jsx
           * 
           * Example: Adding a Blog page
           * 1. Create src/components/Blog/Blog.jsx
           * 2. Import: import Blog from './components/Blog/Blog';
           * 3. Add route: <Route path="/blog" element={<Blog />} />
           * 4. Update Header.jsx navItems array
           */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Home/About page - shown when user visits root URL */}
            <Route path="/about" element={<About />} />

            {/* Resume page - shown when user visits /resume */}
            <Route path="/resume" element={<Resume />} />

            {/* Projects page - shown when user visits /projects */}
            <Route path="/projects" element={<Projects />} />

            {/* Contact page - shown when user visits /contact */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* 
          FOOTER COMPONENT
          Footer that appears on all pages
          Contains social links and copyright
        */}
        <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
