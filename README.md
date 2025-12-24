# Barebones React Portfolio

A minimal, highly-commented React portfolio website that's easy to customize. Built with React, Vite, and React Router.

## Features

- **Three Main Sections**: About, Projects, and Contact
- **Fully Commented**: Every component and function has detailed comments explaining how it works
- **Easy Customization**: All content is in clear data structures (arrays/objects)
- **Modern Design**: Clean, minimal styling with subtle animations
- **Responsive**: Mobile-first design that works on all devices
- **GitHub Pages Ready**: Pre-configured for easy deployment

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tristanbrideweser.github.io.git
cd tristanbrideweser.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

## Deployment to GitHub Pages

1. Ensure your repository is named `yourusername.github.io` (or update the base path in `vite.config.js`)

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

3. Go to your repository Settings > Pages and select the `gh-pages` branch

Your site will be live at `https://yourusername.github.io`

## Customization Guide

### 1. Update Personal Information

**Header Logo/Name:**
- File: `src/components/Layout/Header.jsx`
- Line ~30: Change "Your Name" to your actual name

**About Section:**
- File: `src/components/About/About.jsx`
- Update name, title, and bio text
- Add your skills to the `skills` array
- Add a profile image (see comments in About.jsx)

**Footer:**
- File: `src/components/Layout/Footer.jsx`
- Update social media links in the `socialLinks` array
- Update copyright text

### 2. Add Your Projects

**File:** `src/components/Projects/Projects.jsx`

Update the `projects` array with your actual projects:

```javascript
const projects = [
  {
    title: 'My Project',
    description: 'Description of what the project does',
    technologies: ['React', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl: 'https://project-demo.com',
    image: '/projects/project1.jpg' // Optional
  },
  // Add more projects...
];
```

### 3. Customize Colors and Styling

**File:** `src/styles/global.css`

All colors, spacing, and typography are controlled via CSS variables at the top of the file:

```css
:root {
  --color-bg-primary: #0a0a0f;      /* Main background */
  --color-accent-primary: #00f5ff;  /* Accent color */
  --spacing-md: 1.5rem;             /* Spacing */
  /* ... more variables */
}
```

Change these values to customize the entire design.

### 4. Add a New Page/Section

1. Create a new component in `src/components/YourSection/YourSection.jsx`
2. Import it in `src/App.jsx`
3. Add a route: `<Route path="/yoursection" element={<YourSection />} />`
4. Add the path to the `navItems` array in `Header.jsx`

### 5. Connect Contact Form

The contact form is ready but needs to be connected to a backend service.

**Options:**

1. **EmailJS** (Easiest - client-side):
   ```bash
   npm install @emailjs/browser
   ```
   See comments in `src/components/Contact/Contact.jsx` for implementation

2. **Formspree** (No backend needed):
   - Sign up at https://formspree.io/
   - Use their endpoint URL in the form submission

3. **Your Own Backend**:
   - Create an API endpoint
   - Update the `handleSubmit` function in `Contact.jsx`

### 6. Add Images

1. Place images in the `public` folder
2. Reference them in your components: `/image-name.jpg`
3. Example: `<img src="/profile.jpg" alt="Profile" />`

## Project Structure

```
/
├── public/              # Static assets (images, etc.)
├── src/
│   ├── components/      # React components
│   │   ├── Layout/     # Header, Footer
│   │   ├── About/       # About section
│   │   ├── Projects/    # Projects section
│   │   └── Contact/     # Contact form
│   ├── styles/          # Global styles and animations
│   ├── App.jsx          # Main app with routing
│   └── main.jsx         # Entry point
├── package.json
├── vite.config.js
└── README.md
```

## Key Files to Customize

- `src/components/Layout/Header.jsx` - Navigation and logo
- `src/components/About/About.jsx` - Personal info and bio
- `src/components/Projects/Projects.jsx` - Your projects list
- `src/components/Contact/Contact.jsx` - Contact form
- `src/components/Layout/Footer.jsx` - Social links
- `src/styles/global.css` - Colors, spacing, typography

## Comments in Code

Every component has extensive comments explaining:
- What the component does
- How to customize it
- What each section is for
- TODO markers for things you should update

Look for `TODO:` comments throughout the codebase for customization points.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Need Help?

- Check the comments in the code - they explain everything
- Look for `TODO:` markers for customization points
- All styling uses CSS variables for easy customization

---

**Happy Customizing!** 🚀
