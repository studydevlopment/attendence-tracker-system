import React, { useState } from 'react';
import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import log from '../Images/logo2.jpg';
import Authentication from "../Service/Authentication";

function Forgot() {

    const [showPassword, setShowPassword] = React.useState(false);
    const [showConformPassword, setShowConformPassword] = React.useState(false);
    const [email, setEmail] = useState("");
    const [type, setType] = useState("");
    const [otp, setotp] = useState("");
    const [password, setPassword] = useState("");
    const [conformPassword, setConformPassword] = useState("");

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShow = () => setShowConformPassword((show) => !show);
    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div>
            <div
                className="float-end border-light me-5 rounded-5 border border-dark border-4 shadow-lg p-2 mb-4 bg-tertiary"
                id="regcard"
                style={{ width: "24rem", height: "570px", marginTop: "80px" }}
            >
                <div className="ms-3 mt-3">
                    <div className="col-sm-12 mb-4">
                        <img src={log} alt="network error" className="logoimage rounded-4" />
                    </div>

                    <div className="col-sm-12 mb-3">
                        <TextField
                            sx={{ width: "38ch", input: { color: "black" } }}
                            style={{ color: "white" }}
                            id="outlined-multiline-flexible"
                            label="Email"
                            focused
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {/* <div className="col-sm-12 mb-3">
                        <FormControl
                            sx={{ width: "38ch" }}
                            variant="outlined"
                            label="Outlined"
                            focused
                        >
                            <InputLabel htmlFor="outlined-adornment-password">
                                Password
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                style={{ color: "black" }}
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            label="Outlined"
                                            style={{ color: "black" }}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </div>
                    <div className="col-sm-12 mb-2">
                        <FormControl
                            sx={{ width: "38ch" }}
                            variant="outlined"
                            label="Outlined"
                            focused
                        >
                            <InputLabel htmlFor="outlined-adornment-password">
                                ConformPassword
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                style={{ color: "black" }}
                                type={showConformPassword ? "text" : "password"}
                                value={conformPassword}
                                onChange={(e) => setConformPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShow}
                                            onMouseDown={handleMouseDown}
                                            edge="end"
                                            label="Outlined"
                                            style={{ color: "black" }}
                                        >
                                            {showConformPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="ConformPassword"
                            />
                        </FormControl>
                    </div> */}
                    <div className="row">
                        <div className="col mt-2">
                            <TextField
                                sx={{ width: "38ch", input: { color: "white" } }}
                                style={{ color: "white" }}
                                id="outlined-multiline-flexible"
                                label="OTP"
                                focused
                                value={otp}
                                onChange={(e) => setotp(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="row">
                    <div className="col">
                        <button
                            type="submit"
                            id="start_button"
                            className="btn btn-outline-info text-primary border-dark rounded-4 mt-3"
                            style={{ width: "150px", height: "43px" }}
                        >
                            GetOtp
                        </button>
                    </div>
                        <div className="col">
                            <button
                                type="submit"
                                id="start_button"
                                className="btn btn-outline-info text-primary border-dark rounded-4 mt-3"
                                style={{ width: "150px", height: "43px" }}
                            >
                                validate
                            </button>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgot
