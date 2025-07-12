//Importing css
import './App.css'

// Importing components
import ErrorMessage from './components/ErrorMessage'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import LoadingSpinner from './components/LoadingSpinner'
import ResultCard from './components/ResultCard'

// Importing global emotion context state
import {useEmotionStore } from './store/EmotionStore'

function App() {
  // Destructure necessary values from context: result, loading state, and error
  const {result, isLoading, error}=useEmotionStore();

  return (
      <div className='app'>
        <Header />
        <main className="app-main">
           {/* Show the Form if there's no result, not loading, and no error */}
          {!result && !isLoading && !error && <Form/>}
          {/* Show loading spinner when the emotion analysis is in progress */}
          {isLoading && <LoadingSpinner/>}
          {/* Show error message if any error occurs during analysis */}
          {error && (
            <ErrorMessage 
              message={error} 
            />
          )}
          {/* Show the result card once the analysis is complete */}
          {result && <ResultCard/>}
        </main>
        <Footer/>
      </div>
  )
}

export default App
