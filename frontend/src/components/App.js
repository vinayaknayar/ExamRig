import "./App.css";
import Login from "./Login.js";
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from "./Questions.js"
import Admin from "./Admin.js";
import Student from "./Student.js";
import Result from "./Result";
function App() {
  const [score, setScore] = useState(0);


  
  // const adder =()=>{
  //   setScore(score+1);
  // }

  return (
    <>
      <div className="container-fluid mt-5" >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />

            <Route  exact  path="/admin" element={<Admin />} />
            <Route  exact path="/questions" element={<Questions />} />
            {/* <Route exact path="/admin" element={<<<Question />} /> */}
            <Route exact path ="/student" element ={<Student setScore= {setScore}/>}/>
            <Route exact path='/result' element={<Result score={score}/>} />
          
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
