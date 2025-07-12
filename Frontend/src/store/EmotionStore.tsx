import { createContext, useContext, useState, type ReactNode} from "react";

// Base URL of the backend API
const API_BASE_URL = 'http://127.0.0.1:8000';

// Interface for the structure of emotion analysis result
interface EmotionResult{
    emotion : String;
    confidence : number;
    suggestions : String[];
}

// Interface defining the shape of the EmotionContext
interface EmotionContextType{
    isLoading : boolean;
    error : string | null;
    result : EmotionResult | null;
    setResult : React.Dispatch<React.SetStateAction<EmotionResult | null>> ;
    setError : React.Dispatch<React.SetStateAction<string | null>> ;
    analyzeEmotion : (text : string) => Promise<EmotionResult | null>;
}

// Creating the context with an initial value of undefined
export const EmotionContext=createContext<EmotionContextType | undefined>(undefined);

// Props interface for the EmotionProvider component
interface EmotionProviderProps{
    children : ReactNode;
}

// EmotionProvider component that manages emotion-related state and logic
export const EmotionProvider : React.FC<EmotionProviderProps>=({ children})=>{

     // State variables for loading, result and error
    const [isLoading, setIsLoading]=useState(false);
    const [result, setResult]=useState<EmotionResult | null>(null);
    const [error, setError]=useState<string |null>(null);

    // Function to analyze emotion by sending text to the backend
    const analyzeEmotion = async (text : string) : Promise<EmotionResult | null> =>{
        setIsLoading(true);// Start loading
        setError(null);// Reset error state

        try{
            // Make POST request to the API
            const response=await fetch(`${API_BASE_URL}/analyze`, {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify({text}),
            });

             // If the response is not OK, handle the error
            if(!response.ok){
                const errorData = await response.json();
                throw new Error(errorData.detail || "Failed to analyze emotion");
            }

            // Parse the successful response data
            const data : EmotionResult =await response.json();
            console.log(data);

            // Save result to state
            setResult(data);
            return data;
        }
        catch(err){
            // Catch and handle errors
            const errorMessage = err instanceof Error ? err.message : "An umexpected error occured";
            setError(errorMessage);
            return null;
        }
        finally{
            // Always stop loading
            setIsLoading(false);
        }
    }

    // Provide state and function to child components
    return(
        <EmotionContext.Provider value={{isLoading, error, analyzeEmotion, result, setResult, setError}}>
            {children}
        </EmotionContext.Provider>
    )
}

// Custom hook to use the EmotionContext safely
export const useEmotionStore=()=>{
    const emotionContext=useContext(EmotionContext);

    // Throw error if hook is used outside the provider
    if (!emotionContext) {
    throw new Error("useEmotionStore must be used within an EmotionProvider");
  }
    return emotionContext;
}

