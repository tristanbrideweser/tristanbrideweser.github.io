# Tristan Brideweser - Personal Portfolio

A Jekyll-based personal portfolio website hosted on GitHub Pages.

## Setup

1. **Install dependencies:**
   ```bash
   bundle install
   ```

2. **Run locally:**
   ```bash
   bundle exec jekyll serve
   ```
   Then visit `http://localhost:4000`

## Deployment

This site is configured for GitHub Pages. Simply push to the `main` branch and GitHub Pages will automatically build and deploy your site.

## Structure

- `_config.yml` - Jekyll configuration
- `index.md` - Homepage
- `about.md` - About page
- `_posts/` - Blog posts (if you want to add a blog)
- `_layouts/` - Custom layouts (optional)
- `_includes/` - Reusable components (optional)
- `assets/` - CSS, images, and other assets (optional)

## Customization

- Edit `_config.yml` to change site settings
- Modify `index.md` and `about.md` for content
- Add posts to `_posts/` directory
- Customize the theme by creating files in `_layouts/` and `_includes/`

## Theme

Currently using the `minima` theme. You can override theme defaults by creating files in:
- `_layouts/` - Override theme layouts
- `_includes/` - Override theme includes
- `assets/main.scss` - Override theme styles
