import './App.css'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'

function App() {

  return (
    <div className='app'>
      <Header />
      <main className="app-main">
        <Form/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
