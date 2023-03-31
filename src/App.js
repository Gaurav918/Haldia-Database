import logo from './logo.svg';
import "./commonPages/Forms/FormInput.css";
import 'bootstrap'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './commonPages/NavBar';
import FormsContainer from './commonPages/Forms/FormsContainer';
import { useState } from 'react';

function App() {
  const [stage,setStage]=useState(1);
  const jsxFormInputs=<></>;
 
  return (
    <div className="body mainpage">
    <NavBar/>
    
    <FormsContainer/>
    
    </div>
    
    // <BrowserRouter>
    // <Routes>
      
    //   <Route path="/" element={}/>
    //   <Route path="/login" element={}/>
    //   <Route path="/signup" element={}/>
    // </Routes>
    // </BrowserRouter>
  );
}

export default App;
