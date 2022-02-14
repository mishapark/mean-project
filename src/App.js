import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Singup } from './pages/Singup';
import { Login } from './pages/Login';

function App() {
  return (
    <BrowserRouter >
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Singup/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
