import React from 'react';
function QuestionToast(props) {
    return ( <>
     <br />
  <br />
    <div className="container mt-5px">
    <div className="mb-5 align-middle mx-auto">
    <div className="toast fade show " role="alert" aria-live="assertive" aria-atomic="true" style={{width: "200%"}}>
        <div className="container"> 
          Q
        </div>
        <div className="toast-body" >
          <div className="p-2 mb-2 bg-dark text-white">
            Question: {props.Question.Ques}</div>
          <div className="p-2 mb-2 bg-secondary text-white border-top">
            Answer: {props.Question.Answer}</div>
          <div className="mt-2 pt-2 border-top">
            {/* <button type="button" class="btn btn-primary btn-sm">Take action</button> */}
            <button type="button" className="btn btn-primary" data-bs-dismiss="toast">Delete</button>
          </div>
        </div>
      </div>

    </div>
    </div>
    </> );
}

export default QuestionToast;