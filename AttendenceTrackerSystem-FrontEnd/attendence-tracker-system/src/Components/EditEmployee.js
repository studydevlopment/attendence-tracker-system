import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditEmployee() {

    const [employeeName, setEmployeeName] = useState();
    const [projectName, setProjectName] = useState();
    const [workingHours, setworkingHours] = useState();
    const [projectDescrption, setProjectDescrption] = useState();
    const [date, setDate] = useState();
    const navigate = useNavigate();

    const redirecToHome = () =>{
        navigate("/header")
    }

    return (
        <div className="d-flex justify-content-center" style={{ marginTop: "150px" }}>
            <div class="card shadow-lg p-3 rounded border-0" style={{ width: "60rem" }} >
                <div className="card-header bg-transparent border-bottom-0">
                    <h1 className="modal-title fs-5 text-center" id="staticBackdropLabel"> Edit Employees </h1>
                </div>

                <div class="card-body border border-3 rounded-5 border-dark p-5">
                    <div className="row">
                        <div className="col-sm-4">
                            <TextField sx={{ width: "30ch", input: { color: "black" } }}
                                style={{ color: "white" }}
                                id="outlined-multiline-flexible"
                                label="Name"
                                className="ms-2"
                                value={employeeName}
                                onChange={(e) => setEmployeeName(e.target.value)} focused />
                        </div>
                        <div className="col-sm-4">
                            <TextField sx={{ width: "29ch", input: { color: "black" } }}
                                style={{ color: "white" }}
                                id="outlined-multiline-flexible"
                                label="Project" className="ms-2"
                                value={employeeName}
                                onChange={(e) => setEmployeeName(e.target.value)} focused />
                        </div>
                        <div className="col-sm-4">
                            <TextField sx={{ width: "30ch", input: { color: "black" } }}
                                style={{ color: "white" }}
                                id="outlined-multiline-flexible"
                                label="WorkingHours" value={employeeName}
                                onChange={(e) => setEmployeeName(e.target.value)} focused />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-sm-6">
                            <TextField sx={{ width: "45ch", input: { color: "black" } }}
                                style={{ color: "white" }}
                                className="ms-2" id="outlined-multiline-flexible"
                                label="Descrption"
                                value={employeeName}
                                onChange={(e) => setEmployeeName(e.target.value)} focused />
                        </div>

                        <div className="col-sm-6">
                            <TextField sx={{ width: "47ch", input: { color: "black" } }}
                                style={{ color: "white" }}
                                id="outlined-multiline-flexible"
                                label="Date"
                                value={employeeName}
                                onChange={(e) => setEmployeeName(e.target.value)} focused />
                        </div>
                    </div>
                </div>
                <div class="card-footer bg-transparent border-top-0 text-center">
                    <button type="button" class="btn btn-outline-primary rounded-pill mt-2" style={{ width: "200px" }}
                        onClick={redirecToHome}
                    > Update </button>
                </div>
            </div>
        </div>
    )
}

export default EditEmployee
