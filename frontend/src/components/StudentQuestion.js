import React, {useState} from "react";
import axios from "axios";
import "./css/Style.css"

function StudentQuestion(props) {

   const [flag, setFlag] = useState(0);
   const {Question} = props.questions;
    const [answer, setAnswer] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
  props.getTotal();

    sendRequest();
    e.currentTarget.disabled = true;
    
  };



 const check=(e)=>{

   if (e.message === "Answer verified")
   {
    
       if (flag === 0){
       props.adder();
       setFlag(1);
      }

   }
 }

 const sendRequest = async() =>{

        await axios.post("http://localhost:5000/questions/auth",{
          Question: String (Question),
          Answer: String(answer)
    
        })
        .then(res => check(res.data));
      };
 

  return (
      
    <> 
    {/* <div className="container mt-5px">
      <div className="align-middle mx-auto">
        
      </div>
    </div>
      <br /> */}
      {/* <div className="container mt-5px"> */}
      <br />
      <div className="d-flex justify-content-center">

        {/* <div className="mb-5 mx-auto"> */}
          <div
            className="toast fade show "
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            id="outerdiv"
            // style={{ width: "700px" }}
          >
            <div className="toast-body">
              <div className="p-2 mb-2  " style={{ fontSize: "1.3em"}} id="innerdiv">
                Question: {Question}
              </div>
              <div className="p-2 mb-2 border-top" style={{ fontSize: "1.3em"}} id="innerdiv">
            
                <input
                  type="text"
                  className="form-control"
                  id="answer"
                  placeholder="Enter your answer here!"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value )}
                  
                />
              </div>
             
              <div className="mt-2 pt-2 ">
                <button
                  type="button"
                  className="btn btn-success"
                  id="submit_btn"
                  onClick={submitHandler}
            style={{   fontSize: "1.5em", borderRadius: "30px", paddingLeft: "30px",paddingRight : "30px" , marginTop: "10px", }}

                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default StudentQuestion;
