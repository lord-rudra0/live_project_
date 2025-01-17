<<<<<<< HEAD
=======
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
<<<<<<< HEAD
#connecting...
=======

>>>>>>> 62141ae (Test)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route("/questions")
def get_questions():
    questions = [
        {
            "category": "Critical Thinking",
            "questions": [
                {
                    "id": "critical_1",
                    "text": "Can you describe a situation where you faced a complex problem?",
                    "options": [
                        "Analyze and break down the problem",
                        "Ignore the problem",
                        "Seek external help",
                        "Other"
                    ]
                },
                {
                    "id": "critical_2",
                    "text": "How do you approach making important decisions?",
                    "options": [
                        "Evaluate available data",
                        "Follow instincts",
                        "Consult with experts",
                        "Delay the decision"
                    ]
                },
                {
                    "id": "critical_3",
                    "text": "Imagine you are given conflicting pieces of data to analyze. How would you determine which data is most reliable and why?",
                    "options": [
                        "Cross-check with credible sources",
                        "Trust your intuition",
                        "Choose the data that supports your goals",
                        "Consult a team"
                    ]
                },
                {
                    "id": "critical_4",
                    "text": "If a car travels 60 miles in one hour, how long will it take to travel 150 miles at the same speed?",
                    "options": [
                        "2 hours and 30 minutes",
                        "3 hours",
                        "3 hours and 30 minutes",
                        "None of the above"
                    ]
                }
            ]
        },
        {
            "category": "Creative Thinking",
            "questions": [
                {
                    "id": "creative_1",
                    "text": "Can you share an example of when you came up with a creative solution to a challenge?",
                    "options": [
                        "Brainstorm new ideas",
                        "Use existing solutions",
                        "Collaborate with others",
                        "Take no action"
                    ]
                },
                {
                    "id": "creative_2",
                    "text": "If you were tasked with designing a new app to improve daily productivity, what features would you include?",
                    "options": [
                        "Task management tools",
                        "AI-based scheduling",
                        "Notifications and reminders",
                        "Custom themes"
                    ]
                },
                {
                    "id": "creative_3",
                    "text": "If you could reinvent any common object (like a pen or a chair), what would you change?",
                    "options": [
                        "Add technology features",
                        "Improve design",
                        "Focus on sustainability",
                        "Make it multipurpose"
                    ]
                }
            ]
        },
        {
            "category": "Aptitude",
            "questions": [
                {
                    "id": "aptitude_1",
                    "text": "What is the next number in the sequence: 2, 6, 12, 20...? Explain how you arrived at your answer.",
                    "options": [
                        "30",
                        "28",
                        "32",
                        "24"
                    ]
                },
                {
                    "id": "aptitude_2",
                    "text": "Choose the word that best fits the analogy: 'Bird is to sky as fish is to _______. Why?",
                    "options": [
                        "Ocean",
                        "Lake",
                        "Water",
                        "River"
                    ]
                },
                {
                    "id": "aptitude_3",
                    "text": "You have three boxes: one labeled apples, one oranges, and one mixed. All labels are incorrect. By picking one fruit from one box, how can you correctly label all the boxes?",
                    "options": [
                        "Pick from the 'Mixed' box",
                        "Pick from the 'Apple' box",
                        "Pick from the 'Orange' box",
                        "Pick randomly"
                    ]
                }
            ]
        },
        {
            "category": "Caliber",
            "questions": [
                {
                    "id": "caliber_1",
                    "text": "Describe a time when you were under significant pressure to meet a goal. How did you manage your time and resources?",
                    "options": [
                        "Prioritize tasks",
                        "Delegate responsibilities",
                        "Work overtime",
                        "Take frequent breaks"
                    ]
                },
                {
                    "id": "caliber_2",
                    "text": "What long-term goals are you currently working toward?",
                    "options": [
                        "Professional development",
                        "Financial stability",
                        "Personal growth",
                        "Academic achievements"
                    ]
                },
                {
                    "id": "caliber_3",
                    "text": "If your company suddenly shifted its entire focus to a different industry, how would you approach learning and adapting to the change?",
                    "options": [
                        "Enroll in industry-related courses",
                        "Seek mentorship",
                        "Learn on the job",
                        "Explore other career options"
                    ]
                }
            ]
        },
        {
            "category": "General Personality Insights",
            "questions": [
                {
                    "id": "personality_1",
                    "text": "What would you say is your greatest strength?",
                    "options": [
                        "Adaptability",
                        "Leadership",
                        "Communication",
                        "Problem-solving"
                    ]
                },
                {
                    "id": "personality_2",
                    "text": "Do you prefer working in a team or independently?",
                    "options": [
                        "Teamwork",
                        "Independence",
                        "A mix of both",
                        "It depends on the situation"
                    ]
                }
            ]
        },
        {
            "category": "Optional Questions (if needed)",
            "questions": [
                {
                    "id": "optional_1",
                    "text": "Describe a time when you received critical feedback.",
                    "options": [
                        "Thank the person for feedback",
                        "Ignore the feedback",
                        "Make changes based on it",
                        "Discuss the feedback with others"
                    ]
                },
                {
                    "id": "optional_2",
                    "text": "If you discovered a colleague was taking credit for your work, how would you handle the situation?",
                    "options": [
                        "Confront them directly",
                        "Report them to a manager",
                        "Focus on maintaining evidence of your work",
                        "Let it go"
                    ]
                },
                {
                    "id": "optional_3",
                    "text": "If you were stranded on a deserted island and could take only three items, what would they be and why?",
                    "options": [
                        "Survival kit",
                        "Knife",
                        "Water filter",
                        "Satellite phone"
                    ]
                }
            ]
        }
    ]

    return jsonify(questions)

if __name__ == "__main__":
    app.run(debug=True)
>>>>>>> 943fc6e (Add test questions, hero, contact, about)
