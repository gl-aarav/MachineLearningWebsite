# 🚀 Deployment Guide

This guide will help you deploy the ML Club website to various platforms.

## 📋 Prerequisites

- GitHub account
- The website files in a GitHub repository

## 🌐 Deployment Options

### 1. Netlify (Recommended)

**Steps:**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up
3. Click "New site from Git"
4. Connect your GitHub account
5. Select your repository
6. Configure build settings:
   - Build command: (leave empty)
   - Publish directory: `/` (root)
7. Click "Deploy site"

**Custom Domain:**
- Go to Site settings → Domain management
- Add your custom domain
- Update DNS records as instructed

### 2. Vercel

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Other
   - Root Directory: `./`
6. Click "Deploy"

### 3. GitHub Pages

**Steps:**
1. Push your code to GitHub
2. Go to repository Settings
3. Scroll to "Pages" section
4. Source: Deploy from a branch
5. Branch: `main` (or your default branch)
6. Folder: `/ (root)`
7. Click "Save"

**URL:** `https://yourusername.github.io/repository-name`

### 4. Firebase Hosting

**Steps:**
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Configure:
   - Public directory: `.`
   - Single-page app: No
   - Overwrite index.html: No
5. Deploy: `firebase deploy`

## 🔧 Configuration Files

The project includes these deployment configuration files:

- `netlify.toml` - Netlify configuration
- `vercel.json` - Vercel configuration
- `_headers` - Netlify headers for security/performance
- `_redirects` - Netlify redirects
- `package.json` - Node.js project metadata

## 🛡️ Security Headers

The following security headers are configured:
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## ⚡ Performance Optimization

- CSS and JS files cached for 1 year
- HTML files cached with must-revalidate
- Images cached for 1 year
- Gzip compression enabled

## 🔄 Continuous Deployment

All platforms support automatic deployment:
- Push to main branch → Automatic deployment
- Pull requests → Preview deployments (Netlify/Vercel)

## 📱 PWA Features (Optional)

To enable Progressive Web App features:
1. Uncomment the service worker code in `js/main.js`
2. The `sw.js` file is already included
3. Add a web app manifest file

## 🐛 Troubleshooting

**Common Issues:**

1. **404 errors on refresh:**
   - Ensure `_redirects` file is in root directory
   - Check SPA fallback configuration

2. **CSS/JS not loading:**
   - Verify file paths are correct
   - Check browser console for errors

3. **Images not displaying:**
   - Ensure image URLs are accessible
   - Check CORS settings if using external images

## 📊 Analytics (Optional)

Add analytics by including tracking code in `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔐 Custom Domain Setup

1. **Purchase domain** from registrar (Namecheap, GoDaddy, etc.)
2. **Configure DNS:**
   - Add CNAME record pointing to your hosting platform
   - Or add A records for IP addresses
3. **Update hosting platform** with custom domain
4. **Enable HTTPS** (usually automatic)

## 📈 Monitoring

Consider adding:
- Uptime monitoring (UptimeRobot, Pingdom)
- Error tracking (Sentry)
- Performance monitoring (Google PageSpeed Insights)

## 🎯 Next Steps

After deployment:
1. Test all pages and functionality
2. Set up custom domain
3. Configure analytics
4. Set up monitoring
5. Share the URL with club members!

---

**Need help?** Check the platform-specific documentation or contact the development team.
