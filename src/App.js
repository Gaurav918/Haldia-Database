import logo from './logo.svg';
import { useEffect,useState } from 'react';
import "./commonPages/Forms/FormInput.css";
import { configureStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './commonPages/NavBar';
import FormInputs from './commonPages/Forms/FormInputs';
function App() {
  return (
    <div className="mainpage">
    
    <NavBar/>
    <div className="registration " style={{padding : '10px' }}>
    
    <FormInputs/>
    </div>
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
