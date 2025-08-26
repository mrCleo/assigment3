# Pet Heaven - Deployment Guide

This guide provides step-by-step instructions for deploying the Pet Heaven web application to various platforms.

## 🚀 Quick Deployment (Netlify)

### Option 1: Drag and Drop Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Visit Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up or log in to your account

3. **Deploy**:
   - Drag the `dist` folder to the Netlify deployment area
   - Your site will be live in seconds!

### Option 2: Git Integration (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Log in to Netlify
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

## 🌐 Alternative Deployment Platforms

### Vercel Deployment

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

### GitHub Pages Deployment

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/pet-heaven-app",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

### Firebase Hosting

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**:
   ```bash
   firebase init hosting
   ```

3. **Configure firebase.json**:
   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **Deploy**:
   ```bash
   npm run build
   firebase deploy
   ```

## 🔧 Environment Configuration

### Production Environment Variables

Create a `.env.production` file:
```env
VITE_APP_TITLE=Pet Heaven - Production
VITE_API_URL=https://api.petheaven.org
VITE_CONTACT_EMAIL=info@petheaven.org
```

### Build Optimization

Update `vite.config.ts` for production:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    }
  }
})
```

## 📊 Performance Optimization

### Pre-deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test production build locally with `npm run preview`
- [ ] Verify all images are optimized
- [ ] Check bundle size with `npm run build -- --analyze`
- [ ] Test responsive design on multiple devices
- [ ] Validate all forms work correctly
- [ ] Verify email integration functions

### Performance Monitoring

Add performance monitoring to `index.html`:
```html
<script>
  // Simple performance monitoring
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime}ms`);
  });
</script>
```

## 🔒 Security Considerations

### Content Security Policy

Add to `index.html`:
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  img-src 'self' https://images.pexels.com;
  style-src 'self' 'unsafe-inline';
  script-src 'self';
">
```

### HTTPS Configuration

Ensure your deployment platform provides HTTPS:
- ✅ Netlify: Automatic HTTPS
- ✅ Vercel: Automatic HTTPS  
- ✅ Firebase: Automatic HTTPS
- ⚠️ GitHub Pages: Manual HTTPS setup required

## 📱 Mobile App Deployment (Future)

### React Native Setup

For future mobile app development:

1. **Install React Native CLI**:
   ```bash
   npm install -g @react-native-community/cli
   ```

2. **Create React Native project**:
   ```bash
   npx react-native init PetHeavenMobile
   ```

3. **Share components**:
   - Extract reusable components to shared library
   - Use React Native compatible styling
   - Implement platform-specific features

## 🔄 Continuous Deployment

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Netlify

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build project
      run: npm run build
      
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v1.2
      with:
        publish-dir: './dist'
        production-branch: main
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 🐛 Troubleshooting

### Common Deployment Issues

1. **Build Fails**:
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

2. **Routing Issues (404 on refresh)**:
   - Add `_redirects` file to `public` folder:
   ```
   /*    /index.html   200
   ```

3. **Environment Variables Not Working**:
   - Ensure variables start with `VITE_`
   - Check `.env` file is in project root
   - Restart development server after changes

4. **Images Not Loading**:
   - Verify image URLs are accessible
   - Check Content Security Policy settings
   - Ensure images are in `public` folder or external CDN

### Performance Issues

1. **Slow Loading**:
   - Optimize images (use WebP format)
   - Enable gzip compression
   - Implement code splitting
   - Use CDN for static assets

2. **Large Bundle Size**:
   ```bash
   # Analyze bundle
   npm run build -- --analyze
   
   # Remove unused dependencies
   npm uninstall <unused-package>
   ```

## 📞 Support

### Deployment Support Resources

- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Firebase**: [firebase.google.com/docs/hosting](https://firebase.google.com/docs/hosting)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)

### Getting Help

1. **Check deployment logs** for specific error messages
2. **Verify build works locally** before deploying
3. **Test in production environment** after deployment
4. **Monitor performance** and user feedback

---

**Current Deployment**: [https://cute-caramel-325441.netlify.app](https://cute-caramel-325441.netlify.app)

**Last Updated**: January 2025