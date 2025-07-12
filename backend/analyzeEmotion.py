from typing import Dict, Any
from emotiondata import EMOTIONS_DATA
import random

# Function to analyze the emotion in a given text input
def analyze_emotion(text : str) -> Dict[str, any] :
    # Convert text to lowercase for case-insensitive keyword matching
    text_lower=text.lower()
    
    matches=[]

    # Loop through each emotion and its associated data
    for emotion, data in EMOTIONS_DATA.items() :
        # Count how many keywords for this emotion are found in the input text
        keywordMatches=sum(1 for keyword in data["keywords"] if keyword in text_lower)
        
        # If any keywords match, add the emotion and match count to the list
        if keywordMatches > 0 :
            matches.append((emotion, keywordMatches, data))
            
    # If no emotion keywords were found, return a default "Neutral" emotion result
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
     
    # Pick the emotion with the highest number of keyword matches   
    best_match=max(matches, key=lambda x : x[1])
    emotion , _, data=best_match
    
    # Randomly generate confidence within the emotion's configured range
    confidence=round(random.uniform(*data["confidence_range"]), 2)
    
    # Return the final result
    return {
        "emotion" : emotion.title(),# Capitalize the emotion label
        "confidence" : confidence,
        "suggestions" : data["suggestions"]# Return predefined suggestions for that emotion
    }
        
    