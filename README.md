# CTO Breakfast Club by Microsoft ☕🚀

A fun and engaging website for the CTO Breakfast Club - where technology leaders connect, share ideas, and fuel innovation!

> **🔧 For Developers:** Before contributing, **MUST READ** [`AGENTS.md`](AGENTS.md) for comprehensive development standards, performance guidelines, and Flask best practices.

## Features

- 🎨 **Modern, responsive design** with performance-optimized animations using Intersection Observer
- ☕ **Interactive homepage** with dynamic content and engaging CTO facts
- 📚 **Comprehensive About page** explaining our mission and Microsoft partnership
- 🤝 **Join page** with interactive membership form
- 💫 **Smooth scroll animations** using RequestAnimationFrame for 60fps performance
- 📱 **Mobile-first responsive layout** optimized for all devices
- ⚡ **Performance-first approach** - vanilla JavaScript, no frameworks, optimized scroll listeners
- 🚀 **Microsoft partnership** branding and community-focused messaging
- ♿ **Accessibility-focused** with keyboard navigation and screen reader support

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
├── LICENSE                # MIT License
├── README.md              # This file
├── app.py                 # Main Flask application with routes and CTO facts
├── requirements.txt       # Python dependencies (Flask, Werkzeug)
├── templates/             # Jinja2 HTML templates
│   ├── base.html         # Base template with navigation and footer
│   ├── index.html        # Homepage with dynamic content
│   ├── about.html        # About page explaining mission and values
│   └── join.html         # Join/membership page with forms
└── static/               # Static assets
    ├── css/
    │   └── style.css     # All styles, animations, and responsive design
    └── js/
        └── animations.js  # All interactive features and animations
```

## Technologies Used

### Core Stack
- **Backend**: Flask (Python) with Jinja2 templating
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (no frameworks by design)
- **Dependencies**: Minimal - Flask 3.0.0 and Werkzeug 3.0.3 only

### Performance Philosophy
- **Vanilla JavaScript approach** for maximum performance and fast loading
- **No frameworks** (no React, Vue, jQuery, Bootstrap, or Tailwind) - intentional choice
- **Optimized animations** using Intersection Observer and RequestAnimationFrame
- **Mobile-first responsive design** with efficient CSS Grid and Flexbox
- **Performance-first scroll handling** with passive event listeners

## Development Guidelines

### Before Contributing
- 📚 **READ [`AGENTS.md`](AGENTS.md) FIRST** - Contains critical development standards
- 🧪 **Test all changes locally** with `python app.py` before submitting
- 📱 **Test responsive behavior** on mobile, tablet, and desktop
- ♿ **Verify accessibility** with keyboard navigation and screen reader compatibility

### Development Workflow
1. **Setup**: Install dependencies with `pip install -r requirements.txt`
2. **Run**: Start development server with `python app.py`
3. **Test**: Verify all routes work (/, /about, /join)
4. **Check**: Ensure browser console shows no errors
5. **Responsive**: Test mobile viewport in Chrome DevTools
6. **Performance**: Verify animations are smooth (60fps target)

### Code Standards
- **Flask**: Follow patterns in `app.py`, use `render_template` and `url_for`
- **CSS**: Add styles to `static/css/style.css`, use CSS custom properties
- **JavaScript**: Add to `static/js/animations.js`, use modern ES6+ syntax
- **HTML**: Extend `base.html`, use semantic HTML5, include alt text

## Contributing

Contributors welcome! Please read [`AGENTS.md`](AGENTS.md) for comprehensive guidelines, then feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Microsoft Partnership & Community

Built with ❤️ for the **CTO Breakfast Club community** in partnership with **Microsoft**. This platform brings together technology leaders to share insights, foster innovation, and build meaningful connections over breakfast conversations.

**Join the conversation** • **Share your expertise** • **Grow with fellow CTOs** ☕🚀

---

*Generated following comprehensive development standards outlined in [`AGENTS.md`](AGENTS.md)*