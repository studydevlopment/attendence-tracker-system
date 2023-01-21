import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

function EditEmployee() {

    const [employeeName, setEmployeeName] = useState();
    const [projectName, setProjectName] = useState();
    const [workingHours, setworkingHours] = useState();
    const [projectDescrption, setProjectDescrption] = useState();
    const [date, setDate] = useState();

    return (
        <div>
            <h2>Edit Employees Comming soon</h2>
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
                            // onClick={saveEmployees}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditEmployee
