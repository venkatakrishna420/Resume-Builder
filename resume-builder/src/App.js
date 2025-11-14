import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './pages/Form';
import Preview from './pages/Preview';

function App() {
  return (
    <div className='bg-slate-300'>

    <BrowserRouter >

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userDetails' element={<Form />}/>
        <Route path='/download-resume' element={<Preview />}/>
      </Routes>
      
    </BrowserRouter>

    </div>
  );
}

export default App;
