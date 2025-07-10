import './App.css'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import { EmotionProvider } from './store/EmotionStore'

function App() {

  return (
    <EmotionProvider>
      <div className='app'>
        <Header />
        <main className="app-main">
          <Form/>
        </main>
        <Footer/>
      </div>
    </EmotionProvider>
  )
}

export default App
