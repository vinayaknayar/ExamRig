import React, { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import "./css/Style.css";




function Admin(props) {
 
  const history = useNavigate();
  
 
  const [data, setData] = useState({
     Ques: '' , Answer: ''
  });
  const sendRequest = async() =>{
    await axios.post("http://localhost:5000/questions",{
      Question: String (data.Ques),
      Answer: String(data.Answer)
    }).then(res => res.data);
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    if(data.Ques === "" || data.Answer ===""){
      alert("All the fields are mandatory!");
    }
    else{
    
    sendRequest().then(() => history('/questions'));
 
  }
    
  };

  return (
    <>
      <div style={{textAlign: "center", textDecoration: "underline"}}>
          <h1>
            Add New Question
          </h1>
        </div>
      <div className="d-flex justify-content-center" style={{position: "relative", top: "80px"}} >
        
       
      <form onSubmit={handleSubmit}  className="question-form">
        <div className="container">
          <div className="mb-3 mx-auto" >
            <label htmlFor="Question" className="form-label">
              Question:
            </label>
            <input
              type="text"
              className="form-control"
              id="question"
              placeholder="Enter question here!"
              value={data.Ques}
              onChange={(e) => setData({ ...data, Ques: e.target.value })}
            />
          </div>
          <div className="mb-3" >
            <label htmlFor="answer" className="form-label">
              Answer:
            </label>
            <input
              type="text"
              className="form-control"
              
              placeholder="Enter correct answer here!"
              value={data.Answer}
              onChange={(e) => setData({ ...data, Answer: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary" 
            style={{   fontSize: "0.8em", borderRadius: "40px", paddingLeft: "20px",paddingRight : "20px" , marginTop: "10px"}}
            >

            Add Question
          </button>
        </div>
        
      </form>
      </div>
      {/* {template} */}
      {/* <Question handleSubmit={handleSubmit} data ={data} /> */}
    </>
  );
}

export default Admin;
