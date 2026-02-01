import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


const Home = () => (
  <div className="page-center">
    <div className="card">
      <h1>Welcome</h1>

      <div className="button-row">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
