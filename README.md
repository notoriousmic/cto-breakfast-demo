# CTO Breakfast Club by Microsoft ☕🚀

A community-driven website for technology leaders to connect, share ideas, and fuel innovation through engaging breakfast conversations and Microsoft partnership events!

> **⚠️ Important for Contributors**: Before making any changes, please read [`AGENTS.md`](AGENTS.md) for comprehensive development guidelines and standards.

## 🌟 Features

- 🎨 **Performance-first design** with optimized animations using Intersection Observer and RequestAnimationFrame
- ☕ **Interactive homepage** with smooth scrolling and dynamic content loading
- 📚 **Comprehensive About page** showcasing our Microsoft partnership and community mission
- 🤝 **Join page** with accessible, mobile-first membership form
- 💫 **Smooth animations** optimized for all devices using CSS transforms only
- 📱 **Mobile-first responsive design** tested across all viewport sizes
- 🎯 **Vanilla JavaScript architecture** - no frameworks, maximum performance
- 🚀 **Microsoft branding** integrated throughout with professional community focus
- ♿ **Full accessibility support** with keyboard navigation and screen reader compatibility

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
├── AGENTS.md             # 🚨 CRITICAL: Development guidelines and standards (READ FIRST!)
├── app.py               # Main Flask application with route handling
├── requirements.txt     # Python dependencies (Flask, Jinja2)
├── LICENSE             # MIT License for open source usage
├── README.md           # Project documentation (this file)
├── templates/          # Jinja2 HTML templates
│   ├── base.html      # Base template with navigation, footer, meta tags
│   ├── index.html     # Homepage with hero section and features
│   ├── about.html     # About page with Microsoft partnership details
│   └── join.html      # Membership form with validation
└── static/            # Static assets (no build tools needed)
    ├── css/
    │   └── style.css  # All styles, animations, responsive design
    └── js/
        └── animations.js # Vanilla JS interactions and performance optimizations
```

## 🛠️ Technology Stack

### Backend
- **Flask** (Python) - Lightweight WSGI web application framework
- **Jinja2** - Modern templating engine for Python
- **Werkzeug** - WSGI utility library for Python

### Frontend Philosophy
- **Vanilla JavaScript** - No frameworks for maximum performance and minimal complexity
- **Custom CSS** - Mobile-first responsive design with CSS custom properties
- **HTML5 Semantic Elements** - Accessible markup with proper heading hierarchy
- **Performance-first approach** - Only animate `opacity` and `transform` properties

### Key Technologies & APIs
- **Intersection Observer API** - Efficient scroll-based animations without performance issues
- **RequestAnimationFrame** - Smooth 60fps animations and scroll event optimization
- **CSS Custom Properties** - Consistent design system with Microsoft color palette
- **Passive Event Listeners** - Optimized scroll performance for mobile devices
- **Semantic HTML** - Full accessibility support with ARIA labels and keyboard navigation

### Why Vanilla JavaScript?
Following Microsoft's performance-first philosophy, this project intentionally avoids:
- ❌ React, Vue, Angular (unnecessary complexity)
- ❌ jQuery (modern browsers don't need it)
- ❌ Bootstrap, Tailwind (custom design is more performant)
- ❌ Build tools (keeps deployment simple)

This approach results in:
- ⚡ **Faster load times** (no framework overhead)
- 📱 **Better mobile performance** (optimized for low-end devices)
- 🔧 **Easier maintenance** (no build pipeline complexity)
- 🎯 **Better SEO** (server-side rendering with Flask)

## 🤝 Contributing

We welcome contributions to the CTO Breakfast Club website! Please follow our development standards to maintain code quality and performance.

### Before Contributing

> **🚨 CRITICAL**: Read [`AGENTS.md`](AGENTS.md) before making any changes!

**Development Checklist:**
- [ ] Read and understand [`AGENTS.md`](AGENTS.md) development guidelines
- [ ] Test your changes locally with `python app.py`
- [ ] Verify responsive design on mobile, tablet, and desktop
- [ ] Check browser console for JavaScript errors
- [ ] Test accessibility with keyboard navigation
- [ ] Ensure animations are smooth (60fps) on all devices

### Development Guidelines

**Code Standards:**
- **Flask**: Follow PEP 8, keep routes simple, use `url_for()` for links
- **CSS**: Mobile-first, use CSS custom properties, animate only `transform` and `opacity`
- **JavaScript**: Vanilla JS only, use modern ES6+ syntax, `requestAnimationFrame` for animations
- **HTML**: Semantic elements, proper heading hierarchy, alt text for images

**Testing Workflow:**
```bash
# 1. Start development server
python app.py

# 2. Test all pages
# - http://localhost:5000/         (Homepage)
# - http://localhost:5000/about    (About page) 
# - http://localhost:5000/join     (Join form)

# 3. Verify in browser developer tools:
# - No console errors
# - Responsive layout works
# - Animations are smooth
# - Forms work correctly
```

**Browser Support:**
- Chrome/Edge (primary)
- Firefox (secondary)
- Safari (test if available)
- Mobile browsers (Chrome Mobile, Safari iOS)

### Contribution Process

1. **Fork and Clone** the repository
2. **Read [`AGENTS.md`](AGENTS.md)** for detailed guidelines
3. **Create a feature branch** from main
4. **Make your changes** following the coding standards
5. **Test thoroughly** using the testing checklist above
6. **Submit a pull request** with clear description of changes

### Getting Help

- Check [`AGENTS.md`](AGENTS.md) for detailed development guidelines
- Review existing code patterns before adding new features
- Open an issue for questions or suggestions
- Tag [@notoriousmic](https://github.com/notoriousmic) for urgent matters

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🚀 Microsoft Partnership & Community

Built with ❤️ for the CTO Breakfast Club community in partnership with Microsoft. This project demonstrates modern web development practices while maintaining the engaging, community-focused approach that makes our breakfast conversations so valuable.

**🌟 Community Focus:**
- **Technology Leadership** - Connecting CTOs and senior technology leaders
- **Knowledge Sharing** - Facilitating meaningful conversations over breakfast
- **Microsoft Partnership** - Leveraging enterprise-grade technology insights
- **Innovation** - Driving forward-thinking solutions in the tech community

**Quick Links:**
- 🍽️ [Join our next breakfast meeting](http://localhost:5000/join)
- 📖 [Learn about our mission](http://localhost:5000/about) 
- 🛠️ [Development Guidelines](AGENTS.md)
- 📝 [MIT License](LICENSE)

*Empowering technology leaders through community, conversation, and collaboration.* ☕🚀