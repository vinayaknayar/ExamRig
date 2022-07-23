import React from 'react';
import "./css/Style.css"
function Result(props) {
    return (  <>
    
    <div className='marks'>
        <h3>Marks Obtained: {props.score}</h3>
        <h3>Maximum Marks: {props.total}</h3>
        </div>
    
        </>);
}

export default Result;