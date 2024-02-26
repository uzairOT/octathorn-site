import { React, useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Container,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://octathorn.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Store the token in sessionStorage or localStorage
      sessionStorage.setItem("token", data.token);
      // Alternatively, use localStorage.setItem('token', data.token);
      setUsername("");
      setPassword("");
      navigate("/adminpanel");
      console.log("Server response:", data);
    } catch (error) {
      alert("Invalid Credentials");
      console.error("Error:", error.message);
    }
  };

  const themeStyle = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    paper: {
      padding: { lg: 4, md: 4, sm: 1, xs: 1 },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#f6f6f6",
      boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
    },
    title: {
      color: "#0e4366",
      marginBottom: { lg: 3, md: 3, sm: 3, xs: 1 },
      fontFamily: "Montserrat",
      fontSize: { lg: "2.5rem", md: "2.3rem", sm: "2rem", xs: "1.25rem" },
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "131.043%",
      textTransform: "capitalize",
    },

    button: {
      background: "#1b2231",
      color: "white",
      "&:hover": {
        background: "#0e4366",
      },
    },
  };

  return (
    <Container maxWidth="xl" sx={{ marginTop: 14 }}>
      <Grid container spacing={5} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              alignItems: "start",
              justifyContent: "center",
              paddingLeft: themeStyle.paper.padding,
              paddingRight: themeStyle.paper.padding,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                ...themeStyle.title,
                textAlign: {
                  lg: "start",
                  md: "start",
                  sm: "start",
                  xs: "center",
                },
              }}
            >
              Admin Login
            </Typography>
            <form onSubmit={handleSubmit} autoComplete="off">
              <TextField
                required
                sx={{ marginBottom: 4 }}
                label="Username"
                variant="outlined"
                fullWidth
                className={themeStyle.textField}
                value={username}
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                required
                sx={{ marginBottom: 4 }}
                label="Password"
                autoComplete="off"
                type="password"
                variant="outlined"
                fullWidth
                className={themeStyle.textField}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                sx={{ marginBottom: 4 }}
                variant="contained"
                className={themeStyle.button}
              >
                Login
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
