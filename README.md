# CTO Breakfast Club by Microsoft ☕🚀

A fun and engaging community platform where technology leaders connect, share ideas, and fuel innovation! Built with modern web standards and optimized for performance.

## ✨ Features

- 🎨 **Modern, responsive design** with engaging animations and smooth interactions
- ☕ **Dynamic homepage** with rotating CTO facts and inspiring content
- 📚 **Comprehensive About page** explaining our mission, values, and community
- 🤝 **Interactive membership form** with modern form validation
- 💫 **Performance-optimized animations** using CSS transforms and Intersection Observer
- 📱 **Mobile-first responsive design** optimized for all devices
- 🚀 **Built with vanilla technologies** - Flask (Python), HTML5, CSS3, JavaScript (no frameworks)
- ♿ **Accessibility-focused** with proper ARIA labels and keyboard navigation
- 🎯 **Microsoft branding** with community-focused design language

## 🚀 Getting Started

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/notoriousmic/cto-breakfast-demo.git
cd cto-breakfast-demo
```

2. **Install dependencies**:
```bash
pip install -r requirements.txt
```

### 🏃‍♂️ Running the Application

**Start the Flask development server**:
```bash
python app.py
```

The website will be available at **`http://localhost:5000`**

### 🧪 Development Testing

Before making changes, always test the application:
```bash
# Start the server
python app.py

# Test all routes:
# - http://localhost:5000/        (Homepage)
# - http://localhost:5000/about   (About page) 
# - http://localhost:5000/join    (Join page)
```

## 📂 Project Structure

```
cto-breakfast-demo/
├── app.py                 # Main Flask application with routes
├── requirements.txt       # Python dependencies (Flask 3.0.0, Werkzeug)
├── AGENTS.md             # Development guidelines and standards
├── LICENSE               # MIT License
├── templates/            # Jinja2 HTML templates
│   ├── base.html        # Base template with navigation and footer
│   ├── index.html       # Homepage with dynamic CTO facts
│   ├── about.html       # About page with mission and values
│   └── join.html        # Join page with membership form
└── static/              # Static assets
    ├── css/
    │   └── style.css    # All styles, animations, and responsive design
    └── js/
        └── animations.js # Interactive features and scroll animations
```

## 🛠️ Technologies & Architecture

- **Backend**: Flask 3.0.0 (Python) with Jinja2 templating
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid, Flexbox, and CSS Custom Properties
- **Animations**: CSS transforms, Intersection Observer API, requestAnimationFrame
- **Performance**: Mobile-first responsive design, optimized scroll listeners
- **No Build Tools**: Direct HTML/CSS/JS - no frameworks, bundlers, or preprocessors

## 🤝 Contributing

We welcome contributions to improve the CTO Breakfast Club website! 

### Development Guidelines
- **Read `AGENTS.md` first** - Contains all development standards and patterns
- **Follow existing code style** - Vanilla technologies, no frameworks
- **Test thoroughly** - Verify responsive behavior and animations
- **Keep it simple** - Maintain the clean, performant architecture

### Quick Contribution Steps
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Follow the development standards in `AGENTS.md`
4. Test all routes and responsive behavior
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built for the **CTO Breakfast Club** community
- Powered by **Microsoft** partnership
- Designed with ❤️ for technology leaders worldwide

---

**Join us for breakfast and let's build the future together!** ☕🚀