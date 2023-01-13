import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import M from "materialize-css";
import { UserContext } from "../../App";

const Signin = () => {
  const { dispatch } = useContext(UserContext)
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginData = () => {
    if (
      !/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({ html: "invalid email", classes: "red darken-3 rounded" });
      return;
    }
    fetch("http://localhost:5000/auth/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.messageError) {
          M.toast({ html: data.messageError, classes: "red darken-3 rounded" });
        } else {
          localStorage.setItem("jwt", data.token)
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({type:"USER", payload:data.user})
          M.toast({ html: "Login success", classes: "green darken-3 rounded" });
          navigate("/");
        }
      });
  };

  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2 className="brand-logo">SignIn</h2>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn waves-effect waves-light light-blue darken-1"
          style={{ width: "100%" }}
          onClick={() => loginData()}
        >
          Login
        </button>
        <p>
          <Link className="blue-text" to="/signup">
            Create account ?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
