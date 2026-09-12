import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Principal from './components/principal.jsx'
import Cursos from './components/cursos.jsx'
import Contador from './components/contador.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <Header />
      <Principal />
      <Cursos />
      <Contador />
      <Footer />
    </div>
  )
}

export default App
