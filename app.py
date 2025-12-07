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
    """Battle of the Agents - AI comparison showcase"""
    # Define AI agents for the battle comparison
    agents = [
        {
            'name': 'Claude',
            'company': 'Anthropic',
            'icon': '🧠',
            'color': '#FF6B35',
            'strengths': ['Reasoning', 'Analysis', 'Code Review', 'Long-form Writing'],
            'specialty': 'Constitutional AI & Safe Reasoning',
            'description': 'Advanced AI assistant focused on helpful, harmless, and honest interactions with strong reasoning capabilities.'
        },
        {
            'name': 'GPT-4',
            'company': 'OpenAI', 
            'icon': '⚡',
            'color': '#10A37F',
            'strengths': ['Creativity', 'Code Generation', 'Multimodal', 'General Knowledge'],
            'specialty': 'Multimodal Intelligence',
            'description': 'Cutting-edge AI model with broad capabilities across text, vision, and creative tasks.'
        },
        {
            'name': 'Cursor',
            'company': 'Cursor',
            'icon': '✨', 
            'color': '#0078D4',
            'strengths': ['Code Editing', 'IDE Integration', 'Real-time Assistance', 'Developer UX'],
            'specialty': 'AI-Powered Development',
            'description': 'AI-first code editor that understands your codebase and provides intelligent assistance.'
        },
        {
            'name': 'GitHub Copilot',
            'company': 'GitHub/Microsoft',
            'icon': '🚀',
            'color': '#6366F1', 
            'strengths': ['Code Completion', 'Git Integration', 'Pair Programming', 'Enterprise Ready'],
            'specialty': 'Development Productivity',
            'description': 'Your AI pair programmer that suggests code and entire functions in real-time.'
        }
    ]
    
    return render_template('battle.html', agents=agents)

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)
