# Pull Request

## Summary
<!-- Provide a brief description of what this PR accomplishes -->

## Changes Made
<!-- List the main changes in this PR -->
- 
- 
- 

## Type of Change
<!-- Mark the relevant option with an "x" -->
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
<!-- Describe how you tested your changes -->
- [ ] Started Flask server with `python app.py`
- [ ] Tested all affected routes (/, /about, /join)
- [ ] Checked browser console for errors
- [ ] Tested on mobile viewport (Chrome DevTools)
- [ ] Verified smooth animations and scroll behavior
- [ ] Tested form submission if applicable

### Test Evidence
<!-- Provide specific test commands run and their results -->
```bash
# Example: python app.py
# Then tested routes:
# - http://localhost:5000/
# - http://localhost:5000/about
# - http://localhost:5000/join
```

## Checklist
<!-- Mark completed items with an "x" -->
- [ ] My code follows AGENTS.md development principles
- [ ] Used vanilla JavaScript (no jQuery, Bootstrap, React, Vue)
- [ ] All styles are in `style.css` (no inline styles)
- [ ] Used `url_for()` for static files and routes
- [ ] Tested responsive behavior on mobile/tablet/desktop
- [ ] Animations use only `opacity` and `transform`
- [ ] Scroll listeners use `requestAnimationFrame` and `{ passive: true }`
- [ ] Templates extend `base.html` properly
- [ ] Maintained accessibility (keyboard nav, alt text, ARIA labels)
- [ ] No new browser console errors or warnings

## Breaking Changes
<!-- If this PR introduces breaking changes, describe them here -->
<!-- Include migration steps if applicable -->

## Additional Notes
<!-- Any additional information that reviewers should know -->
<!-- Screenshots, performance metrics, dependencies added, etc. -->