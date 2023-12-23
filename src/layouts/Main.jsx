import { Box, Button,  Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/Auth";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Main() {
  const {user,setUser}=useContext(MyContext)
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [value, setValue] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

useEffect(()=>{
  user?handleClick():null
},[user])

  const handleTransition = () => {
    setLogin(!login);
  };
  const signFetch = async () => {
    const data = await fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailValue,
        password: value,
        first_name: fName,
        last_name: lName,
      }),
    });
    const response =await data.json();
    const autho= response[0].auth.login
    autho?setUser(autho):setUser(false)
  };
  const loginFetch = async () => {
    const data = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailValue,
        password: value,
      }),
    });
    const response =await data.json();
    const autho= response[0].auth.login
    autho?setUser(autho):setUser(false)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginFetch();
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    if (value !== cPassword) {
      alert("Password UnMatched!");
    } else {
      signFetch();
    }
  };
  const handleEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const handlePassword = (e) => {
    setValue(e.target.value);
  };
  return (
    <Box
      component="main"
      sx={{ px: 2, height: "80vh", display: "grid", placeItems: "center" }}
    >
      {login ? (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ p: 4, border: "1px solid black" }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ marginBottom: "10px", textAlign: "center" }}
          >
            Login
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "220px", md: "240px" },
              gap: "5px",
            }}
          >
            <input
              type="email"
              placeholder="Email"
              style={{
                height: "34px",
                paddingInline: "14px",
                paddingBlock: "5px",
                borderRadius: "50px",
                outline: "none",
                border: "1px solid black",
              }}
              value={emailValue}
              onChange={handleEmail}
              required
            />
            <input
              type={`${!showPassword ? "password" : "text"}`}
              placeholder="Password"
              style={{
                height: "34px",
                paddingInline: "14px",
                paddingBlock: "5px",
                borderRadius: "50px",
                outline: "none",
                border: "1px solid black",
              }}
              value={value}
              onChange={handlePassword}
              required
            />
            <Box sx={{ display: "flex" }}>
              <input
                type="checkbox"
                id="password"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />{" "}
              <Typography component="label" htmlFor="password">
                Show Password
              </Typography>
            </Box>
            <Box sx={{ display: "grid", placeItems: "center" }}>
              <Button type="submit" variant="contained">
                Login
              </Button>
            </Box>
          </Box>
          <Box sx={{ marginTop: "5px" }}>
            <Typography sx={{ display: "inline" }}>
              Does not have account?{" "}
              <Button
                sx={{ minWidth: "auto", p: 0 }}
                onClick={handleTransition}
                disableRipple
              >
                Create
              </Button>
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          component="form"
          onSubmit={handleSignIn}
          sx={{ p: 4, border: "1px solid black" }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ marginBottom: "10px", textAlign: "center" }}
          >
            SignIn
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "280px", md: "320px" },
              gap: "5px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "5px",
              }}
            >
              <input
                type="text"
                placeholder="First Name"
                style={{
                  height: "34px",
                  paddingInline: "14px",
                  paddingBlock: "5px",
                  width: "100%",
                  borderRadius: "50px",
                  outline: "none",
                  border: "1px solid black",
                }}
                value={fName}
                onChange={(e) => {
                  setFName(e.target.value);
                }}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                style={{
                  height: "34px",
                  paddingInline: "14px",
                  paddingBlock: "5px",
                  width: "100%",
                  borderRadius: "50px",
                  outline: "none",
                  border: "1px solid black",
                }}
                value={lName}
                onChange={(e) => {
                  setLName(e.target.value);
                }}
                required
              />
            </Box>
            <input
              type="email"
              placeholder="Email"
              style={{
                height: "34px",
                paddingInline: "14px",
                paddingBlock: "5px",
                borderRadius: "50px",
                outline: "none",
                border: "1px solid black",
              }}
              value={emailValue}
              onChange={handleEmail}
              required
            />
            <input
              type={`${!showPassword ? "password" : "text"}`}
              placeholder="Password"
              style={{
                height: "34px",
                paddingInline: "14px",
                paddingBlock: "5px",
                borderRadius: "50px",
                outline: "none",
                border: "1px solid black",
              }}
              value={value}
              onChange={handlePassword}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              style={{
                height: "34px",
                paddingInline: "14px",
                paddingBlock: "5px",
                borderRadius: "50px",
                outline: "none",
                border: "1px solid black",
              }}
              value={cPassword}
              onChange={(e) => {
                setCPassword(e.target.value);
              }}
              required
            />
            <Box sx={{ display: "flex" }}>
              <input
                type="checkbox"
                id="password"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />{" "}
              <Typography component="label" htmlFor="password">
                Show Password
              </Typography>
            </Box>
            {value &&
            cPassword &&
            value.length <= cPassword.length &&
            value !== cPassword ? (
              <Typography sx={{ color: "red", textAlign: "center" }}>
                Password didn't matched!
              </Typography>
            ) : null}
            <Box sx={{ display: "grid", placeItems: "center" }}>
              <Button type="submit" variant="contained">
                SignIn
              </Button>
            </Box>
          </Box>
          <Box sx={{ marginTop: "5px" }}>
            <Typography sx={{ display: "inline" }}>
              Already have an account?{" "}
              <Button
                sx={{ minWidth: "auto", p: 0 }}
                onClick={handleTransition}
                disableRipple
              >
                LogIn
              </Button>
            </Typography>
          </Box>
        </Box>
      )}
       <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Logged In"
        action={action}
      />
    </Box>
  );
}

export default Main;
