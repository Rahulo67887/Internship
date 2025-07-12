import { useState } from "react";
import { useEmotionStore } from "../store/EmotionStore";

// React functional component for the input form
const Form: React.FC = ()=>{
    // Accessing analyzeEmotion function from EmotionStore context
    const {analyzeEmotion}=useEmotionStore();

     // Local state to manage user input text
    const [inputText, setInputText]=useState("");

    // Function to handle form submission
    const handleSubmit=async(e: React.FormEvent)=>{
        e.preventDefault();// Prevent default form reload behavior

        // Check if input is empty or only whitespace
        if(!inputText.trim()){
            alert("Please enter some text to analyze");
            return;
        }
        
        // Call the emotion analysis function and log the result
        const analysedResult=await analyzeEmotion(inputText);
        console.log(analysedResult);
    }

    return (
        <form className="reflection-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="reflection-text">
                    How are you feeling today?
                </label>
                <textarea 
                    id="reflection-text" 
                    value={inputText}
                    onChange={(e)=>setInputText(e.target.value)}
                    placeholder="I fell nervous today"
                    rows={4}
                    className="reflection-textarea">
                </textarea>
            </div>

            <button
                type="submit"
                className="submit-button">
                    Analyze my reflection
            </button>
        </form>
    )
}

export default Form;