# CTO Breakfast Club by Microsoft ☕🚀

A dynamic and engaging Flask web application for the CTO Breakfast Club community - where technology leaders connect, share ideas, and fuel innovation through meaningful conversations! Built in partnership with Microsoft, this platform embodies modern web development standards with performance-first principles.

> **⚠️ CRITICAL FOR DEVELOPERS**: Before contributing, you **MUST** read [`AGENTS.md`](./AGENTS.md) for comprehensive development guidelines, coding standards, and project-specific rules!

## ✨ Features

- 🎨 **Performance-Optimized Design**: Mobile-first responsive layout with engaging animations using Intersection Observer and RequestAnimationFrame
- ☕ **Interactive Homepage**: Dynamic content with smooth scroll animations and modern CSS transitions
- 📚 **Comprehensive About Page**: Mission, values, and community focus with engaging visuals
- 🤝 **Interactive Join Page**: Membership form with proper accessibility and form validation
- 💫 **Smooth Animations**: Performance-first animations using CSS transforms (no layout thrashing)
- 📱 **Mobile-First Responsive**: Optimized for all devices with touch-friendly interactions
- 🚀 **Vanilla JavaScript**: No frameworks - pure, optimized JavaScript for maximum performance
- ♿ **Accessibility Ready**: WCAG AA compliant with keyboard navigation and screen reader support

## Getting Started

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/notoriousmic/cto-breakfast-demo.git
cd cto-breakfast-demo
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

### Running the Application

Start the Flask development server:
```bash
python app.py
```

The website will be available at `http://localhost:5000`

### Project Structure

```
cto-breakfast-demo/
├── AGENTS.md              # ⚠️  CRITICAL: Global development rules and guidelines
├── README.md              # Project overview and setup instructions  
├── LICENSE                # MIT License
├── app.py                 # Main Flask application with routes
├── requirements.txt       # Python dependencies (Flask, etc.)
├── templates/            # Jinja2 HTML templates
│   ├── base.html        # Base template with navigation and footer
│   ├── index.html       # Homepage with hero section and features
│   ├── about.html       # About page with mission and values
│   └── join.html        # Join/membership page with interactive form
└── static/              # Static assets (CSS, JavaScript)
    ├── css/
    │   └── style.css    # All styles, animations, and responsive design
    └── js/
        └── animations.js # Interactive features, scroll effects, and animations
```

## 🚀 Technology Stack & Philosophy

### Backend
- **Flask (Python)**: Lightweight, flexible web framework
- **Jinja2 Templates**: Server-side rendering with template inheritance
- **No Database**: Simple, file-based approach for maximum performance

### Frontend Philosophy 
- **Vanilla JavaScript**: No frameworks (React, Vue, jQuery) for maximum performance and minimal overhead
- **Custom CSS**: No Bootstrap, Tailwind, or UI frameworks - tailored performance-optimized styles
- **Mobile-First**: Responsive design starting with mobile viewport
- **Performance-First**: Every animation and interaction optimized using modern browser APIs

### Key Technologies
- **Intersection Observer API**: Efficient scroll-triggered animations
- **RequestAnimationFrame**: Smooth, optimized animations without jank
- **CSS Custom Properties**: Consistent theming and easy maintenance
- **Semantic HTML5**: Accessible, SEO-friendly markup
- **Passive Event Listeners**: Optimized scroll performance

### Why Vanilla JavaScript?
Following Microsoft's performance-first philosophy:
- ⚡ **Zero Framework Overhead**: No bundle size bloat
- 🎯 **Targeted Features**: Only the code you need
- 🚀 **Maximum Performance**: Direct browser API access
- 🔧 **Easy Maintenance**: No version conflicts or breaking changes

## 🛠️ Development Guidelines

### Before Contributing
> **📖 READ FIRST**: Check [`AGENTS.md`](./AGENTS.md) for detailed development standards, code patterns, and project-specific rules!

**Pre-Development Checklist:**
- [ ] Read AGENTS.md thoroughly
- [ ] Understand Flask + vanilla JavaScript approach  
- [ ] Test the application locally (`python app.py`)
- [ ] Verify mobile-first responsive design principles
- [ ] Check browser console for any errors

### Development Workflow
```bash
# 1. Start the development server
python app.py

# 2. Test all routes in your browser:
# - http://localhost:5000/        (Homepage)
# - http://localhost:5000/about   (About Page)  
# - http://localhost:5000/join    (Join Page)

# 3. Test responsive design (Chrome DevTools)
# 4. Check browser console for JavaScript errors
# 5. Verify animations are smooth (no jank)
# 6. Test keyboard accessibility
```

### Code Standards
- **Flask**: Keep routes simple, use `render_template()`, follow PEP 8
- **CSS**: Mobile-first responsive design, use CSS custom properties, animate only `transform` and `opacity`
- **JavaScript**: ES6+ vanilla JavaScript, use `requestAnimationFrame`, passive event listeners
- **HTML**: Semantic markup, proper Jinja2 template inheritance, accessibility attributes

### Testing Requirements
- ✅ Test on Chrome, Firefox, Safari
- ✅ Test mobile viewport (responsive design)
- ✅ Verify smooth animations (60fps)
- ✅ Check keyboard navigation  
- ✅ Validate HTML and accessibility
- ✅ Ensure no browser console errors

## 🤝 Contributing

We welcome contributions from the community! Here's how to get started:

1. **Read the Guidelines**: Start by thoroughly reading [`AGENTS.md`](./AGENTS.md)
2. **Fork the Repository**: Create your own fork to work on
3. **Create a Branch**: Use descriptive branch names (`feature/new-section` or `fix/mobile-nav`)
4. **Follow Standards**: Adhere to the development guidelines outlined in AGENTS.md
5. **Test Thoroughly**: Follow the development workflow testing checklist
6. **Submit a Pull Request**: Include clear description of changes and testing performed

### Development Focus Areas
- 🎯 **Performance Optimization**: Faster animations, better scroll handling
- ♿ **Accessibility Improvements**: Enhanced keyboard navigation, screen reader support
- 📱 **Mobile Experience**: Touch-friendly interactions, responsive enhancements
- 🎨 **Visual Polish**: Smooth animations, engaging micro-interactions
- 🚀 **Code Quality**: Clean, maintainable code following established patterns

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Microsoft Partnership & Community

Built with ❤️ for the **CTO Breakfast Club** community in partnership with **Microsoft**. This project demonstrates modern web development standards, performance-first principles, and accessibility best practices.

**Quick Links:**
- 💬 Join our community discussions
- 📚 Learn about technology leadership  
- ☕ Connect with fellow CTOs
- 🚀 Discover Microsoft technologies

*Empowering technology leaders through meaningful connections and engaging conversations!* ☕🚀