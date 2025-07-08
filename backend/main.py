from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from emotiondata import EMOTIONS_DATA
from analyzeEmotion import analyze_emotion
import time, random

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ReflectionInput(BaseModel):
    text: str
    
class EmotionResponse(BaseModel):
    emotion : str
    confidence : float
    suggestions : list[str]
    
@app.get("/")
async def root():
    return {"message" : "Emotion Reflection app is running!"}
    
    
@app.post("/analyse")
async def analyse_reflection(input_data: ReflectionInput):
    try :
        if not input_data.text or len(input_data.text.strip())==0 :
            raise HTTPException(status_code=400, detail="Text input can not be empty")
        
        time.sleep(random.uniform(0.5, 1.5))
        
        result=analyze_emotion(input_data.text)
        
        return EmotionResponse(**result)
        
    except HTTPException:
        raise
    except Exception as e :
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")