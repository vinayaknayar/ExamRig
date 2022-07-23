import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentQuestion from "./StudentQuestion";
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import "./css/Style.css";
import Result from "./Result";

const URL = "http://localhost:5000/questions";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function Student(props) {
  const [display, setDisplay] = useState(false);

  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [questions, setQuestions] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setQuestions(data.questions));
  }, []);

  const adder = () => {
    setScore(score + 1);
  };
  const getTotal = () => {
    setTotal(total + 1);
  };

  const handleDisplay = (e) => {
    setDisplay(true);
  };

  if (display) {
    return (
      <div>
        <Result score={score} total={total} />
      </div>
    );
  } else {
    return (
      <>
        <div>
          <ul style={{ listStyleType: "none" }}>
            {questions &&
              questions.map((question, i) => (
                <li key={i}>
                  <StudentQuestion
                    questions={question}
                    adder={adder}
                    getTotal={getTotal}
                  />
                </li>
              ))}
          </ul>
        </div>
        <div className="result-btn">
          <button onClick={handleDisplay} id="plusIcon">
            View result
          </button>
        </div>
      </>
    );
  }
}

export default Student;
