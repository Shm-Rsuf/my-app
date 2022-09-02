import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
import Alert from './Components/Alert';
import About from './Components/About';




// import Hooks from './Components/Hooks';

function App() {

  // const [count, setCount] = useState(0)

  // function decrementCount(){
  //   setCount(prevCount => prevCount-1)
  // }
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#041636";
      showAlert("Dark mode has been enable", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar name="TextTutorial" title="AboutUs" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* Router is starting here */}
          <Routes>
            <Route path="/home" element={<TextFrom heading="Enter your text to analyze below" mode={mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {/* Router is ended here */}
          {/* <TextFrom heading="Enter your text to analyze below" mode={mode} showAlert={showAlert} /> */}
          {/* <About/> */}
        </div>
      </BrowserRouter>
      {/* <Hooks /> */}

    </div>
  );
}

export default App;
