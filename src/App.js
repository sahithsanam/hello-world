import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Textform from './components/Testform';
import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
function App() {
  const [mode,changemode]=useState("light");
  const[modedescription,changedescription]=useState("enable light mode");
  const [alert,changealert]=useState(null);
  const modifyalert=(message,type)=>{
    changealert({
      message:message,
      type:type
    });
    setTimeout(() => {
      changealert(null);
    }, 1500);
  }
  const reverse=()=>{
      if(mode=="dark"){
        changemode("light");
        changedescription("enable dark mode");
        document.body.style.backgroundColor="white";
        modifyalert("light mode is enabled","success");
        document.title="Text Utils-Light Mode Enabled";
      }
      else{
        changemode("dark");
        changedescription("enable light mode");
        document.body.style.backgroundColor="#042743";
        modifyalert("dark mode is enabled","primary");
        document.title="Text Utils-Dark Mode Enabled";
      }
  }
  return (
    <>
    <BrowserRouter>
<NavBar title="textutils" mode={mode} desc={modedescription} changeMode={reverse} about="about textutils"/>
<Alert al={alert}/>
<div className="container my-3">
<Routes>
          <Route exact path="/about" element={ <About />}>
          </Route>
          <Route exact path="/" element={<Textform heading="enter the text to analyze" mode={mode} al={modifyalert}/>}>
          </Route>
</Routes>
  {/*  my-3 makes space of 3 on the y axis,container is a bootstrap class which is used to contain the data in a good format */}
{/*<Textform heading="enter the text to analyze" mode={mode} al={modifyalert}/>*/}
</div>
</BrowserRouter>
    </>
  );
}

export default App;
