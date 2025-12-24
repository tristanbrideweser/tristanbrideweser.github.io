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

### Prerequisites

1. **Create a GitHub repository** (if you haven't already):
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `yourusername.github.io` (replace `yourusername` with your GitHub username)
   - **Important**: For a user/organization site, the repository MUST be named `username.github.io`

2. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

### Deployment Steps

1. **Verify the base path** in `vite.config.js`:
   - The base path should match your repository name: `base: '/yourusername.github.io/'`
   - For user/organization sites (`username.github.io`), you can also use `base: '/'`

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```
   
   This command will:
   - Build your React app for production
   - Create a `gh-pages` branch
   - Push the built files to GitHub

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select **gh-pages** branch and **/ (root)** folder
   - Click **Save**

4. **Wait for deployment**:
   - GitHub Pages typically takes 1-2 minutes to deploy
   - You'll see a green checkmark when deployment is complete
   - Your site will be live at `https://yourusername.github.io`

### Updating Your Site

After making changes to your code:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```

2. Deploy again:
   ```bash
   npm run deploy
   ```

### Troubleshooting

**Site shows 404 or blank page:**
- Check that the base path in `vite.config.js` matches your repository name
- Ensure GitHub Pages is set to deploy from the `gh-pages` branch
- Wait a few minutes and refresh (deployment can take time)

**Routes don't work (404 on navigation):**
- This is normal for React Router on GitHub Pages
- The `vite.config.js` already has the correct base path configured
- If issues persist, check that your repository name matches the base path

**Build errors:**
- Run `npm run build` first to check for errors
- Fix any errors before running `npm run deploy`

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
