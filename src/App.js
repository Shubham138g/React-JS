// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import About from "./Component/About";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";


function App() {
  const [mode, setMode] = useState('light');
  const togglemode=() =>{
      if(mode=== 'light'){
        setMode('dark');
        document.body.style.backgroundColor ='grey';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor ='light';
      }
  }
  return (
    <>
   
      <Navbar title="TextUtils" mode={ mode}  togglemode={togglemode}/>
      <div className="container my-3">

      <TextForm heading="Enter the text" mode={mode} />
      {/* <About /> */}
      </div>
     
    </>
  );
}

export default App;
