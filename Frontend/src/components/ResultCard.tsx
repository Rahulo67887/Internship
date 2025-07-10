import { useEmotionStore } from "../store/EmotionStore"

const ResultCard : React.FC =()=>{
    const {result, setResult}=useEmotionStore();
    if (!result) return null; 
    
    const handleNewReflection =()=>{
        setResult(null);
    }

    return (
        <div className='result-section'>
            <div className="result-card">
                <div className="emotion=header">
                    <h3>Emotion Detected</h3>
                    <div className="emotion-badge">
                        <span className="emotion-name">{result.emotion}</span>
                        <span className="confidence">{Math.round(result.confidence*100)}% confidence</span>
                    </div>
                </div>

                <div className="suggestions">
                    <h4>Suggestions for you :</h4>
                    <ul>
                        {result.suggestions.map((suggestion, index)=>(
                            <li key={index}>{suggestion}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <button 
                    onClick={handleNewReflection} 
                    className='new-reflection-button'>
                    New Reflection
        </button>
        </div>
    );
}

export default ResultCard;