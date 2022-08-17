import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Login from "./Login";

const DashBord = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
 
  const logOut=()=>{
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Pyzen
          </Link>
          
          <button type="button" class="btn btn-danger" onClick={logOut}>Logout</button>
        </div>
      </nav>
    </div>
  );
};

export default DashBord;
