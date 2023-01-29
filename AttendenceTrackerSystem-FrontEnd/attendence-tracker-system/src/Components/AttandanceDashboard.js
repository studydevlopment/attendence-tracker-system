import {
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Authentication from "../Service/Authentication";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import HomeIcon from "@mui/icons-material/Home";
import ModeIcon from "@mui/icons-material/Mode";
import SaveIcon from "@mui/icons-material/Save";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

function AttandanceDashboard(employeeId) {
  const [employeeName, setEmployeeName] = useState();
  const [projectName, setProjectName] = useState();
  const [workingHours, setworkingHours] = useState();
  const [projectDescrption, setProjectDescrption] = useState();
  const [date, setDate] = useState();
  const [emp, setEmp] = useState([]);
  const [id, setId] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  const employeDetails = {
    employeeName: employeeName,
    projectName: projectName,
    workingHours: workingHours,
    projectDescrption: projectDescrption,
    date: date,
  };

  const getAllEmployees = () => {
    Authentication.getEmployeList().then((res) => {
      setEmp(res.data);
    });
  };

  const saveEmployees = () => {
    Authentication.createEmployee(employeDetails).then((res) => {
      console.log(res.data);
      getAllEmployees();
    });
    navigate("/header");
  };

 

  useEffect(() => {
    getAllEmployees();
  }, []);

  const EditEmployee = (employeeId) => {
    navigate(`/edit/${employeeId}`);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const DeleteEmployee = async () => {
    await Authentication.Deletemp(id).then((res) => {
      console.log(res.data);
    });
    getAllEmployees();
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (id) => {
    setId(id);
    console.log("id is:" + id);
    setOpen(true);
  };

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
                    <Button
                      size="large"
                      color="primary"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      className="rounded-pill me-3"
                      variant="outlined"
                      sx={{ fontSize: 17, width: 300 }}
                      startIcon={<AddCircleOutlineOutlinedIcon />}
                    >
                      Employees
                    </Button>
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
                {emp.map((std) => {
                  return (
                    <tr key={std.employeeId}>
                      <td>{std.employeeId}</td>
                      <td>{std.date}</td>
                      <td>{std.employeeName}</td>
                      <td>{std.projectName}</td>
                      <td>{std.workingHours}</td>
                      <td>{std.projectDescrption}</td>

                      <td>
                        <button
                          className="btn btn-outline-primary me-2"
                          onClick={() => EditEmployee(std.employeeId)}
                        >
                          <ModeIcon />
                        </button>
                        <button
                          className="btn btn-outline-danger ms-2"
                          //onClick={() => redirecTODelete(std.employeeId)}
                          onClick={() => handleClickOpen(std.employeeId)}
                        >
                          <DeleteForeverOutlinedIcon />
                        </button>
                      </td>
                    </tr>
                  );
                })}
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
                    onChange={(e) => setEmployeeName(e.target.value)}
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
                    onChange={(e) => setProjectName(e.target.value)}
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
                    onChange={(e) => setworkingHours(e.target.value)}
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
                    onChange={(e) => setProjectDescrption(e.target.value)}
                  />
                </div>

                <div className="col-sm-4">
                  <Stack component="form" noValidate spacing={3}>
                    <TextField
                      id="date"
                      label="Date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
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
              <Button
                size="large"
                color="primary"
                data-bs-dismiss="modal"
                className="rounded-pill me-3"
                variant="outlined"
                sx={{ fontSize: 17, width: 140 }}
                startIcon={<CancelOutlinedIcon />}
              >
                Close
              </Button>

              <Button
                size="large"
                color="primary"
                data-bs-dismiss="modal"
                className="rounded-pill"
                variant="outlined"
                sx={{ fontSize: 17, width: 140 }}
                startIcon={<SaveIcon />}
                onClick={saveEmployees}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"> </DialogTitle>
        <DialogContent>
          <div className="d-flex justify-content-center">
            <h2 className="text-center">
              Are you shore Do you want to delete?
            </h2>
          </div>
        </DialogContent>
        <DialogActions className="d-flex justify-content-center mb-4">
          <Button
            size="large"
            color="primary"
            className="rounded-pill"
            variant="outlined"
            startIcon={<HomeIcon />}
            onClick={handleClose}
          >
            Cancel
          </Button>

          <Button
            size="large"
            color="primary"
            className="rounded-pill"
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={DeleteEmployee}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AttandanceDashboard;
