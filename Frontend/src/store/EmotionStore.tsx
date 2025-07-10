import { createContext, useContext, useState, type ReactNode} from "react";

interface EmotionResult{
    emotion : String;
    confidence : number;
    suggestions : String[];
}

interface EmotionContextType{
    isLoading : boolean;
    error : string | null;
    analyzeEmotion : (text : string) => Promise<EmotionResult | null>;
}

export const EmotionContext=createContext<EmotionContextType | undefined>(undefined);

interface EmotionProviderProps{
    children : ReactNode;
}

export const EmotionProvider : React.FC<EmotionProviderProps>=({ children})=>{

    const [isLoading, setIsLoading]=useState(false);
    const [error, setError]=useState<string |null>(null);

    const analyzeEmotion = async (text : string) : Promise<EmotionResult | null> =>{
        setIsLoading(true);
        setError(null);

        try{
            const response=await fetch(`%{API_BASE_URL}/analyze`, {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify({text}),
            });

            if(!response.ok){
                const errorData = await response.json();
                throw new Error(errorData.detail || "Failed to analyze emotion");
            }

            const data : EmotionResult =await response.json();
            return data;
        }
        catch(err){
            const errorMessage = err instanceof Error ? err.message : "An umexpected error occured";
            setError(errorMessage);
            return null;
        }
        finally{
            setIsLoading(false);
        }
    }

    return(
        <EmotionContext.Provider value={{isLoading, error, analyzeEmotion}}>
            {children}
        </EmotionContext.Provider>
    )
}

export const useEmotionStore=()=>{
    const emotionContext=useContext(EmotionContext);
    return emotionContext;
}

