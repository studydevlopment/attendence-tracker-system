import React from "react";
import dropdownlogo from "../Images/eshu.jpg";
import AttandanceDashboard from "./AttandanceDashboard";
import { useNavigate } from "react-router-dom";


function Header() {

  const navigate = useNavigate();

  const logout = () =>{
    navigate("/");
  }
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-light shadow p-3 mb-5 rounded"
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                Home
              </li>
            </ul>
            <form className="d-flex">
              <i className="fa fa-bell mt-2 me-3" style={{ fontSize: "12px" }} />
              <div className="dropdown">
                <button className="btn btn-outline-light dropdown-toggle border-0 text-dark" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={dropdownlogo} alt="Logo" id="headerdropdown" className="rounded-circle me-2" />Laura johnson
                </button>
                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><a className="dropdown-item" href="#" onClick={logout}>SignOut</a></li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </nav>
      <AttandanceDashboard/>
    </div>
  );
}

export default Header;
