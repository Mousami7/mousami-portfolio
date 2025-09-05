# Portfolio Deployment Guide

## 🚀 How to Deploy Your Portfolio

### **Option 1: Render (Recommended - You're already using this!)**

#### **Step 1: Find Your Current Deployment**
1. Go to [render.com](https://render.com)
2. Log in to your account
3. Look for your deployed service in the dashboard
4. Your URL should be: `https://your-app-name.onrender.com`

#### **Step 2: Update Your Deployment**
1. **Connect to GitHub:**
   - Create a new repository on GitHub
   - Push your code:
   ```bash
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect Render to GitHub:**
   - In Render dashboard, click "New +"
   - Select "Web Service"
   - Connect your GitHub repository
   - Choose "Static Site" as the type
   - Set build command: `npm install` (if needed)
   - Set publish directory: `/` (root)
   - Deploy!

#### **Step 3: Auto-Deploy Updates**
- Every time you push to GitHub, Render will automatically redeploy
- Your site will be updated within minutes

### **Option 2: Netlify (Free Alternative)**

1. **Go to [netlify.com](https://netlify.com)**
2. **Drag and drop your project folder** or connect to GitHub
3. **Your site will be live instantly** with a URL like: `https://random-name.netlify.app`
4. **Custom domain available** (free)

### **Option 3: Vercel (Free Alternative)**

1. **Go to [vercel.com](https://vercel.com)**
2. **Import your GitHub repository**
3. **Deploy with one click**
4. **Get a URL like:** `https://your-portfolio.vercel.app`

### **Option 4: GitHub Pages (Free)**

1. **Push to GitHub repository**
2. **Go to repository Settings**
3. **Scroll to "Pages" section**
4. **Select source: "Deploy from a branch"**
5. **Choose "main" branch**
6. **Your site will be at:** `https://yourusername.github.io/repository-name`

## 🔧 **Current Local Development**

Your portfolio is currently running locally at:
- **http://localhost:8000** (if server is running)
- **Direct file:** Open `index.html` in browser

## 📝 **To Update Your Portfolio:**

1. **Edit files locally** (index.html, styles.css, script.js, config.js)
2. **Test locally** by opening index.html
3. **Commit changes:**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
4. **Render will auto-deploy** your changes

## 🌐 **Finding Your Live URL:**

### **Check These Places:**
1. **Render Dashboard** - Your main deployment URL
2. **Email from Render** - Deployment confirmation emails
3. **Browser History** - If you visited it before
4. **GitHub Repository** - If you connected it

### **Common Render URL Formats:**
- `https://mousami-portfolio.onrender.com`
- `https://portfolio-mousami.onrender.com`
- `https://mousami-soni-portfolio.onrender.com`

## 💡 **Pro Tips:**

1. **Custom Domain:** You can add your own domain in Render settings
2. **Environment Variables:** Use for sensitive data
3. **Auto-Deploy:** Connect GitHub for automatic updates
4. **Performance:** Render has good performance for static sites
5. **SSL:** HTTPS is automatically enabled

## 🆘 **If You Can't Find Your URL:**

1. **Check Render Dashboard** - Most reliable way
2. **Look in your email** for Render notifications
3. **Create a new deployment** if needed
4. **Contact Render support** if you're stuck

## 📱 **Mobile Testing:**

Once you find your URL, test it on:
- Desktop browsers
- Mobile devices
- Different screen sizes
- Different browsers

---

**Your portfolio is already hosted on Render! Just find the URL in your dashboard or email.**
