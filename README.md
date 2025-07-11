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

### 🔹 Frontend
- React with TypeScript
- CSS (modern features)
- Custom hooks for API integration

### 🔹 Backend
- Python
- FastAPI framework
- Pydantic for data validation
- CORS middleware for cross-origin requests

---


---

## 🚀 Getting Started

### 📦 Backend Setup (FastAPI)

> ⚠️ Make sure you have Python installed. Use `py` if `python` is not recognized.

bash
cd backend
py -m venv venv           # Create virtual environment
venv\Scripts\activate     # Activate it (Windows)

pip install fastapi uvicorn
uvicorn main:app --reload

The API will be available at http://127.0.0.1:8000/analyze

---

## 📱 Usage

```text
1. Enter your reflection in the provided textarea (e.g., "I'm feeling anxious about tomorrow's meeting").
2. Click the "Analyze My Reflection" button.
3. Wait for the backend to respond (a loading state will be shown).
4. View the mock emotion result and confidence score.
5. Click "New Reflection" to reset the form and enter a new reflection.

```
---

##🎯 Assessment Criteria Coverage:- 

✅ Code Quality & Structure
- Clean folder structure (separate frontend/backend)
- Type-safe code with React + TypeScript
- Component-based architecture
- Clear separation of UI and API logic

✅ API Integration Approach
- POST request using Axios with async/await
- Custom React hook (optional) to handle API calls
- CORS enabled in FastAPI using middleware
- Graceful error handling and loading states

✅ UI/UX Polish
- Responsive mobile-first design
- Smooth and styled loading indicator
- Clear success and error messaging
- Emotion result styled in a card format
- Modern look with proper spacing and font sizing


---


##🔮 Future Enhancements

- Integrate actual ML/NLP-based emotion detection using Hugging Face or OpenAI APIs
- Add user authentication for saving reflection history
- Visualize emotion trends with charts (e.g., Recharts or Chart.js)
- Implement reminders/notifications for daily reflections
- Add a feature to export reflection data to PDF/CSV
- Add dark mode and customizable UI themes

  ---

##📝 License

This project was created as part of an internship assignment.
All code is original and solely for demonstration purposes.

---

👨‍💻 Author

Name: Rahul Choudhary
GitHub: https://github.com/your-username
LinkedIn: https://linkedin.com/in/your-profile
Email: your.email@example.com


---
