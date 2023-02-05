// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import Alert from './components/Alert';
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TeaxtForm from "./components/TeaxtForm";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode enable", "primary")
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enable", "success")
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <TeaxtForm heading="Enter your text here" mode={mode} />
        {/* <Routes>
          <Route path="/about" element ={<About/>}/>
          <Route path="/" element ={<TeaxtForm heading="Enter your text here" mode={mode} />}/>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
