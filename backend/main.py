from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from emotiondata import EMOTIONS_DATA
from analyzeEmotion import analyze_emotion
import time, random

# Create FastAPI application instance
app=FastAPI()

# Enable CORS so the API can be accessed from any frontend (e.g., React, web clients)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],# Allow requests from any domain
    allow_methods=["*"], # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],# Allow all headers
)

# Input model to validate request body for /analyze endpoint
class ReflectionInput(BaseModel):
    text: str
    
# Response model to ensure consistent response schema for the emotion analysis
class EmotionResponse(BaseModel):
    emotion : str
    confidence : float
    suggestions : list[str]
    
@app.get("/")
async def root():
    return {"message" : "Emotion Reflection app is running!"}
    
    
# POST endpoint to analyze the emotional content of user input
@app.post("/analyze")
async def analyse_reflection(input_data: ReflectionInput):
    try :
        # Check if input text is empty or only whitespace
        if not input_data.text or len(input_data.text.strip())==0 :
            raise HTTPException(status_code=400, detail="Text input can not be empty")
        
         # Simulate a short delay to mimic real-world processing latency
        time.sleep(random.uniform(0.5, 1.5))
        
        # Perform emotion analysis using the utility function
        result=analyze_emotion(input_data.text)
        
        # Return result using the defined response model
        return EmotionResponse(**result)
        
    except HTTPException:
        # Re-raise known HTTP exceptions (e.g., bad input)
        raise
    except Exception as e :
        # Catch-all for any other errors during processing
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")