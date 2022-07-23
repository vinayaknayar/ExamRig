import React, { useEffect, useState } from "react";
import axios from "axios";
// import Admin from "./Admin";
import Question from "./Question";
import "./css/Style.css";
import { Link } from "react-router-dom";
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const URL = "http://localhost:5000/questions";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Questions = () => {
  const [questions, setQuestions] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setQuestions(data.questions));
  }, []);

  console.log(questions);

  return (
    <>
      <div className="addQuestion">
        {/* <div className="mx-auto"> */}
         <Link to="/admin">
          <button id="plusIcon" >
           &nbsp; Add Question &nbsp; 
            <FontAwesomeIcon icon={faPlusCircle} />
          </button></Link>
        {/* </div> */}
      </div>

      <div>
        <ul style={{ listStyleType: "none"}}>
          {questions &&
            questions.map((question, i) => (
              <li className="book" key={i}>
                {/* <Book book={question} /> */}
                <Question questions={question} />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Questions;
