import './App.css';
import React,{useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');// Whether dark mode is enabled or not
  const[alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }

  const toggleMode = (cls)=>{
    removeBodyClasses();
    //console.log(cls);
    document.body.classList.add('bg-'+cls);
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert("Dark mode has been enabled","success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("light mode has been enabled","success");
      }
    }

  
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About us"/> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title='TextUtils'mode = {mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/about"element={<About mode={mode}/>}>
        </Route>
        <Route exact path="/"element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode}/>}>
        </Route>
      </Routes>
      {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
      {/* <About/> */}
    </div>
    </Router>
    </>
  );
}

export default App;
