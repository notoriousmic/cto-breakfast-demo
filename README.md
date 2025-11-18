# CTO Breakfast Club by Microsoft ☕🚀

A fun and engaging website for the CTO Breakfast Club - where technology leaders connect, share ideas, and fuel innovation! This high-performance Flask application showcases Microsoft's commitment to community building and technology leadership development.

> **⚠️ CRITICAL for Contributors:** Before making ANY changes, read [`AGENTS.md`](./AGENTS.md) - it contains comprehensive development standards and performance requirements for this project.

## Features

- 🎨 **Modern, responsive design** with engaging animations and Microsoft branding
- ⚡ **Performance-optimized** using Intersection Observer API and RequestAnimationFrame
- ☕ **Interactive homepage** with dynamic content and smooth user experience  
- 📚 **Comprehensive About page** explaining our mission, values, and Microsoft partnership
- 🤝 **Join page** with interactive membership form and community onboarding
- 💫 **Smooth animations** optimized for mobile performance (no parallax jank)
- 📱 **Mobile-first responsive** design tested across all device sizes
- 🎯 **Vanilla JavaScript approach** for maximum performance and accessibility
- 🚀 **Accessibility-focused** with keyboard navigation and screen reader support

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
├── AGENTS.md              # CRITICAL: Development standards and guidelines
├── app.py                 # Main Flask application with routes
├── requirements.txt       # Python dependencies (minimal by design)
├── LICENSE               # MIT License
├── README.md             # This file
├── templates/            # Jinja2 HTML templates
│   ├── base.html        # Base template with navigation and footer
│   ├── index.html       # Homepage with hero and community features
│   ├── about.html       # About page with mission and values
│   └── join.html        # Membership page with interactive form
└── static/              # Static assets (no build tools required)
    ├── css/
    │   └── style.css    # All styles, animations, and responsive design
    └── js/
        └── animations.js # Vanilla JS for interactions and performance optimization
```

## Technologies Used

### Core Stack
- **Backend**: Flask (Python) with Jinja2 templating
- **Frontend**: Vanilla HTML5, CSS3, and ES6+ JavaScript (no frameworks)
- **Styling**: Custom CSS with CSS Grid, Flexbox, and animations
- **Performance**: Intersection Observer API, RequestAnimationFrame, passive event listeners

### Why Vanilla JavaScript?
Per AGENTS.md philosophy, this project intentionally avoids frameworks to achieve:
- ⚡ **Maximum performance** - No framework overhead
- 🎯 **Precise control** - Custom optimizations for smooth animations  
- 📱 **Mobile optimization** - Lightweight for all devices
- 🔧 **Maintainability** - Simple, readable code without build tools
- 🚀 **Fast development** - No complex toolchains or dependencies

### Key Technologies & Techniques
- **CSS Custom Properties** for consistent theming
- **Mobile-first responsive design** with optimized breakpoints
- **Intersection Observer** for efficient scroll-based animations
- **RequestAnimationFrame** for smooth 60fps animations
- **Passive event listeners** for scroll performance
- **Semantic HTML5** for accessibility and SEO

## Contributing

> **🚨 BEFORE Contributing:** You MUST read [`AGENTS.md`](./AGENTS.md) first! It contains critical development standards, performance requirements, and code patterns that all contributors must follow.

### Before You Start
- [ ] Read [`AGENTS.md`](./AGENTS.md) completely
- [ ] Understand the vanilla JavaScript philosophy and performance-first approach
- [ ] Review the Microsoft branding and community tone guidelines
- [ ] Familiarize yourself with the CSS custom properties and design system

### Development Workflow

1. **Setup & Testing**
   ```bash
   # Start development server
   python app.py
   
   # Test all routes before making changes
   # http://localhost:5000/
   # http://localhost:5000/about  
   # http://localhost:5000/join
   ```

2. **Code Standards** (per AGENTS.md)
   - **Flask**: Keep routes simple, use `url_for()`, follow PEP 8
   - **CSS**: Use CSS custom properties, mobile-first, only animate `opacity` and `transform`
   - **JavaScript**: Vanilla ES6+, use `requestAnimationFrame`, passive event listeners
   - **HTML**: Semantic HTML5, proper heading hierarchy, `alt` text for images

3. **Testing Checklist**
   - [ ] All routes load without errors
   - [ ] Check browser console for JavaScript errors
   - [ ] Test on mobile viewport (Chrome DevTools)
   - [ ] Verify animations are smooth (60fps target)
   - [ ] Test keyboard navigation for accessibility
   - [ ] Verify responsive breakpoints work correctly

4. **Submission**
   - Ensure changes follow AGENTS.md standards
   - Test thoroughly on multiple screen sizes
   - Submit pull request with clear description

### Development Guidelines
- **Performance first**: Follow AGENTS.md performance optimization patterns
- **Mobile-first**: Always start with mobile design, enhance for desktop
- **Accessibility**: Keyboard navigation, screen readers, proper contrast
- **No frameworks**: Maintain vanilla JavaScript approach for maximum performance
- **Simple structure**: Don't reorganize files - keep the flat structure intentional

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Microsoft Partnership & Community

Built with ❤️ for the **CTO Breakfast Club community** in partnership with **Microsoft**. This project showcases how technology leaders can come together to share knowledge, foster innovation, and build meaningful connections over breakfast conversations.

### 🌟 Community Focus
- **Technology Leadership**: Connecting CTOs and tech executives
- **Knowledge Sharing**: Platform for breakfast conversations and insights  
- **Innovation Hub**: Where ideas meet implementation
- **Microsoft Partnership**: Powered by Microsoft's commitment to community building

### ⚡ Quick Links
- **Live Site**: [CTO Breakfast Club](https://cto-breakfast-demo.com) *(when deployed)*
- **Development Guide**: [`AGENTS.md`](./AGENTS.md) - Essential reading for contributors
- **Community**: Join our breakfast conversations and grow your network! ☕🚀

*Bringing technology leaders together, one breakfast at a time.*