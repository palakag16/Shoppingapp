import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { verifyCreds } from "../Shared/Services/LoginServices";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const navigate=useNavigate();
  const fetchData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const SubmitForm = async () => {
    try {
      const res = await verifyCreds(data);
      if (res.token) {
        localStorage.setItem("combonation", res.token);
        alert("logged in succesfully")
        navigate("/")
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box className="login_wrapped">
          <Typography className="fs_22 color_dark">Login</Typography>
          <Box>
            <Box sx={{ py: "0.5rem" }}>
              <Typography className="fs_14 color_dark">
                Username
              </Typography>
              <TextField
                variant="outlined"
                disableripple="true"
                name="username"
                value={data.username}
                sx={{ width: "100%" }}
                inputProps={{
                  placeholder: "Enter username",
                }}
                onChange={fetchData}
              ></TextField>
            </Box>
            <Box sx={{ py: "0.5rem" }}>
              <Typography className="fs_14 color_dark"> Password</Typography>
              <TextField
                variant="outlined"
                type="password"
                onChange={fetchData}
                value={data?.password}
                disableripple="true"
                name="password"
                sx={{ width: "100%" }}
                inputProps={{
                  placeholder: "Enter your password",
                }}
              ></TextField>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mb: "3rem" }}>
            <Button
            variant="contained"
              sx={{
                mt: "1.5rem",
                width: "20%",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={SubmitForm}
              disabled={data.password&&data.username?false:true}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
