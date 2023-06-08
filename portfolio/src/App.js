import './App.css';
import { Routes, Route } from 'react-router-dom';
// import PortFolio from './components/Home.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About';
import Home from './components/Home.jsx';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
       <Route  path='/' element={<Home/>}/>
        {/* <Route  path='/portfolio' element={<PortFolio/>}/> */}
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
      

