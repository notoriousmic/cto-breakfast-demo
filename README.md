# CTO Breakfast Club by Microsoft ☕🚀

A fun and engaging website for the CTO Breakfast Club - where technology leaders connect, share ideas, and fuel innovation! Built in partnership with Microsoft to showcase modern web development standards and community engagement.

> ⚠️ **IMPORTANT**: Before contributing to this project, please read [`AGENTS.md`](./AGENTS.md) - it contains critical development standards and guidelines that must be followed.

## Features

- 🎨 **Modern Performance-First Design** - Mobile-first responsive layout with engaging animations
- ☕ **Interactive Homepage** - Dynamic content with smooth scroll animations using Intersection Observer
- 📚 **Comprehensive About Page** - Our mission, values, and Microsoft partnership details
- 🤝 **Join Page** - Interactive membership form with validation and accessibility features
- ⚡ **Optimized Performance** - Vanilla JavaScript with RequestAnimationFrame and passive scroll listeners
- 📱 **Mobile-First Responsive** - Tested across devices with touch-friendly interactions
- 🎯 **Vanilla JavaScript** - No frameworks, maximum performance and accessibility
- 🚀 **Microsoft Standards** - Following enterprise-grade development practices

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
├── AGENTS.md              # ⚠️  CRITICAL: Development standards and guidelines
├── LICENSE                # MIT License
├── README.md              # This file
├── app.py                 # Main Flask application with routes
├── requirements.txt       # Python dependencies (Flask)
├── templates/            # Jinja2 templates extending base.html
│   ├── base.html        # Base template with navigation, footer, and meta tags
│   ├── index.html       # Homepage with hero section and animations
│   ├── about.html       # About page with mission and values
│   └── join.html        # Membership form with validation
└── static/              # Static assets (served by Flask)
    ├── css/
    │   └── style.css    # All styles, animations, and responsive design
    └── js/
        └── animations.js # Intersection Observer and interactive features
```

## Technologies Used

### Core Stack
- **Backend**: Flask (Python) with Jinja2 templates
- **Frontend**: Vanilla HTML5, CSS3, and ES6+ JavaScript
- **Styling**: Custom CSS with CSS variables and mobile-first responsive design
- **Performance**: Intersection Observer API, RequestAnimationFrame, passive scroll listeners

### Why Vanilla JavaScript?
This project intentionally avoids frameworks (React, Vue, jQuery) to achieve:
- ⚡ **Maximum Performance** - Direct DOM manipulation, no virtual DOM overhead
- 🎯 **Accessibility First** - Full control over semantic markup and ARIA labels
- 📱 **Mobile Optimization** - Lightweight bundle, faster loading on mobile networks
- 🛠️ **Microsoft Standards** - Follows enterprise-grade performance-first philosophy

### Key Performance Optimizations
- Only animate `opacity` and `transform` properties (no layout thrashing)
- Intersection Observer for efficient scroll animations
- Passive event listeners for smooth scrolling
- RequestAnimationFrame for 60fps animations
- CSS custom properties for consistent theming

## Development Guidelines

### Before Contributing
> 🚨 **REQUIRED**: Read [`AGENTS.md`](./AGENTS.md) before making any changes. It contains:
> - Comprehensive code standards for Flask, CSS, and JavaScript
> - Performance optimization requirements
> - Mobile-first responsive design principles
> - Testing procedures and browser compatibility guidelines

### Development Workflow
1. **Read AGENTS.md** - Understand the development standards
2. **Local Setup** - Follow installation instructions above
3. **Test Locally** - Run `python app.py` and test all routes:
   - `http://localhost:5000/` (Homepage)
   - `http://localhost:5000/about` (About page)
   - `http://localhost:5000/join` (Join page)
4. **Browser Testing** - Test in Chrome/Edge, Firefox, and mobile viewports
5. **Performance Check** - Verify animations are smooth (no jank)
6. **Accessibility Test** - Keyboard navigation and screen reader compatibility

### Code Standards Summary
- **Flask**: Keep routes simple, use `url_for()` for links and static files
- **CSS**: Mobile-first responsive, animate only `opacity` and `transform`
- **JavaScript**: Vanilla ES6+, use Intersection Observer, no frameworks
- **HTML**: Semantic elements, proper heading hierarchy, alt text for images

### Testing Requirements
- ✅ All pages load without console errors
- ✅ Responsive behavior on mobile (Chrome DevTools)
- ✅ Smooth animations with no performance issues
- ✅ Keyboard navigation works for all interactive elements
- ✅ Form validation and submission (if applicable)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## About CTO Breakfast Club & Microsoft Partnership

Built with ❤️ for the CTO Breakfast Club community in partnership with Microsoft. This project serves as a showcase for:

- **Community Building** - Connecting technology leaders and fostering collaboration ☕
- **Modern Web Standards** - Demonstrating performance-first development practices 🚀
- **Accessibility Focus** - Ensuring inclusive technology for all users 🤝
- **Educational Value** - Teaching vanilla JavaScript and Flask best practices 📚

### Quick Links
- 🌟 [Join the Community](http://localhost:5000/join)
- 📖 [Learn About Our Mission](http://localhost:5000/about)
- 🛠️ [Development Standards (AGENTS.md)](./AGENTS.md)
- 📝 [Report Issues](https://github.com/notoriousmic/cto-breakfast-demo/issues)

*Microsoft and the CTO Breakfast Club - Empowering technology leaders to build the future, one breakfast at a time!* ☕🚀