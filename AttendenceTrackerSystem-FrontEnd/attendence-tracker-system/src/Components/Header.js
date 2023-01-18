import React from "react";
import dropdownlogo from "../Images/eshu.jpg";
import AttandanceDashboard from "./AttandanceDashboard";

function Header() {
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
              <i class="fa fa-bell mt-2 me-3" style={{ fontSize: "12px" }} />
              <div class="dropdown">
                <button class="btn btn-outline-light dropdown-toggle border-0 text-dark" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={dropdownlogo} alt="Logo" id="headerdropdown" className="rounded-circle me-2" />Laura johnson
                </button>
                <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li><a class="dropdown-item" href="#">Settings</a></li>
                  <li><a class="dropdown-item" href="#">SignOut</a></li>
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
