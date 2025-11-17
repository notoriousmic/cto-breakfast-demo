# CTO Breakfast Club by Microsoft ☕🚀

**An AI Agent Demo Showcasing GitHub Integration Use Cases**

This repository demonstrates practical AI agent use cases integrated directly into GitHub workflows. Built around a fun CTO Breakfast Club website, it showcases how AI agents can assist with code fixes, reviews, and release management - all triggered through simple GitHub comments!

## 🤖 AI Agent Use Cases

This demo showcases three powerful AI agent integrations:

### 1. **@claude-fix** - Automated Issue Resolution
Comment `@claude-fix` on any issue to have an AI agent:
- 🔍 Analyze the problem
- 💻 Propose code changes
- 🔄 Create a pull request with fixes
- ✅ Requires write access to repository

**Use Case:** Automate bug fixes, feature implementations, and code improvements

### 2. **@claude-review** - AI Code Reviews
Comment `@claude-review` on pull requests to get:
- 🧐 In-depth code analysis
- 💡 Suggestions for improvements
- 🐛 Potential bug detection
- 📝 Best practice recommendations
- ✅ Requires write access to repository

**Use Case:** Get instant, thorough code reviews without waiting for human reviewers

### 3. **AI-Generated Release Notes**
Automatically generate comprehensive release notes:
- 📊 Analyze commits and PRs
- 📝 Generate structured release documentation
- 🎯 Highlight key changes and improvements
- 🔗 Include contributor attribution

**Use Case:** Streamline release management with intelligent documentation

---

## 📚 About the Demo Application

A fun and engaging website for the CTO Breakfast Club - where technology leaders connect, share ideas, and fuel innovation!

## Features

- 🎨 Modern, responsive design with engaging animations
- ☕ Interactive homepage with dynamic content
- 📚 Comprehensive About page explaining our mission and values
- 🤝 Join page with an interactive membership form
- 💫 Smooth scroll animations and parallax effects
- 📱 Mobile-friendly responsive layout
- 🎯 Built with Flask (Python) and vanilla JavaScript

## 🚀 Getting Started with AI Agents

### Try the Agents (For Repository Contributors)

1. **Create an issue** describing a bug or feature request
2. **Comment `@claude-fix`** to trigger the automated fix agent
3. **Review the PR** created by the agent
4. **Comment `@claude-review`** on any PR for an AI code review

### Prerequisites for Running the Demo Application

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

## 🔧 How the AI Agents Work

The agents are powered by GitHub Actions workflows that integrate Claude Code:

### Agent Architecture
```
GitHub Comment (@claude-fix/@claude-review)
        ↓
GitHub Actions Workflow Triggered
        ↓
Claude Code Agent Analyzes Context
        ↓
Agent Performs Task (Fix/Review)
        ↓
Results Posted as PR or Comment
```

### Key Files
- `.github/workflows/claude-fix.yaml` - Fix agent workflow
- `.github/workflows/claude-review.yaml` - Review agent workflow
- `.github/workflows/release-notes.yaml` - Release notes generator
- `.github/issue_fix_prompt.md` - Custom instructions for fix agent
- `.github/pr_review_prompt.md` - Custom instructions for review agent

### Security Features
- ✅ Permission checks (write access required)
- ✅ Isolated execution environment
- ✅ Automated unauthorized user messages
- ✅ Read-only mode for reviews

## 💻 Technologies Used

**AI Agent Stack:**
- **AI Platform**: Claude Code (Anthropic)
- **Integration**: GitHub Actions workflows
- **Trigger**: Comment-based activation
- **Security**: GitHub permissions API

**Demo Application Stack:**
- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Custom CSS with animations and transitions
- **Features**: Intersection Observer API, smooth scrolling, form handling

## 🎯 Use Cases & Benefits

### For Development Teams
- **Faster Iteration**: Get instant code fixes and reviews
- **24/7 Availability**: AI agents work around the clock
- **Consistent Quality**: Apply best practices automatically
- **Learning Tool**: See how AI approaches problems

### For Repository Maintainers
- **Reduced Backlog**: Automate routine fixes and reviews
- **Better Documentation**: Auto-generated release notes
- **Onboarding**: Help new contributors with instant feedback
- **Experimentation**: Safe environment to test AI capabilities

## 🔐 Setting Up Your Own AI Agent Integration

Want to add similar AI agents to your repository? Here's how:

1. **Get Claude Code Access**: Sign up for Claude Code (Anthropic)
2. **Configure GitHub Secrets**: Add `CLAUDE_CODE_AUTH` token to your repository
3. **Copy Workflow Files**: Use the workflows in `.github/workflows/` as templates
4. **Customize Instructions**: Edit prompt files in `.github/` for your use case
5. **Test**: Create an issue and try `@claude-fix`!

See [AGENTS.md](AGENTS.md) for detailed global rules and development guidelines.

## 🤝 Contributing

Feel free to submit issues and enhancement requests! Try using `@claude-fix` to see the AI agent in action!

## 📖 Learn More

- **GitHub Actions Documentation**: Learn about workflow automation
- **Claude Code**: Explore AI-powered development tools
- **Repository Workflows**: Check `.github/workflows/` for implementation details

## 🎓 Educational Value

This demo showcases:
- ✅ **Practical AI Integration**: Real-world GitHub workflow examples
- ✅ **Automation Patterns**: Comment-triggered AI agent patterns
- ✅ **Security Best Practices**: Permission checks and access control
- ✅ **Scalable Architecture**: Extensible workflow templates
- ✅ **Developer Experience**: Seamless integration into existing workflows

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ as a demo for AI agent use cases in GitHub workflows**

*Powered by Claude Code • Inspired by the CTO Breakfast Club community • Microsoft*

> **Note**: This is a demonstration repository showcasing AI agent capabilities. The CTO Breakfast Club website serves as the demo application context.