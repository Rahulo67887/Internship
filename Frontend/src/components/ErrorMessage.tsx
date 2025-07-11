import { useEmotionStore } from "../store/EmotionStore"

const ErrorMessage : React.FC<{message : string}> = ({message})=>{
    const {setResult, setError}=useEmotionStore();
    const retry=()=>{
        setResult(null); 
        setError(null);
    }
    
    return(
        <div className="error-message">
            <h3>Oops! Something went wrong</h3>
            <p>{message}</p>
            <button 
                onClick={()=>{retry()}} 
                className="retry-button">
                    Try Again
            </button>
        </div>
    );
}

export default ErrorMessage;