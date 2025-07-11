import './App.css'
import ErrorMessage from './components/ErrorMessage'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import LoadingSpinner from './components/LoadingSpinner'
import ResultCard from './components/ResultCard'
import {useEmotionStore } from './store/EmotionStore'

function App() {

  const {result, isLoading, error}=useEmotionStore();

  return (
      <div className='app'>
        <Header />
        <main className="app-main">
          {!result && !isLoading && !error && <Form/>}
          {isLoading && <LoadingSpinner/>}
          {error && (
            <ErrorMessage 
              message={error} 
            />
          )}
          {result && <ResultCard/>}
        </main>
        <Footer/>
      </div>
  )
}

export default App
