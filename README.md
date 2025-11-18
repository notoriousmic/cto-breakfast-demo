# CTO Breakfast Club by Microsoft ☕🚀

A fun and engaging website for the CTO Breakfast Club - where technology leaders connect, share ideas, and fuel innovation!

## Features

- 🎨 Modern, responsive design with engaging animations
- ☕ Interactive homepage with dynamic content
- 📚 Comprehensive About page explaining our mission and values
- 🤝 Join page with an interactive membership form
- 💫 Smooth scroll animations and parallax effects
- 📱 Mobile-friendly responsive layout
- 🎯 Built with Flask (Python) and vanilla JavaScript
- 🤖 AI-powered development assistance with Claude integration
- ⚡ Automated CI/CD workflows for seamless deployments
- 📋 Comprehensive development guidelines and best practices

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
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── AGENTS.md             # Development guidelines and best practices
├── LICENSE               # MIT License
├── .github/              # GitHub configurations and workflows
│   ├── workflows/        # Automated CI/CD pipelines
│   └── instructions/     # AI assistance configurations
├── templates/            # HTML templates
│   ├── base.html        # Base template with navigation and footer
│   ├── index.html       # Homepage
│   ├── about.html       # About page
│   └── join.html        # Join/membership page
└── static/              # Static assets
    ├── css/
    │   └── style.css    # Styles and animations
    └── js/
        └── animations.js # Interactive features and animations
```

## Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla JS - no frameworks)
- **Styling**: Custom CSS with animations and transitions
- **Features**: Intersection Observer API, smooth scrolling, form handling
- **AI Integration**: Claude AI for automated development assistance
- **CI/CD**: GitHub Actions for automated workflows
- **Development**: Comprehensive guidelines following AGENTS.md standards

## Development

This project follows comprehensive development standards outlined in [AGENTS.md](./AGENTS.md). Key principles include:

- **Modern Flask patterns** with performance optimization
- **Vanilla JavaScript** (no external frameworks)
- **Mobile-first responsive design** with accessibility focus
- **Performance-first animations** using CSS transforms only
- **Comprehensive testing** before all commits

### AI-Powered Development

The project includes automated development assistance:
- **@claude-fix-auto** - Comment on issues to get automated fixes
- **Pull request reviews** - Automated code review and suggestions
- **Release notes** - Automated changelog generation

## Contributing

1. Read [AGENTS.md](./AGENTS.md) for development standards
2. Test your changes with `python app.py`
3. Follow the existing code patterns and conventions
4. Submit issues and enhancement requests via GitHub Issues

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for the CTO Breakfast Club community