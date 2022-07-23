import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Style.css";
import icon from "./images/icon.png";


function Login(props) {
  const [radio, setRadio] = useState(1);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      radio === 0 &&
      credentials.username === "admin" &&
      credentials.password === "admin"
    ) {
      navigate("/questions");
    } else if (
      radio === 1 &&
      credentials.username === "student" &&
      credentials.password === "student"
    ) {
      navigate("/student");
    } else {
      alert("INVALID CREDENTIALS!!!");
    }
  };
  return (
    <div className="d-flex justify-content-center " id="bigbox">
      <div className="d-flex">
        <div className="smallbox">
          <img
            src={icon}
            alt="icon"
            style={{ height: "500px", width: "500px" }}
          />
          <h1 style={{ marginLeft: "15vh" }}>ExamRig</h1>
          <h2 style={{ marginLeft: "15vh" }}>
            Create custom tests
            <br />
            And Prepare for exam
          </h2>
        </div>
        <div className="d-flex justify-content-center " id="login">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center">Welcome back!</h1>

            <div
              className="d-flex justify-content-xl-between"
              style={{ margin: "40px" }}
            >
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value={radio}
                  onClick={(e) => setRadio(0)}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Admin
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                  value={radio}
                  onClick={(e) => setRadio(1)}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Student
                </label>
              </div>
            </div>
            <div style={{ width: "400px", margin: "30px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
                style={{
                  height: "50px",
                  fontSize: "1em",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div className="mb-15" style={{ width: "400px", margin: "30px" }}>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={credentials.password}
                placeholder="Password"
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                style={{
                  height: "50px",
                  fontSize: "1em",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div className="d-flex justify-content-center ">
              <button
                type="submit"
                className="btn btn-primary align-center"
                style={{
                  fontSize: "1em",
                  borderRadius: "40px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  marginTop: "20px",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
