import { Button, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import UpdateIcon from '@mui/icons-material/Update';
import Authentication from '../Service/Authentication';

function EditEmployee() {

    const [employeeName, setEmployeeName] = useState();
    const [projectName, setProjectName] = useState();
    const [workingHours, setworkingHours] = useState();
    const [projectDescrption, setProjectDescrption] = useState();
    const [date, setDate] = useState();
    const navigate = useNavigate();
    const params = useParams();

    const updatedArray = {
        employeeName:employeeName,
        projectName:projectName,
        workingHours:workingHours,
        projectDescrption:projectDescrption,
        date:date
    }

    const redirecToHome = async() =>{
        await Authentication.UpdateEmployee(updatedArray);
        navigate("/header");
    }

    useEffect(()=>{
        Authentication.getEmployeById(params.employeeId).then((res)=>{
            console.log(res.data);
            setEmployeeName(res.data.employeeName);
            setProjectName(res.data.projectName);
            setworkingHours(res.data.workingHours);
            setProjectDescrption(res.data.projectDescrption);
            setDate(res.data.date);
        });
    },[]);

    return (
        <div className="d-flex justify-content-center" style={{ marginTop: "150px" }}>
            <div className="card shadow-lg p-3 rounded border-0" style={{ width: "60rem" }} >
                <div className="card-header bg-transparent border-bottom-0">
                    <h1 className="modal-title fs-5 text-center" id="staticBackdropLabel"> Edit Employees </h1>
                </div>

                <div className="card-body border border-3 rounded-5 border-dark p-5">
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
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)} focused />
                        </div>
                        <div className="col-sm-4">
                            <TextField sx={{ width: "30ch", input: { color: "black" } }}
                                style={{ color: "white" }}
                                id="outlined-multiline-flexible"
                                label="WorkingHours" value={workingHours}
                                onChange={(e) => setworkingHours(e.target.value)} focused />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-sm-6">
                            <TextField sx={{ width: "45ch", input: { color: "black" } }}
                                style={{ color: "white" }}
                                className="ms-2" id="outlined-multiline-flexible"
                                label="Descrption"
                                value={projectDescrption}
                                onChange={(e) => setProjectDescrption(e.target.value)} focused />
                        </div>

                        <div className="col-sm-6">
                            <TextField sx={{ width: "47ch", input: { color: "black" } }}
                                style={{ color: "white" }}
                                id="outlined-multiline-flexible"
                                label="Date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)} focused />
                        </div>
                    </div>
                </div>
                <div className="card-footer bg-transparent border-top-0 text-center">
                    <Button
                      size="large"
                      color="primary"
                      className="rounded-pill me-3"
                      variant="outlined"
                      sx={{ fontSize: 17, width: 300 }}
                      startIcon={<UpdateIcon />}
                      onClick={redirecToHome}
                    >
                      Update
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default EditEmployee
