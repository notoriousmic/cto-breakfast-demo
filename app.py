"""
CTO Breakfast Club Website
A fun and engaging website for Microsoft's CTO Breakfast Club
"""
from flask import Flask, render_template
import random

app = Flask(__name__)

# Fun facts about CTOs and technology leadership
CTO_FACTS = [
    "Great CTOs balance innovation with operational excellence 🚀",
    "The best breakfast ideas come from sharing experiences with peers ☕",
    "Technology leadership is about people, not just code 👥",
    "CTOs who network together, grow together 🌱",
    "Breakfast meetings: where the best technical decisions are made 🍳",
    "Innovation happens at the intersection of technology and business 💡",
    "The future of tech is built one conversation at a time 💬",
    "CTOs leading with empathy create the strongest teams 💪",
]

@app.route('/')
def home():
    """Homepage with engaging content"""
    random_fact = random.choice(CTO_FACTS)
    return render_template('index.html', fact=random_fact)

@app.route('/about')
def about():
    """About the CTO Breakfast Club"""
    return render_template('about.html')

@app.route('/join')
def join():
    """Join the club page"""
    return render_template('join.html')

@app.route('/battle')
def battle():
    """Battle of the Agents - AI development showcase"""
    agents = [
        {
            'name': 'Claude',
            'icon': '🤖',
            'color': '#8B5CF6',
            'tagline': 'The Thoughtful Architect',
            'strengths': ['Complex reasoning', 'Code analysis', 'Documentation', 'Security-focused'],
            'specialty': 'Deep technical analysis and comprehensive solutions',
            'command': '@claude-fix'
        },
        {
            'name': 'Cursor',
            'icon': '⚡',
            'color': '#3B82F6',
            'tagline': 'The Speed Demon',
            'strengths': ['Fast execution', 'Code completion', 'Refactoring', 'Real-time edits'],
            'specialty': 'Lightning-fast code generation and iteration',
            'command': '@cursor-fix'
        },
        {
            'name': 'Copilot',
            'icon': '🚀',
            'color': '#10B981',
            'tagline': 'The Collaborative Partner',
            'strengths': ['GitHub integration', 'PR reviews', 'Team workflow', 'Context-aware'],
            'specialty': 'Seamless collaboration and code review excellence',
            'command': '@copilot'
        }
    ]
    return render_template('battle.html', agents=agents)

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)
