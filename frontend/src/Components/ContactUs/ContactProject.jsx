import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const ContactProject = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const isTabletView = useMediaQuery("(max-width: 768px)");
  const theme = useTheme();

  const themeStyle = {
    styledTextArea: {
      borderRadius: "6px",
      lineHeight: "normal",
      border: "1px solid #D8D8D8",
      background: "#FFF",
      verticalAlign: "top",
      padding: 6,
      resize: "none",
      width: isTabletView ? "100%" : "460px",
      height: isTabletView ? "88px" : "110px",
    },
    styledInput: {
      borderRadius: "6px",
      border: "1px solid #D8D8D8",
      background: "#FFF",
      height: "48px",
      padding: 6,
      width: isTabletView ? "100%" : "460px",
    },
    mainHeading: {
      color: "#1B2231",
      textAlign: "center",
      fontFamily: "Montserrat",
      fontSize: {
        md: "2.5rem",
        lg: "2.2rem",
        sm: "1.8rem",
        xs: "1.25rem",
      },
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "131.043%",
      textTransform: "capitalize",
      mt: 4,
      mb: 1,
    },
    subHeadingText: {
      color: "#545454",
      fontFamily: "Montserrat",
      fontSize: { lg: "1rem", md: "1rem", sm: "0.875rem", xs: "0.75rem" },
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "25px",
      letterSpacing: "0.2px",
      textAlign: "center",
      mb: 8,
    },
    inputBox: {
      flexDirection: "column",
      width: "100%",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        textAlign: "center",
        display: "flex",
        mb: 4,
        justifyContent: "space-between",
      },
    },
    textAreaBox: {
      flexDirection: "column",
      textAlign: "center",
      display: "flex",
      mb: 4,
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        alignItems: "start",
      },
    },
    inputLabel: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "flex-start",
      color: "#000",
      fontFamily: "Inter",
      fontSize: { lg: "1rem", md: "1rem", sm: "0.875rem", xs: "0.75rem" },
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
    },
    inputWrap: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    button: {
      marginTop: 4,
      marginBottom: 4,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    headingBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  const customeInputStyles = { width: "100%", border: "none" };

  const customPhoneStyles = {
    borderRadius: "6px",
    border: "1px solid #D8D8D8",
    background: "#FFF",
    width: isTabletView ? "100%" : "460px",
    height: "48px",
    padding: 6,
  };

  const handleSendMessage = () => {
    //  setName(firstName + " " + lastName);
    const name = firstName + " " + lastName;
    if (!name || !email || !phoneNumber) {
      console.error("Please fill in required fields");
      swal("Error", "Please fill in all required fields", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Please enter a valid email address");
      swal("Error", "Please enter a valid email address", "error");
      return;
    }

    const formData = {
      name,
      email,
      phoneNumber: phoneNumber,
      message,
    };

    console.log("Form Data:", formData);

    axios
      .post("https://octathorn.com/api/submit", formData)
      .then((response) => {
        console.log(response.data);
        swal(
          "Success",
          "Thank you for contacting us! We will get back to you shortly.",
          "success"
        );
        setFirstName("");
        setLastName("");
        setEmail("");
        setphoneNumber("");
        setMessage("");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.error("There was an error!", error);
        swal("Error", "Please try again later", "error");
      });
  };

  return (
    <Container>
      <Box sx={themeStyle.headingBox}>
        <Typography sx={themeStyle.mainHeading}>
          Would you like to start a project with us?
        </Typography>
        <Typography sx={themeStyle.subHeadingText}>
          At our core, we offer automated solutions that simplify your problems.
          Name your challenge, and our tech-based solutions are here for you.
        </Typography>
      </Box>

      <Box sx={themeStyle.inputBox}>
        <Box sx={themeStyle.inputWrap}>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Typography sx={themeStyle.inputLabel} htmlFor="">
              First Name
            </Typography>
            <Box sx={{ color: "red" }}>*</Box>
          </Box>

          <input
            style={themeStyle.styledInput}
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </Box>

        <Box sx={themeStyle.inputWrap}>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Typography sx={themeStyle.inputLabel} htmlFor="">
              E-mail
            </Typography>
            <Box sx={{ color: "red" }}>*</Box>
          </Box>
          <input
            type="email"
            style={themeStyle.styledInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Box>
      </Box>

      <Box sx={themeStyle.inputBox}>
        <Box sx={themeStyle.inputWrap}>
          <Box sx={{ display: "flex" }}>
            <Typography sx={themeStyle.inputLabel} htmlFor="">
              Last Name
            </Typography>
          </Box>
          <input
            type="text"
            style={themeStyle.styledInput}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </Box>

        <Box sx={themeStyle.inputWrap}>
          <Box sx={{ display: "flex" }}>
            <Typography sx={themeStyle.inputLabel} htmlFor="">
              Phone Number
            </Typography>
            <Box sx={{ color: "red" }}>*</Box>
          </Box>
          <PhoneInput
            style={customPhoneStyles}
            defaultCountry="pk"
            value={phoneNumber}
            onChange={(phone) => setphoneNumber(phone)}
            inputStyle={customeInputStyles}
            required
          />
        </Box>
      </Box>

      <Box sx={themeStyle.textAreaBox}>
        <Box sx={themeStyle.inputWrap}>
          <Box sx={{ display: "flex" }}>
            <Typography sx={themeStyle.inputLabel} htmlFor="">
              Message
            </Typography>
          </Box>
          <input
            type="text"
            style={themeStyle.styledTextArea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Box>
      </Box>

      <Box sx={themeStyle.button}>
        <Button
          variant="contained"
          sx={{
            padding: "15px 32px",
            backgroundColor: "#0E4366",
            color: "#FFF",
            fontFamily: "Inter",
            fontSize: {
              lg: "1rem",
              md: "0.9rem",
              sm: "0.8rem",
              xs: "0.75rem",
            },
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
          onClick={handleSendMessage}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default ContactProject;
