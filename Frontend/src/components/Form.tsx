import { useState } from "react";
import { useEmotionStore } from "../store/EmotionStore";

const Form: React.FC = ()=>{
    const {analyzeEmotion}=useEmotionStore();
    const [inputText, setInputText]=useState("");

    const handleSubmit=async(e: React.FormEvent)=>{
        e.preventDefault();

        if(!inputText.trim()){
            alert("Please enter some text to analyze");
            return;
        }
        console.log(inputText);
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