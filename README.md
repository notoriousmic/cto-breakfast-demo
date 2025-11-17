# CTO Breakfast Club by Microsoft ☕🚀

A fun and engaging website for the CTO Breakfast Club - where technology leaders connect, share ideas, and fuel innovation!

## Features

- 🎨 Modern, responsive design with engaging animations
- ☕ Interactive homepage with dynamic CTO facts and floating emojis
- 📚 Comprehensive About page explaining our mission and values
- 🤝 Join page with an interactive membership form
- 💫 Smooth scroll animations and Intersection Observer effects
- 📱 Mobile-first responsive design with performance optimizations
- 🎯 Built with Flask (Python) and vanilla JavaScript (no frameworks)
- ⚡ Optimized scroll performance with requestAnimationFrame
- 🔧 Follows Microsoft design principles and accessibility standards

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

### Development Guidelines

This project follows strict development standards outlined in `AGENTS.md`. Key principles:
- **No external frameworks** - Pure vanilla JavaScript, custom CSS
- **Mobile-first** responsive design with performance optimization
- **Microsoft color palette** - Consistent branding and design
- **Accessibility first** - WCAG AA compliance and keyboard navigation
- **Performance optimization** - requestAnimationFrame and passive event listeners

### Project Structure

```
cto-breakfast-demo/
├── app.py                 # Main Flask application with routes and CTO facts
├── requirements.txt       # Python dependencies (Flask 3.0.0, Werkzeug 3.0.3)
├── AGENTS.md             # Development guidelines and coding standards
├── LICENSE               # MIT License
├── templates/            # Jinja2 HTML templates
│   ├── base.html        # Base template with navigation and Microsoft branding
│   ├── index.html       # Homepage with dynamic facts and animations
│   ├── about.html       # About page explaining mission and values
│   └── join.html        # Join/membership page with form
└── static/              # Static assets (no build tools)
    ├── css/
    │   └── style.css    # CSS variables, animations, responsive design
    └── js/
        └── animations.js # Intersection Observer, smooth scroll, counters
```

## Technologies Used

- **Backend**: Flask 3.0.0 (Python web framework)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript ES6+
- **Templating**: Jinja2 templates extending base.html
- **Styling**: Custom CSS with CSS variables and Microsoft design system
- **Animations**: CSS transforms, Intersection Observer API, requestAnimationFrame
- **Features**: Dynamic content, smooth scrolling, responsive design, accessibility
- **Performance**: Mobile-first design, optimized scroll listeners, passive events
- **Development**: No build tools, no external frameworks, simple flat structure

## Development & Contributing

### Code Standards
This project follows strict coding standards outlined in `AGENTS.md`:

- **Performance First**: All animations use `transform` and `opacity` only
- **Mobile First**: Responsive design starting with mobile breakpoints
- **No Frameworks**: Pure vanilla JavaScript, custom CSS, no jQuery/Bootstrap
- **Accessibility**: WCAG AA compliance, keyboard navigation, screen readers
- **Microsoft Branding**: Consistent color palette and design principles

### Testing Checklist
Before contributing, ensure:
```bash
# 1. Start development server
python app.py

# 2. Test all routes
# - http://localhost:5000/ (homepage with dynamic facts)
# - http://localhost:5000/about (mission and values)
# - http://localhost:5000/join (membership form)

# 3. Verify browser console has no errors
# 4. Test mobile responsiveness (Chrome DevTools)
# 5. Check animation smoothness and performance
```

### Contributing Guidelines
- Follow existing code patterns and naming conventions
- Maintain the playful, community-focused tone with emojis ☕🚀
- Test accessibility with keyboard navigation
- Keep Microsoft partnership visibility
- No external dependencies unless absolutely necessary

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for the CTO Breakfast Club community