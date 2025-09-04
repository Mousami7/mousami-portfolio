# Mousami Soni - Portfolio Website

A modern, responsive portfolio website showcasing the skills and experience of Mousami Soni, a Junior Technical Officer and AIML Developer at Xounds.

## 🌟 Features

### ✨ Modern Design
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with automatic preference saving
- **Smooth Animations**: AOS (Animate On Scroll) library for engaging animations
- **Gradient Effects**: Beautiful gradient backgrounds and text effects

### 🎯 Interactive Elements
- **Animated Skill Bars**: Dynamic progress bars that animate when scrolled into view
- **Hover Effects**: Interactive cards and buttons with smooth transitions
- **Parallax Scrolling**: Floating shapes with parallax effect
- **Typing Animation**: Hero title with typewriter effect
- **Particle Effects**: Subtle animated particles in the hero section

### 📱 Navigation & UX
- **Fixed Navigation**: Sticky navbar with smooth scrolling
- **Mobile Menu**: Hamburger menu for mobile devices
- **Back to Top**: Smooth scroll to top button
- **Keyboard Shortcuts**: 
  - `Ctrl/Cmd + K`: Toggle theme
  - `Escape`: Close mobile menu
  - Konami Code: Easter egg (↑↑↓↓←→←→BA)

### 🔗 Social Integration
- **GitHub Link**: Direct link to your GitHub profile
- **LinkedIn Profile**: Professional networking link
- **YouTube Channel**: Content showcase link
- **Downloadable CV**: One-click CV download functionality

### 📧 Contact Features
- **Contact Form**: Functional contact form with validation
- **Notification System**: Success/error notifications
- **Email Integration**: Ready for backend email service integration

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Customize** the content as needed (see customization section below)

### File Structure
```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/             # Images and other assets (create if needed)
    └── favicon.ico     # Website favicon
```

## 🎨 Customization Guide

### 1. Personal Information
Edit the following sections in `index.html`:

#### Hero Section
```html
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<h2 class="hero-subtitle">Your Title</h2>
<p class="hero-description">
    Your description here...
</p>
```

#### About Section
```html
<p>
    Update your personal description...
</p>
<div class="about-stats">
    <div class="stat">
        <h4>2+</h4>
        <p>Years Experience</p>
    </div>
    <!-- Update stats as needed -->
</div>
```

### 2. Experience & Skills
Update the experience timeline and skills sections with your actual information:

#### Experience
```html
<div class="timeline-content">
    <div class="timeline-header">
        <h3>Your Job Title</h3>
        <span class="company">Company Name</span>
        <span class="duration">2023 - Present</span>
    </div>
    <div class="timeline-body">
        <ul>
            <li>Your achievement 1</li>
            <li>Your achievement 2</li>
            <!-- Add more achievements -->
        </ul>
    </div>
</div>
```

#### Skills
Update skill percentages in both HTML and CSS:
```html
<div class="skill-progress" data-progress="90"></div>
```

### 3. Projects
Replace the sample projects with your actual work:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-project-icon"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span class="tag">Technology 1</span>
            <span class="tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-github-link" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
            <a href="your-demo-link" class="project-link">
                <i class="fas fa-external-link-alt"></i> Demo
            </a>
        </div>
    </div>
</div>
```

### 4. Social Links
Update the social media links in `script.js`:

```javascript
switch(title) {
    case 'GitHub':
        window.open('https://github.com/yourusername', '_blank');
        break;
    case 'LinkedIn':
        window.open('https://linkedin.com/in/yourusername', '_blank');
        break;
    case 'YouTube':
        window.open('https://youtube.com/@yourchannel', '_blank');
        break;
    // Add more social links as needed
}
```

### 5. Contact Information
Update contact details in the contact section:

```html
<div class="contact-item">
    <div class="contact-icon">
        <i class="fas fa-envelope"></i>
    </div>
    <div class="contact-details">
        <h4>Email</h4>
        <p>your.email@example.com</p>
    </div>
</div>
```

### 6. CV Download
Update the CV content in the `downloadCV()` function in `script.js` with your actual CV information.

### 7. Colors & Theme
Customize the color scheme by modifying CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #f59e0b;    /* Secondary color */
    --accent-color: #10b981;       /* Accent color */
    /* Add more custom colors */
}
```

## 🔧 Advanced Customization

### Adding New Sections
1. Create a new section in `index.html`
2. Add corresponding styles in `styles.css`
3. Add any JavaScript functionality in `script.js`

### Custom Animations
The website uses AOS (Animate On Scroll) library. Add animations to any element:

```html
<div data-aos="fade-up" data-aos-delay="200">
    Your content here
</div>
```

Available animations: `fade-up`, `fade-down`, `fade-left`, `fade-right`, `zoom-in`, `zoom-out`, `slide-up`, `slide-down`, etc.

### Adding More Interactive Features
The JavaScript file is well-structured and commented. You can easily add:
- More easter eggs
- Additional animations
- Custom scroll effects
- Form validation
- API integrations

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them with the community!

## 📞 Support

If you need help customizing this portfolio or have questions, feel free to reach out!

---

**Built with ❤️ for showcasing professional skills and experience**

*Last updated: December 2024*


