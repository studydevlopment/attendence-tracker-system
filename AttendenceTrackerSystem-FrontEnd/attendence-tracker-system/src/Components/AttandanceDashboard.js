import { Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import Authentication from "../Service/Authentication";

function AttandanceDashboard() {
  const [timePickerValue, setTimePickerValue] = useState(
    dayjs('2022-04-07'),
  );

  const [employeeName, setEmployeeName] = useState();
  const [projectName, setProjectName] = useState();
  const [workingHours, setworkingHours] = useState();
  const [projectDescrption, setProjectDescrption] = useState();
  const [date, setDate] = useState();
  const [emp, setEmp] = useState([]);

  const navigate = useNavigate();

  const employeDetails = {
    employeeName: employeeName,
    projectName: projectName,
    workingHours: workingHours,
    projectDescrption: projectDescrption,
    date: date
  };

  const saveEmployees = () => {
    setTimeout(() => {
      Authentication.createEmployee(employeDetails).then((res) => {
        console.log(res.data);
      });
    }, 500);
    navigate("/header");
  }

  const getAllEmployees = async () => {
    await Authentication.getEmployeList().then((res) => {
      setEmp(res.data);
      console.log("Student list is:" + JSON.stringify(emp.data));
    });
  }

  useEffect(() => {
    getAllEmployees();
  }, [])

  return (
    <div>
      <div className="d-flex justify-content-end">
        <div
          className="card mt-5 me-5 border border-0"
          style={{ width: "90rem" }}
        >
          <div className="card-body">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page">
                        EmployeeDetails
                      </a>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-1"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      +Employees
                    </button>
                  </form>
                </div>
              </div>
            </nav>
            <table className="table border border-2 table-striped table-hover border-opacity-50">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Name</th>
                  <th scope="col">Project</th>
                  <th scope="col">WorkingHours</th>
                  <th scope="col">Descrption</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  emp.map((std) => {
                    return (
                      <tr key={std.employeeId}>
                        <td>{std.employeeId}</td>
                        <td>{std.date}</td>
                        <td>{std.employeeName}</td>
                        <td>{std.projectName}</td>
                        <td>{std.workingHours}</td>
                        <td>{std.projectDescrption}</td>
                        <td>
                          <button className='btn btn-primary'>edit</button>
                          <button className='btn btn-danger'>delete</button>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Showing 1 to 1 of 1 entries
                      </a>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <button type="button" className="btn btn-outline-primary">
                      next
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Modal */}

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-center border border-bottom-0">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Adding Employees
              </h1>
            </div>
            <div className="modal-body border border-2 rounded-4 border-dark">
              <div className="row">
                <div className="col-sm-4">
                  <TextField
                    sx={{ width: "28ch", input: { color: "black" } }}
                    style={{ color: "white" }}
                    id="outlined-multiline-flexible"
                    label="Name"
                    value={employeeName}
                    onChange={e => setEmployeeName(e.target.value)}
                    focused
                  />
                </div>
                <div className="col-sm-4">
                  <TextField
                    sx={{ width: "28ch", input: { color: "black" } }}
                    style={{ color: "white" }}
                    id="outlined-multiline-flexible"
                    label="ProjectName"
                    value={projectName}
                    onChange={e => setProjectName(e.target.value)}
                    focused
                  />
                </div>
                <div className="col-sm-4">
                  <TextField
                    sx={{ width: "28ch", input: { color: "black" } }}
                    style={{ color: "white" }}
                    id="outlined-multiline-flexible"
                    placeholder="HH:MM"
                    label="WorkingHours"
                    value={workingHours}
                    onChange={e => setworkingHours(e.target.value)}
                    focused
                  />
                </div>
              </div>

              <div className="row mt-3">

                <div className="col-sm-4">
                  <TextField
                    sx={{ width: "28ch", input: { color: "black" } }}
                    style={{ color: "white" }}
                    id="outlined-multiline-flexible"
                    label="ProjectDescrption"
                    focused
                    value={projectDescrption}
                    onChange={e => setProjectDescrption(e.target.value)}
                  />
                </div>

                <div className="col-sm-4">
                  <Stack component="form" noValidate spacing={3}>
                    <TextField
                      id="date"
                      label="Date"
                      value={date}
                      onChange={e => setDate(e.target.value)}
                      focused
                      type="date"
                      //defaultValue="2017-05-24"
                      sx={{ width: 244 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Stack>
                </div>


              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center border border-top-0">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
                style={{ width: "150px" }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{ width: "150px" }}
                onClick={saveEmployees}
              >
                <Link to="/header">Save</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttandanceDashboard;
