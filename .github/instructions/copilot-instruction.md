# CTO Breakfast Club - Global Rules for AI Agent Development

This file contains the global rules and principles that apply to ALL development work on the CTO Breakfast Club website. These rules are specialized for building and maintaining a modern Flask web application with engaging frontend interactions.

## Rules
When reviewing refer to:
.github/pr_review_prompt.md

When fixing issue refer to:
.github/issue_fix_prompt.md

When creating pull request refer to:
.github/pull_request_template.md

## 🎯 Core Development Principles

IMPORTANT: These principles apply to ALL code changes and feature additions:

### Development Workflow
- Always test changes locally with `python app.py` before committing
- Maintain the playful, community-focused tone throughout the site
- Use emojis consistently (☕🚀💡🎯👥) to enhance engagement
- Keep Microsoft branding subtle but present
- Follow existing patterns rather than creating new ones

### Code Quality Standards
- Write clean, self-documenting code with clear naming conventions
- Test responsive behavior on mobile, tablet, and desktop
- Ensure accessibility (keyboard navigation, screen readers, ARIA labels)
- Optimize for performance, especially scroll and animation behavior
- Never sacrifice user experience for visual effects

## 📚 Project Awareness & Context

- **Project Type**: Flask Web Application
- **Purpose**: Community platform for technology leaders (CTOs) to connect
- **Tech Stack**: Flask (Python), Jinja2 templates, vanilla JavaScript, custom CSS
- **No external frameworks**: No React, Vue, jQuery, Bootstrap, or Tailwind
- **File structure is intentionally simple**: Keep it that way
- **Design philosophy**: Clean, modern, performant, accessible

## 🧱 Code Structure & Modularity

### File Organization Rules
- **Never create files longer than 500 lines** - Split into modules if needed
- Maintain clear separation of concerns:
  - `app.py` - Flask routes and application logic only
  - `templates/*.html` - Jinja2 templates extending `base.html`
  - `static/css/style.css` - All styles, animations, and responsive design
  - `static/js/animations.js` - All interactive features and behaviors
- Use consistent imports and follow Python PEP 8 conventions
- Keep the project structure flat and simple

### Template Hierarchy
```
base.html (navigation, footer, meta tags)
├── index.html (homepage)
├── about.html (about page)
└── join.html (registration form)
```

## 🎨 Frontend Development Standards

### CSS Standards
- **Use CSS custom properties** defined in `:root` for all colors and common values
- **Mobile-first responsive design** - Start with mobile, enhance for desktop
- **Performance-first animations** - Only animate `opacity` and `transform`
- **Never use inline styles** - All styles belong in `style.css`
- **Color palette** (strictly follow):
  - Primary: `#0078d4` (Microsoft blue)
  - Secondary: `#50e6ff` (light blue)  
  - Accent: `#ff6b35` (orange)
  - Dark: `#1e1e1e`
  - Light: `#f5f5f5`

### JavaScript Standards
- **Vanilla JavaScript only** - No frameworks, no jQuery
- **Modern ES6+ syntax** - Use arrow functions, const/let, template literals
- **Event listeners in DOMContentLoaded** - Ensure DOM is ready
- **Use modern browser APIs**:
  - Intersection Observer for scroll animations
  - `requestAnimationFrame` for smooth animations
  - Passive event listeners for scroll performance
- **No global pollution** - Keep variables scoped appropriately

### HTML/Jinja2 Standards
```python
# Always extend base.html
{% extends "base.html" %}

# Override required blocks
{% block title %}Page Title - CTO Breakfast Club{% endblock %}
{% block content %}
  <!-- Page content here -->
{% endblock %}
```

- Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Always use `url_for()` for static files and routes
- Include alt text for all images
- Use proper heading hierarchy (h1 → h2 → h3)

## ⚡ Performance Optimization Standards

### Critical Performance Rules
```javascript
// ✅ ALWAYS use requestAnimationFrame for scroll events
window.addEventListener('scroll', function() {
    requestAnimationFrame(function() {
        // Your scroll logic here
    });
}, { passive: true });

// ❌ NEVER directly manipulate DOM on scroll without RAF
window.addEventListener('scroll', function() {
    element.style.top = window.scrollY + 'px'; // BAD!
});
```

### Animation Performance
- **Use CSS transforms** instead of changing position/size properties
- **Prefer `opacity` and `transform`** - These don't trigger layout
- **Use `will-change` sparingly** - Only on elements that will animate
- **Unobserve elements** after animation completion to free resources
- **Test on lower-end devices** - Animations should never cause jank

### Scroll Optimization Patterns
```javascript
// Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', function() {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(updateScrollState);
}, { passive: true });
```

## 🐍 Flask Development Standards

### Route Patterns
```python
@app.route('/')
def home():
    """Homepage with engaging content"""
    # Keep routes simple and focused
    # Pass data via render_template
    data = prepare_page_data()
    return render_template('index.html', **data)
```

### Template Rendering
- Always pass data explicitly to templates
- Use `url_for('static', filename='...')` for static files
- Use `url_for('route_name')` for internal links
- Keep route logic minimal - move complex logic to separate functions

### Error Handling
```python
# Always include basic error handlers
@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

@app.errorhandler(500)
def server_error(error):
    return render_template('500.html'), 500
```

## ✅ Task Management for Development

- Break feature additions into clear, testable steps
- Mark tasks complete immediately after testing
- Update task status in real-time during development
- Test in browser before marking implementation complete
- Verify responsive behavior on multiple screen sizes

## 🚫 Anti-Patterns to Always Avoid

### Code Anti-Patterns
- ❌ **Don't use jQuery or Bootstrap** - This is a vanilla JS project
- ❌ **Don't add build tools** unless absolutely necessary (no Webpack, Vite, etc.)
- ❌ **Don't use inline styles or `<style>` tags** - Everything goes in `style.css`
- ❌ **Don't animate position/width/height** - Use transforms only
- ❌ **Don't create parallax effects** - These cause scroll jank
- ❌ **Don't skip the `DOMContentLoaded` check** - Always wait for DOM ready
- ❌ **Don't use synchronous scroll listeners** - Always use `{ passive: true }`

### Project Anti-Patterns
- ❌ **Don't reorganize the file structure** - It's intentionally simple
- ❌ **Don't add unnecessary dependencies** - Keep requirements.txt minimal
- ❌ **Don't create separate CSS files** - One `style.css` is intentional
- ❌ **Don't add a database** unless explicitly needed - Start simple
- ❌ **Don't over-engineer** - This is a community website, not a SaaS platform

### Design Anti-Patterns
- ❌ **Don't change the color palette** without good reason
- ❌ **Don't remove emojis** - They're part of the brand
- ❌ **Don't make it look corporate** - Keep it fun and engaging
- ❌ **Don't ignore mobile users** - Mobile-first is mandatory
- ❌ **Don't add heavy images/videos** without optimization

## 🧪 Testing & Quality Standards

### Testing Checklist (Run Before Every Commit)
```bash
# 1. Start the development server
python app.py

# 2. Test all routes
# - http://localhost:5000/
# - http://localhost:5000/about
# - http://localhost:5000/join

# 3. Check browser console for errors
# 4. Test on mobile viewport (Chrome DevTools)
# 5. Test all animations for smoothness
# 6. Test form submission (if applicable)
# 7. Verify responsive breakpoints
```

### Browser Testing
- Chrome/Edge (primary)
- Firefox (secondary)
- Safari (if available)
- Mobile browsers (Chrome Mobile, Safari iOS)

### Accessibility Testing
- Keyboard navigation works for all interactive elements
- Screen reader compatibility (test with NVDA/JAWS if possible)
- Sufficient color contrast (WCAG AA minimum)
- Alt text on all images
- Proper heading hierarchy

## 🔧 Common Development Tasks

### Adding a New Page
```python
# 1. Create template in templates/
# templates/new_page.html
{% extends "base.html" %}
{% block title %}New Page - CTO Breakfast Club{% endblock %}
{% block content %}
  <div class="page-hero">
    <h1>New Page</h1>
  </div>
{% endblock %}

# 2. Add route in app.py
@app.route('/new-page')
def new_page():
    """Description of new page"""
    return render_template('new_page.html')

# 3. Add navigation link in base.html if needed
<li><a href="{{ url_for('new_page') }}" class="nav-link">New Page</a></li>
```

### Adding Interactive Features
```javascript
// 1. Add to animations.js inside DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // New feature code here
    const newFeature = document.querySelector('.new-feature');
    if (newFeature) {
        newFeature.addEventListener('click', function() {
            // Feature logic
        });
    }
});

// 2. Add styles to style.css
.new-feature {
    /* Styles here */
    transition: transform 0.3s ease;
}

.new-feature:hover {
    transform: translateY(-5px);
}
```

### Modifying Animations
```css
/* 1. Check existing CSS variables */
:root {
    --animation-speed: 0.3s;
    --animation-easing: ease;
}

/* 2. Use transforms for performance */
.animated-element {
    transition: transform var(--animation-speed) var(--animation-easing);
}

.animated-element:hover {
    transform: scale(1.05) translateY(-5px);
}
```

## 🔒 Security Best Practices

- Never commit sensitive data to git
- Use environment variables for any API keys (if added in future)
- Validate all form inputs before processing
- Implement CSRF protection for forms (use Flask-WTF if adding forms)
- Sanitize user inputs to prevent XSS attacks
- Use HTTPS in production
- Keep Flask and dependencies updated

## 📱 Responsive Design Standards

### Breakpoints
```css
/* Mobile first - default styles are for mobile */

/* Tablet */
@media (max-width: 768px) {
    /* Tablet-specific adjustments */
}

/* Mobile */
@media (max-width: 480px) {
    /* Mobile-specific adjustments */
}
```

### Mobile Considerations
- Touch targets minimum 44x44px
- Readable font sizes (minimum 16px for body)
- Adequate spacing for finger taps
- Test hamburger menu if navigation collapses
- Ensure forms are usable on small screens

## 🎯 Project-Specific Guidelines

### CTO Breakfast Club Brand Voice
- **Tone**: Professional but friendly, engaging, community-focused
- **Emojis**: Use liberally but tastefully (☕🚀💡🎯👥📚🌟)
- **Language**: Inclusive, encouraging, inspiring
- **Focus**: Technology leadership, networking, learning, community

### Content Guidelines
- Keep headings clear and actionable
- Use short paragraphs for readability
- Include calls-to-action that encourage joining
- Highlight community benefits over features
- Maintain Microsoft partnership visibility

## 🚀 Deployment Considerations
### Pre-Deployment Checklist
- [ ] Set `debug=False` in `app.py`
- [ ] Add production WSGI server (Gunicorn recommended)
- [ ] Configure environment variables
- [ ] Set up static file serving (CDN or nginx)
- [ ] Enable HTTPS
- [ ] Test on production-like environment
- [ ] Monitor performance with real users

### Production Configuration
```python
# app.py for production
if __name__ == '__main__':
    import os
    debug_mode = os.getenv('FLASK_DEBUG', 'False') == 'True'
    app.run(
        debug=debug_mode,
        host='0.0.0.0',
        port=int(os.getenv('PORT', 5000))
    )
```

---

**These global rules apply to ALL development work on the CTO Breakfast Club project. Following these guidelines ensures a consistent, performant, and maintainable codebase.**