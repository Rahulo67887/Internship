from typing import Dict, Any
from emotiondata import EMOTIONS_DATA
import random

def analyze_emotion(text : str) -> Dict[str, any] :
    text_lower=text.lower()
    
    matches=[]

    for emotion, data in EMOTIONS_DATA.items() :
        keywordMatches=sum(1 for keyword in data["keywords"] if keyword in text_lower)
        if keywordMatches > 0 :
            matches.append((emotion, keywordMatches, data))
    
    if not matches :
        return {
            "emotion" : "Neutral",
            "confidence" : round(random.uniform(0.60, 0.75), 2),
            "suggestions" : [
                "Take a moment to reflect on your feelings",
                "Consider what might be influencing your mood",
                "Remember that all emotions are valid"
            ] 
        }
        
    best_match=max(matches, key=lambda x : x[1])
    emotion , _, data=best_match
    
    confidence=round(random.uniform(*data["confidence_range"]), 2)
    
    return {
        "emotion" : emotion.title(),
        "confidence" : confidence,
        "suggestions" : data["suggestions"]
    }
        
    