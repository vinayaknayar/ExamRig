import React from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import "./css/Style.css";


function Question(props) {
  // console.log(props);
  
  

  const {_id , Question , Answer} = props.questions;
  const history = useNavigate();
  const deleteHandler = async() =>{
    await axios.delete(`http://localhost:5000/questions/${_id}`).then(res => res.data).then(() => history("/")).then(()=> history("/questions"));
  }
  return (<> 
    <div className="d-flex justify-content-center">

    <div className="toast fade show " role="alert" aria-live="assertive" aria-atomic="true" id="outerdiv" >
        <div className="toast-body" >
          <div className="p-2 mb-2  text-dark" id="innerdiv" >
            Question: {Question} </div>
          <div className="p-2 mb-2  text-dark  border-top" id="innerdiv" >
            Answer: {Answer}</div>
          <div className="mt-2 pt-2 mx-2 ">
            <button type="button" className="btn text-white" data-bs-dismiss="toast" onClick={deleteHandler}  style={{ backgroundColor:"crimson",   fontSize: "1.5em", borderRadius: "30px", paddingLeft: "30px",paddingRight : "30px" , marginTop: "10px"}}>Delete</button>
          </div>
        </div>
      </div>

    </div>
  <br />

    {/* </div> */}
  </>);
}

export default Question;
