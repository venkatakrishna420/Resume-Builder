import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Preview from './pages/Preview'
import Home from './pages/Home'
import Form from './pages/Form'
import NavBar from './components/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <NavBar />

        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/userDetails" element={<Form />} />
           <Route path="/preview" element={<Preview />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App