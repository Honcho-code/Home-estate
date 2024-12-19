import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Project from './Components/Project'
import Testemonial from './Components/Testemonial'

function App() {
  return (
    <div className='w-full overflow-hidden'>
     <Header/>
     <About/>
     <Project/>
     <Testemonial/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
