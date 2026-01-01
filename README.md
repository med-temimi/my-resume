# Mohamed Temimi - Senior iOS Developer Portfolio

A premium, Apple-inspired portfolio website showcasing iOS development expertise with glassmorphism, smooth animations, and modern design.

## 🎨 Design Philosophy

This portfolio embodies Apple's design language with:
- **Minimalist Elegance**: Clean, purposeful design with intentional whitespace
- **Glassmorphic Effects**: Frosted glass cards with subtle blur effects
- **Fluid Animations**: Smooth transitions, parallax scrolling, and entrance animations
- **Premium Typography**: Geist font family with careful hierarchy
- **Apple-Inspired Colors**: Soft blues, purples, and cyan accents

## 🚀 Features

### Sections
- **Hero Section**: Eye-catching introduction with animated gradient background
- **About**: Professional summary with key statistics
- **Skills**: Categorized technical expertise with glassmorphic cards
- **Experience**: Timeline layout with detailed role descriptions
- **Projects**: Featured iOS applications with technology stacks
- **Education**: Degrees and academic projects
- **Contact**: Multiple contact channels with animated links
- **Navigation**: Fixed header with smooth scrolling

### Technical Features
- Fully responsive design (mobile, tablet, desktop)
- Framer Motion animations throughout
- Glassmorphism with backdrop filters
- Smooth scroll-triggered animations
- Optimized performance with lazy loading
- Accessible UI with proper contrast and keyboard navigation

## 📋 Tech Stack

- **React 19**: Modern UI library
- **Vite**: Lightning-fast build tool
- **Tailwind CSS 4**: Utility-first styling
- **Framer Motion**: Advanced animations
- **TypeScript**: Type-safe development
- **Lucide React**: Beautiful icons

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm/pnpm
- Git

### Installation

1. **Extract the project**
   ```bash
   unzip ios-dev-portfolio.zip
   cd ios-dev-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

   The site will be available at `http://localhost:3000`

## 📦 Build & Deployment

### Build for Production

```bash
pnpm build
# or
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Manus

1. Save a checkpoint in the Manus UI
2. Click the "Publish" button in the Management UI
3. Configure your custom domain in the Settings panel

### Deploy to Other Platforms

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### Traditional Hosting (Apache, Nginx, etc.)
1. Build the project: `pnpm build`
2. Upload the `dist/` folder to your web server
3. Configure your server to serve `dist/index.html` for all routes (SPA routing)

**Nginx Configuration Example:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/portfolio/dist;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**Apache Configuration Example:**
Add to `.htaccess` in the `dist/` folder:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 📁 Project Structure

```
ios-dev-portfolio/
├── client/
│   ├── public/
│   │   ├── index.html
│   │   └── images/
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── AboutSection.tsx
│   │   │   │   ├── SkillsSection.tsx
│   │   │   │   ├── ExperienceSection.tsx
│   │   │   │   ├── ProjectsSection.tsx
│   │   │   │   ├── EducationSection.tsx
│   │   │   │   └── ContactSection.tsx
│   │   │   └── ui/
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit the content in each section component:

1. **Hero Section** (`client/src/components/sections/HeroSection.tsx`)
   - Update name, title, and tagline

2. **About Section** (`client/src/components/sections/AboutSection.tsx`)
   - Modify professional summary and statistics

3. **Skills Section** (`client/src/components/sections/SkillsSection.tsx`)
   - Add/remove skill categories and items

4. **Experience Section** (`client/src/components/sections/ExperienceSection.tsx`)
   - Update job titles, companies, and descriptions

5. **Projects Section** (`client/src/components/sections/ProjectsSection.tsx`)
   - Add your own projects with descriptions and technologies

6. **Contact Section** (`client/src/components/sections/ContactSection.tsx`)
   - Update contact information and social links

### Modify Colors

Edit CSS variables in `client/src/index.css`:

```css
:root {
  --primary-blue: #0071E3;
  --secondary-purple: #A855F7;
  --tertiary-cyan: #06B6D4;
  /* ... more colors ... */
}
```

### Add Images

1. Place images in `client/public/images/`
2. Reference them in components with absolute paths: `/images/filename.jpg`

## 🚀 Performance Optimization

- **Code Splitting**: Automatic with Vite
- **Image Optimization**: Use compressed formats (WebP, AVIF)
- **Lazy Loading**: Scroll-triggered animations reduce initial load
- **CSS Purging**: Tailwind automatically removes unused styles
- **Minification**: Automatic in production builds

## ♿ Accessibility

- Semantic HTML structure
- WCAG AA color contrast compliance
- Keyboard navigation support
- ARIA labels on interactive elements
- Reduced motion support for animations

## 🔍 SEO

The portfolio includes:
- Semantic HTML5 markup
- Meta tags in `client/index.html`
- Responsive design for mobile indexing
- Fast page load times

To improve SEO further:
1. Update meta description in `client/index.html`
2. Add Open Graph tags for social sharing
3. Create a `robots.txt` file in `client/public/`
4. Generate a sitemap for search engines

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Dev server not starting
```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### Build errors
```bash
# Clear build cache
rm -rf dist
pnpm build
```

### Animations not smooth
- Check browser hardware acceleration is enabled
- Reduce animation complexity for older devices
- Use `will-change` CSS property sparingly

## 📄 License

This portfolio template is provided as-is for personal use.

## 🤝 Support

For issues or questions:
1. Check the Manus documentation at https://help.manus.im
2. Review the code comments for implementation details
3. Consult Framer Motion docs: https://www.framer.com/motion/
4. Tailwind CSS docs: https://tailwindcss.com/docs

## 🎯 Next Steps

1. **Customize Content**: Update all sections with your information
2. **Add Images**: Include project screenshots and personal photos
3. **Test Responsiveness**: Check on mobile, tablet, and desktop
4. **Deploy**: Choose your hosting platform and deploy
5. **Monitor**: Track analytics and user engagement

---

**Created with precision and passion** ✨

Built with React, Vite, Tailwind CSS, and Framer Motion.
