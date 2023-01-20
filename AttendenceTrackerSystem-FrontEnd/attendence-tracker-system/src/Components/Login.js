import React, { useEffect, useState } from "react";
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
import { ToastContainer, toast } from 'react-toast'

function Login() {

    const [showPassword, setShowPassword] = React.useState(false);
    const [showConformPassword, setShowConformPassword] = React.useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

    const newUser = {
        email: email,
        password: password
    };

    const navigate = useNavigate();
   
    const redirectToRegister = () => {
        navigate("/register");
    };
    const[user,setUser]=useState();
    useEffect(()=>{
        Authentication.getUsersList().then((res)=>{
            setUser(res.data);
        });
    },[]);

    const showToastMessage = () => {
        toast.success('Login Success !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    
    const  redirectToDashboard = () => {
        user.filter((res) => {
            if (email == res.email && password == res.password) {
              setTimeout(() => {
                showToastMessage();
              }, 500);
              navigate("/header");
            }
          });
    };

    const redirecToForgot = () =>{
        navigate("/forgot");
    }

    const isEnabled = () => {
        return email.length && password.length;
    };
    return (
        <div>
            <div className="register">
                <div
                    className="float-end  me-5 rounded-5 border border-dark border-4 shadow-lg p-2 mb-5 bg-tertiary"
                    id="regcard"
                    style={{ width: "24rem", height: "570px", marginTop: "80px" }}
                >
                    <div className="ms-3 mt-3">
                        <div className="col-sm-12 mb-4">
                            <img src={log} alt="network error" className="logoimage rounded-4" />
                        </div>

                        <div className="col-sm-12 mb-4">
                            <TextField
                                sx={{ width: "38ch", input: { color: "white" } }}
                                style={{ color: "white" }}
                                id="outlined-multiline-flexible"
                                label="Email"
                                focused
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-12 mb-4">
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
                                    style={{ color: "white" }}
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
                                                style={{ color: "white" }}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </div>

                        <div className="col-12">
                            <div className="row">
                                <div className="col">
                                    <button
                                        type="submit"
                                        id="start_button"
                                        className="btn btn-outline-primary text-light border-light rounded-4 mt-3"
                                        style={{ width: "150px", height: "43px" }}
                                        onClick={redirectToDashboard}
                                        disabled={!isEnabled()}
                                    >
                                        Login
                                    </button>
                                </div>
                                <div className="col">
                                    <button
                                        type="submit"
                                        id="start_button"
                                        className="btn btn-outline-primary text-light border-light rounded-4 mt-3"
                                        style={{ width: "150px", height: "43px" }}
                                        onClick={redirectToRegister}
                                    >
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <p className="text-center mt-5 fs-4 fw-bold forgotpara" onClick={redirecToForgot}>forgot Password?</p>
                        </div>

                        <div className="col-12">
                            <p className="text-center mt-4 fs-5 fw-bold reqpara">If you dont have Account please signup</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
