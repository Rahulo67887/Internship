# 😌 Emotion Reflection Tool

A simple web application that allows users to input text reflections and receive mock emotion analysis. Built with React + TypeScript frontend and Python FastAPI backend.


---

## 🧩 Features

- Mobile-first responsive design
- Real-time emotion analysis (mock implementation)
- Clean, intuitive user interface
- Text input and submission form
- Loading state while waiting for API response and error handling
- Emotion and confidence score displayed
- Helpful suggestions based on detected emotions
- Full-stack architecture: React frontend + FastAPI backend


---


## 🛠️ Tech Stack
Frontend :- 
React with TypeScript
CSS with modern features
Custom hooks for API integration
Backend :-
Python
FastAPI framework
Pydantic for data validation
CORS middleware for cross-origin requests


---

## 🚀 Getting Started

### 📦 Backend Setup (FastAPI)

> Make sure you have Python installed. Use `py` if `python` is not recognized.

bash
cd backend
py -m venv venv           # Create virtual environment
venv\Scripts\activate     # Activate it (Windows)

pip install fastapi uvicorn
uvicorn main:app --reload

The API will be available at http://127.0.0.1:8000/analyze

---

##📱 Usage
Enter your reflection: Type your thoughts or feelings in the text area
Submit for analysis: Click "Analyze My Reflection"
View results: See the detected emotion, confidence score, and suggestions
New reflection: Click "New Reflection" to start over


---

##🎯 Assessment Criteria Coverage:- 

✅ Code Quality & Structure
Clean architecture: Separated between API and UI
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

---


##🔮 Future Enhancements

Real ML Integration: Replace mock analysis with actual ML models
User Authentication: Save reflection history
Data Visualization: Charts showing emotion trends over time
Notification System: Reminders for daily reflections
Export Feature: Download reflection history
Themes: Dark mode and custom color schemes

##📝 License
This project is created for internship assignment purposes.
👨‍💻 Author
Created as part of an internship assignment - demonstrating full-stack development skills with React, TypeScript, and Python.
