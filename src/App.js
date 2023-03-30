import logo from './logo.svg';
import "./commonPages/Forms/FormInput.css";

import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './commonPages/NavBar';
import FormsContainer from './commonPages/Forms/FormsContainer';
import { useState } from 'react';

function App() {
  const [stage,setStage]=useState(1);
  const jsxFormInputs=<></>;
 
  return (
    <div className="mainpage">
    
    <NavBar/>
    
    <FormsContainer/>
    {/* <FormInputs/>
    </div>
    <div className="registration " style={{padding : '10px' }}>
    <FIStagetwo/> */}
    
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
