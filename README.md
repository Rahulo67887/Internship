Emotion Reflection Tool
A simple web application that allows users to input text reflections and receive mock emotion analysis. Built with React + TypeScript frontend and Python FastAPI backend.

🚀 Features
Mobile-first responsive design
Real-time emotion analysis (mock implementation)
Clean, intuitive user interface
Loading states and error handling
Confidence scoring for emotions
Helpful suggestions based on detected emotions


🛠️ Tech Stack
Frontend :- 
React 18 with TypeScript
CSS3 with modern features
Mobile-first responsive design
Custom hooks for API integration
Backend :-
Python
FastAPI framework
Pydantic for data validation
CORS middleware for cross-origin requests


🚀 Getting Started
Prerequisites
Python 3.8 or higher
Node.js 16 or higher
npm or yarn
Backend Setup
Navigate to the backend directory:
bash
cd backend
Create a virtual environment:
bash
python -m venv venv

# On Windows:
venv\Scripts\activate

# On macOS/Linux:
source venv/bin/activate


Install dependencies:
bash
Run the API server:
bash
python main.py
The API will be available at http://127.0.0.1:8000/analyze
Verify the API is running:
Visit http://127.0.0.1:8000/analyze in your browser
Frontend Setup
Navigate to the frontend directory:
bash
cd frontend
Install dependencies:
bash
npm install
Start the development server:
bash
npm run dev
The application will open at http://localhost:3000


📱 Usage
Enter your reflection: Type your thoughts or feelings in the text area
Submit for analysis: Click "Analyze My Reflection"
View results: See the detected emotion, confidence score, and suggestions
New reflection: Click "New Reflection" to start over
🔧 API Endpoints
POST /analyze
Analyzes the emotional content of text input.

Request Body:

json
{
  "text": "I feel nervous about my first job interview"
}
Response:

json
{
  "emotion": "Anxious",
  "confidence": 0.85,
  "suggestions": [
    "Try deep breathing exercises",
    "Break the situation into smaller steps",
    "Remember that it's normal to feel this way"
  ]
}
61
🎨 Design Decisions
Frontend
Mobile-first approach: Designed for mobile devices first, then enhanced for desktop
Gradient backgrounds: Modern, engaging visual design
Smooth animations: Enhanced user experience with CSS transitions
Accessibility: Proper focus states and semantic HTML
Error handling: Graceful degradation with retry functionality
Backend
Mock emotion analysis: Keyword-based emotion detection for demonstration
Confidence scoring: Realistic confidence ranges for different emotions
CORS enabled: Allows frontend to connect from different origins
Input validation: Proper error handling for invalid inputs
Suggestions system: Contextual advice based on detected emotions


🎯 Assessment Criteria Coverage:- 

✅ Code Quality & Structure
Clean architecture: Separated concerns between API and UI
TypeScript: Full type safety in frontend
Error handling: Comprehensive error states
Component organization: Logical component structure

✅ API Integration Approach
Custom hooks: Clean separation of API logic
Error handling: Graceful error recovery
Type safety: Proper TypeScript interfaces
CORS handling: Proper cross-origin setup
Loading states

✅ UI/UX Polish
Mobile-first design: Responsive across all devices
Loading animations: Smooth user feedback
Error states: Clear error messaging
Modern design: Contemporary gradient backgrounds and animations

🐛 Troubleshooting
Common Issues
CORS Error:
Ensure the backend is running on port 8000
Check that the frontend is making requests to the correct URL
Verify CORS middleware is properly configured

# Frontend
npm install
📊 Mock Emotion Analysis
The backend uses keyword-based emotion detection with these categories:

Anxious: nervous, worry, scared, afraid, anxious, stressed, panic
Excited: excited, thrilled, happy, joy, amazing, great, wonderful
Sad: sad, down, depressed, upset, disappointed, hurt, lonely
Confident: confident, ready, prepared, strong, capable, proud
Overwhelmed: overwhelmed, too much, stressed, busy, exhausted, tired

🔮 Future Enhancements

Real ML Integration: Replace mock analysis with actual ML models
User Authentication: Save reflection history
Data Visualization: Charts showing emotion trends over time
Notification System: Reminders for daily reflections
Export Feature: Download reflection history
Themes: Dark mode and custom color schemes

📝 License
This project is created for internship assignment purposes.
👨‍💻 Author
Created as part of an internship assignment - demonstrating full-stack development skills with React, TypeScript, and Python.

🚦 Quick Start Commands
bash# Backend
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
python main.py

# Frontend (in new terminal)
cd frontend
npm install
npm start
Visit http://localhost:3000 to use the application!

