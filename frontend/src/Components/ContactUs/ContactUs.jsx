
import React from "react";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import "./ContactUs.css";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Checkbox,
  TextField,
  InputLabel,
  Tabs,
  Tab,
} from "@mui/material";
import { Box } from "@mui/system";
import { ReactComponent as GGG } from "../../Assests/contactAssets/Googlec.svg";
import { ReactComponent as Goog } from "../../Assests/contactAssets/Googlesss.svg"
import { ReactComponent as Face } from "../../Assests/contactAssets/Facebooksss.svg"
import { ReactComponent as Linked } from "../../Assests/contactAssets/Linkedinsss.svg"
import Twis from "../../Assests/contactAssets/Twis";
import Facebooks from "../../Assests/contactAssets/Facebooks";
import Instas from "../../Assests/contactAssets/Instas";
import Links from "../../Assests/contactAssets/Links";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import CalendlyWidget from "../ScheduleMeeting/CalendlyWidget";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const ContactUs = () => {
  const navigate = useNavigate();
  const isMobileView = useMediaQuery("(max-width: 600px)");
  const isTabletView = useMediaQuery("(max-width: 900px)");
  const isVvSmallLaptop = useMediaQuery("(max-width: 999px)");
  const isVerySmallLaptop = useMediaQuery("(max-width: 1400px)");
  const isSmallLaptop = useMediaQuery("(max-width: 1500px)");
  const isLargeLaptop = useMediaQuery("(max-width: 1900px)");
  const widthValue = isMobileView
    ? "80%"
    : isTabletView
      ? "80%"
      : isVvSmallLaptop
        ? "60%"
        : isVerySmallLaptop
          ? "80%"
          : isSmallLaptop
            ? "80%"
            : "80%";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);
    // You can perform additional logic with the selected files if needed
    console.log('Selected Files:', files);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation checks
    if (!selectedValue) {
      // Show error message for not selecting a project type
      swal("Error", "Please select a project type.", "error");
      return;
    }

    if (selectedFiles.length === 0) {
      // Show error message for not uploading any files
      swal("Error", "Please upload at least one file.", "error");
      return;
    }



    const formData = new FormData();
    formData.append('name', name);
    formData.append('phoneNumber', phone);
    formData.append('email', email);
    formData.append('message', description);
    formData.append('projectType', selectedValue);

    // Append each selected file to formData
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }


    axios
      .post("https://octathorn.com/api/submit", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response.data);
        swal(
          "Success",
          "Thank you for contacting us! We will get back to you shortly.",
          "success"
        );
        setName("");
        setPhone("");
        setEmail("");
        setDescription("");
        setSelectedFiles([]);
        setSelectedValue("");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.error("There was an error!", error);
        swal(
          "Failed",
          "Sorry Your Failed to send! Plz Filled All Fields & Try Again",
        );
      });
  };

  // Tabs Header
  const renderTabContent = (index) => {
    switch (index) {
      case 0:
        return (
          <>
            <CalendlyWidget />
          </>
        );
      case 1:
        return (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "left",
                width: { lg: "100%", md: "100%", sm: "100%", xs: "90%" },

                maxWidth: {
                  lg: "33.0625rem",
                  md: "27rem",
                  sm: "43rem",
                  xs: "25rem",
                },
                // border: "2px solid pink",
              }}
            >
              {/* </form> */}
              <form onSubmit={handleSubmit}>
                <TextField
                  id="name"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  sx={{
                    border: "1px solid #E0E0E0",
                    borderRadius: "4px",
                  }}
                  label={
                    <span>
                      Name <span style={{ color: "red" }}>*</span>
                    </span>
                  }
                  variant="filled"
                  // value={formData.name}
                  // onChange={handleChange}
                  fullWidth
                  margin="normal"
                  height={{
                    lg: "3.125rem",
                    md: "3.125rem",
                    sm: "2.62rem",
                    xs: " 2.625rem",
                  }}
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Montserrat",
                      fontSize: {
                        lg: "0.875rem",
                        md: "0.875rem",
                        sm: "0.875rem",
                        xs: "0.75rem",
                      },
                      fontWeight: 400,
                    },
                  }}
                />
                <TextField
                  id="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  label="Email"
                  variant="filled"
                  type="email"
                  sx={{ border: "1px solid #E0E0E0", borderRadius: "4px" }}
                  // value={formData.email}
                  // onChange={handleChange}
                  fullWidth
                  margin="normal"
                  height={{
                    lg: "3.125rem",
                    md: "3.125rem",
                    sm: "2.62rem",
                    xs: " 2.625rem",
                  }}
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Montserrat",
                      fontSize: {
                        lg: "0.875rem",
                        md: "0.875rem",
                        sm: "0.875rem",
                        xs: "0.75rem",
                      },
                      fontWeight: 400,
                    },
                  }}
                />
                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  label={
                    <span>
                      Phone number <span style={{ color: "red" }}>*</span>
                    </span>
                  }
                  variant="filled"
                  type="tel"
                  sx={{ border: "1px solid #E0E0E0", borderRadius: "4px" }}
                  // value={formData.phoneNumber}
                  // onChange={handleChange}
                  fullWidth
                  margin="normal"
                  height={{
                    lg: "3.125rem",
                    md: "3.125rem",
                    sm: "2.62rem",
                    xs: " 2.625rem",
                  }}
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Montserrat",
                      fontSize: {
                        lg: "0.875rem",
                        md: "0.875rem",
                        sm: "0.875rem",
                        xs: "0.75rem",
                      },
                      fontWeight: 400,
                    },
                  }}
                />
                <TextField
                  id="message"
                  name="message"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  label="Type a Message here ......"
                  variant="filled"
                  multiline
                  rows={3}
                  sx={{ border: "1px solid #E0E0E0", borderRadius: "4px" }}
                  // value={formData.message}
                  // onChange={handleChange}
                  fullWidth
                  margin="normal"
                  height={{
                    lg: "6.5rem",
                    md: "6.5rem",
                    sm: "5.375rem",
                    xs: " 5.375rem",
                  }}
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Montserrat",
                      fontSize: {
                        lg: "0.875rem",
                        md: "0.875rem",
                        sm: "0.875rem",
                        xs: "0.75rem",
                      },
                      fontWeight: 400,

                      borderBottom: "none !important",
                    },
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: {
                      lg: "start",
                      md: "start",
                      sm: "start",
                      xs: "center",
                    },
                    marginLeft: "-0.7rem",
                    marginTop: "0.7rem",
                  }}
                >
                  <Checkbox
                    // checked={checked} // Use state to manage the checked state
                    // onChange={(event) => setChecked(event.target.checked)} // Update state on change
                    color="primary"
                  />
                  <Typography
                    variant="subtitle2"
                    component="p"
                    sx={{
                      color: "#4c5a67",
                      fontFamily: "Inter",
                      fontSize: "0.75rem",
                      fontStyle: "normal",
                      fontWeight: 400,
                    }}
                  >
                    I would like to receive the newsletter.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: {
                      lg: "start",
                      md: "start",
                      sm: "center",
                      xs: "center",
                    },
                  }}
                >
                  <Button
                    variant="outlined"
                    text={"Submit"}
                    type="submit"
                    sx={{
                      // width: "auto",
                      // height: "auto",
                      marginTop: "1.5rem",
                      width: {
                        lg: "170px",
                        md: "170px",
                        sm: "130px",
                        xs: "130px",
                      },
                      height: {
                        lg: "49px",
                        md: "49px",
                        sm: "38px",
                        xs: "38px",
                      },
                      fontSize: {
                        lg: "15px",
                        md: "15px",
                        sm: "12px",
                        xs: "12px",
                      },
                      fontWeight: 500,
                      fontFamily: "Montserrat",
                      backgroundColor: "#0E4366",
                      "&:hover": {
                        backgroundColor: "#0E4366",
                      },
                      borderColor: "#F6F6F6",
                      border: "1px",
                      borderRadius: "4px",
                      color: "#ffffff",
                      textTransform: "none",
                      display: "flex",
                      justifyContent: {
                        lg: "center",
                        md: "center",
                        sm: "center", // Center the button on small screens
                        xs: "center", // Center the button on extra-small screens
                      },
                      alignItems: "center",
                      boxShadow: "#00000026",
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </form>
            </Box>
          </>
        );
      default:
        return null;
    }
  };
  const tabData = ["Schedule a Meeting", "Write to Us"];
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Tabs Header

  const handleChange2 = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Grid
      container
      sx={{
        padding: {
          lg: "3.94rem 2rem 10.12rem 2rem",
          md: "7rem 1.5rem 10rem 1.5rem",
          sm: "7rem 1rem 5rem 1rem",
          xs: "7rem 1rem 4rem 1rem",
        },
        backgroundColor: "#F6F6F6",
      }}
    >
      {/* First Section */}
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { lg: "3rem", md: "3rem", sm: "2.5rem", xs: "1rem" },
          // border: "1px solid red",
          padding: {
            lg: "0rem 0rem",
            md: "0 7.5rem",
            sm: "0 4.5rem",
            xs: "1.19",
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#1B2231",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            fontWeight: { lg: "700", md: "700", sm: "600", xs: "600" },
            fontFamily: "Montserrat",
            Width: "100%",
            maxWidth: "81rem",
            fontSize: {
              md: "2.5rem",
              lg: "2.2rem",
              sm: "1.8rem",
              xs: "1.25rem",
            },
            fontStyle: "normal",
            textTransform: "capitalize",
          }}
        >
          Would you like to start a project with us?
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{
            color: "#4c5a67",
            textAlign: "center",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: { lg: "1rem", md: "1rem", sm: "0.875rem", xs: "0.75rem" },
            Width: "100%",
            maxWidth: "65rem",
            paddingTop: "1.17rem",
          }}
        >
          At our core, we offer automated solutions that simplify your problems.
          Name your challenge, and our tech-based solutions are here for you.
        </Typography>
      </Grid>
      {/* Second Section */}
      <Grid
        container
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        sx={{
          backgroundColor: "#fff",
          borderRadius: {
            lg: "3.125rem 0 0 3.125rem",
            md: "3.125rem 0 0 3.125rem",
            sm: "3.125rem 3.125rem 0 0",
            xs: "3.125rem 3.125rem 0 0",
          },
        }}
      >
        <Grid
          container
          item
          lg={6}
          md={6}
          sm={6}
          xs={12}
          sx={{
            gap: { lg: "1.1rem", sm: "1rem", xs: "1rem" },
            alignItems: { lg: "start", md: "start", sm: "start", xs: "center" },
            justifyContent: {
              lg: "start",
              md: "start",
              sm: "start",
              xs: "center",
            },
            padding: {
              lg: "2rem 2rem 2rem 2rem",
              md: "2rem 2rem 2rem 2rem",
              sm: "2rem 2rem 2rem 2rem",
              xs: "2rem 2rem 2rem 2rem",
            },
            display: "flex",
            flexDirection: "column",

            // border: "2px solid black",
          }}
        >
          <Typography
            variant="h2"
            sx={[
              {
                color: "#1B2231",
                fontStyle: "normal",
                fontSize: {
                  lg: "3.375rem",
                  md: "3rem",
                  sm: "2.5rem",
                  xs: "2rem",
                },
                fontWeight: "600",
                fontFamily: "Montserrat",
                textAlign: { lg: "left", md: "left", sm: "left", xs: "center" },
              },
            ]}
          >
            Get in <span style={{ color: "#319AC7" }}>Touch</span>
          </Typography>
          <Box
            sx={{
              width: "4.1875rem",
              marginTop: {
                lg: "-1.5rem",
                md: "-1.4rem",
                sm: "-1.3rem",
                xs: "-0.9rem",
              },
              height: {
                lg: "0.375rem",
                md: "0.375rem",
                sm: "0.375rem",
                xs: "0.25rem",
              },
              bgcolor: "#10538B",
            }}
          />

          {/* Button */}

          <Typography
            variant="subtitle2"
            component="p"
            color="#4c5a67"
            sx={{
              fontStyle: "normal",
              width: "100%",
              maxWidth: {
                lg: "33.0625rem",
                md: "27rem",
                sm: "43rem",
              },
              fontSize: {
                lg: "1rem",
                md: "1rem",
                sm: "0.875rem",
                xs: "0.75rem",
              },
              fontWeight: 400,
              fontFamily: "Inter",
              textAlign: { lg: "justify", sm: "left", xs: "center" },
              //   display: { xs: "none", sm: "block" },
              paddingBottom: { lg: "3rem", md: "3rem", sm: "2rem", xs: "1rem" },
              lineHeight: "1.25"
            }}
          >
            Feel free to get in touch with us, for any sort of queries regarding our service. We are 24/7 available to provide you with best in what you ask for.
          </Typography>
          {/* Extra Header */}
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                overflowX: "auto",
                display: "flex",
                justifyContent: "left",
              }}
            >
              <Tabs value={value} onChange={handleChange} centered>
                {tabData.map((tab, index) => (
                  <Tab
                    label={
                      <Typography
                        variant="h3"
                        sx={{
                          ...themeStyle.tabStyle,
                          color: value === index ? "#1B2231" : "#696F7C",
                          fontSize:
                            value === index
                              ? { lg: "1.4375rem", sm: "0.9rem", xs: "0.9rem" }
                              : { lg: "1rem", sm: "0.5rem", xs: "0.5rem" },
                        }}
                      >
                        {tab}
                      </Typography>
                    }
                    key={index}
                  />
                ))}
              </Tabs>
            </Box>
            <Box>{renderTabContent(value)}</Box>
          </Box>
          {/* Extra Header */}
        </Grid>

        <Grid
          container
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          sx={{
            display: {
              lg: "flex",
              md: "flex",
              sm: "flex",
              xs: "flex",
            },
            paddingLeft: {
              lg: "2rem",
              md: "1rem",
              sm: "0.5rem",
              xs: "1rem",
            },
            flexDirection: "column",
            textAlign: {
              lg: "left",
              md: "left",
              sm: "left",
              xs: "center",
            },
            alignItems: {
              lg: "left",
              md: "left",
              sm: "left",
              xs: "left",
            },
            justifyContent: {
              lg: "start",
              md: "start",
              sm: "start",
              xs: "center",
            },
            background: "#0E4366",
            borderRadius: {
              lg: "0 3.125rem 3.125rem 0",
              md: "0 3.125rem 3.125rem 0",
              sm: "0 0 3.125rem 3.125rem",
              xs: "0 0 3.125rem 3.125rem",
            },
          }}
        >
          <Box
            ml={0}
            // width={widthValue}
            sx={{
              alignItems: { lg: "left", md: "left", sm: "left", xs: "center" },
              textAlign: { lg: "left", md: "left", sm: "left", xs: "center" },
              justifyContent: { lg: "left", md: "left", sm: "left", xs: "center" },
              marginTop: "2rem",
              marginLeft: "1rem",
              marginRight: "2rem",
              marginBottom: "2rem",

              // height: {
              //   lg: "40%",
              //   md: "25rem",
              //   sm: "20rem",
              //   xs: "15rem",
              // },
              overflow: "hidden",
            }}
          >
            <Typography
              variant="h2"
              sx={[
                {
                  marginTop: { lg: "0rem", md: "0rem", sm: "0.5rem", xs: "0rem" },
                  color: "#FFF",
                  fontStyle: "normal",
                  // paddingLeft:"2rem",
                  fontSize: {
                    lg: "3.375rem",
                    md: "2.7rem",
                    sm: "2rem",
                    xs: "1.5rem",
                  },
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                  display: "flex",
                  textAlign: { lg: "left", md: "left", sm: "left", xs: "center" },
                },
              ]}
            >
              {/* Find Us &<span style={{ color: "#5DB9E0" }}>Connect</span> */}
              Find Us &amp;&nbsp;
              <span style={{ color: "#5DB9E0" }}>Connect</span>
            </Typography>
            {/* <Typography sx={themeStyle.gridHeading}>
              Find Us{" "}
              <Box sx={themeStyle.gridHeading2} component="span">
                & Connect
              </Box>{" "}
            </Typography> */}
            {/* <Box
              sx={{
                width: "4.1875rem",
                marginTop: {
                  lg: "-1.5rem",
                  md: "-1.4rem",
                  sm: "-1.3rem",
                  xs: "-0.9rem",
                },
                height: {
                  lg: "0.375rem",
                  md: "0.375rem",
                  sm: "0.375rem",
                  xs: "0.25rem",
                },
                bgcolor: "#5DB9E0",
                marginTop: '0.1rem',

              }}
            /> */}
            <Box
              sx={{
                width: "4.1875rem",
                marginTop: {
                  lg: "-0.2rem",
                  md: "-0.1rem",
                  sm: "0rem",
                  xs: "0.1rem",
                },
                height: {
                  lg: "0.375rem",
                  md: "0.375rem",
                  sm: "0.375rem",
                  xs: "0.25rem",
                },
                bgcolor: "#5DB9E0",
              }}
            />
            {value === 1 && (
              <iframe
                width={widthValue}
                height="270rem"
                borderRadius="13px"
                frameBorder="0"
                style={{ border: 0, borderRadius: "10px", marginTop: "1rem" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33.6074086!2d73.100091!3dYOUR_ZOOM_LEVEL!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb96a77dbcff%3A0x936bce527a1d6838!2sOctathorn+Technologies!5e0!3m2!1sen!2sus!4vYOUR_EMBED_API_KEY"
                allowFullScreen
                title="Google Map"
              ></iframe>
            )}
            {value === 0 && (
              <iframe
                width={widthValue}
                height="470rem"
                borderRadius="13px"
                frameBorder="0"
                style={{ border: 0, borderRadius: "10px", marginTop: "1rem" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33.6074086!2d73.100091!3dYOUR_ZOOM_LEVEL!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb96a77dbcff%3A0x936bce527a1d6838!2sOctathorn+Technologies!5e0!3m2!1sen!2sus!4vYOUR_EMBED_API_KEY"
                allowFullScreen
                title="Google Map"
              ></iframe>
            )}
          </Box>
          {value === 1 && (
            <>
              <Box sx={{ textAlign: "left", marginLeft: 2 }}>
                <Typography variant="body2" component="h3" sx={themeStyle.gridSubheading}>
                  Project Type?{" "}
                  <Box sx={themeStyle.gridSubheading2} component="span">
                    (Select Atleast one)
                  </Box>
                </Typography>

                <FormControl sx={themeStyle.formControlStyle}>
                  <label>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={selectedValue}
                      onChange={handleChange2}
                    >
                      <FormControlLabel
                        value="Development"
                        control={<Radio sx={{ color: "white" }} />}
                        label={
                          <Typography variant="body2" sx={{ ...themeStyle.lableStyle, fontWeight: selectedValue === 'Development' ? 'bold' : 400 }} variant="body2">
                            Product Development
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        value="System"
                        control={<Radio sx={{ color: "white" }} />}
                        label={
                          <Typography variant="body2" sx={{ ...themeStyle.lableStyle, fontWeight: selectedValue === 'System' ? 'bold' : 400 }} variant="body2">
                            Embedded System
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        value="IoT"
                        control={<Radio sx={{ color: "white" }} />}
                        label={
                          <Typography variant="body2" sx={{ ...themeStyle.lableStyle, fontWeight: selectedValue === 'IoT' ? 'bold' : 400 }} variant="body2">
                            IoT Development
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        value="Research"
                        control={<Radio sx={{ color: "white" }} />}
                        label={
                          <Typography variant="body2" sx={{ ...themeStyle.lableStyle, fontWeight: selectedValue === 'Research' ? 'bold' : 400 }} variant="body2">
                            Research & Development
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        value="Embedded"
                        control={<Radio sx={{ color: "white" }} />}
                        label={
                          <Typography variant="body2" sx={{ ...themeStyle.lableStyle, fontWeight: selectedValue === 'Embedded' ? 'bold' : 400 }} variant="body2">
                            Embedded System
                          </Typography>
                        }
                      />
                    </RadioGroup>
                  </label>

                  <label>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={selectedValue}
                      onChange={handleChange2}
                    >
                      <FormControlLabel
                        value="Redesigning"
                        control={<Radio sx={{ color: "white" }} />}
                        label={
                          <Typography variant="body2" sx={{ ...themeStyle.lableStyle, fontWeight: selectedValue === 'Redesigning' ? 'bold' : 400 }} variant="body2">
                            Redesigning My Website
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        value="Technical"
                        control={<Radio sx={{ color: "white" }} />}
                        label={
                          <Typography variant="body2" sx={{ ...themeStyle.lableStyle, fontWeight: selectedValue === 'Technical' ? 'bold' : 400 }} variant="body2">
                            Technical Consultation
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        value="Web"
                        control={<Radio sx={{ color: "white" }} />}
                        label={
                          <Typography variant="body2" sx={{ ...themeStyle.lableStyle, fontWeight: selectedValue === 'Web' ? 'bold' : 400 }} variant="body2">
                            Web Development
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        value="MobileApp"
                        control={<Radio sx={{ color: "white" }} />}
                        label={
                          <Typography variant="body2" sx={{ ...themeStyle.lableStyle, fontWeight: selectedValue === 'MobileApp' ? 'bold' : 400 }} variant="body2">
                            Mobile App Development
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        value="ERP"
                        control={<Radio sx={{ color: "white" }} />}
                        label={
                          <Typography variant="body2" sx={{ ...themeStyle.lableStyle, fontWeight: selectedValue === 'ERP' ? 'bold' : 400 }} variant="body2">
                            ERP Development
                          </Typography>
                        }
                      />
                    </RadioGroup>
                  </label>
                </FormControl>
              </Box>
              {/* Button */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginLeft: 2,
                  marginTop: 4,
                }}
              >
                <label htmlFor="file-upload">
                  <input
                    style={{ display: "none" }}
                    id="file-upload"
                    type="file"
                    onChange={handleFileChange}
                    required
                    multiple
                  />
                  <Button
                    component="span"
                    sx={{ border: "1px solid white", width: "fit-content" }}
                    variant="outlined"
                    startIcon={<DriveFolderUploadIcon sx={{ color: "white" }} />}
                  >
                    <span sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="body2" sx={themeStyle.uploadHeading}>
                        Upload A File
                      </Typography>
                      <Typography variant="body2" sx={themeStyle.uploadHeading2}>
                        (10 MB Max) PDF, Docx, JPG, GIF, PNG
                      </Typography>
                    </span>
                  </Button>
                </label>
              </Box>
            </>
          )}

          {/* Button */}

          {/* Footer */}
          <Box sx={themeStyle.footerStyle}>
            {/* FooterSecion1 */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  color: "#0E4366",
                  width: "100%",
                  justifyContent: {
                    lg: "flex-start",
                    md: "flex-start",
                    sm: "left",
                    xs: "left",
                  },
                  alignItems: {
                    lg: "flex-start",
                    md: "flex-start",
                    sm: "left",
                    xs: "left",
                  },
                  textAlign: {
                    lg: "flex-start",
                    md: "flex-start",
                    sm: "left",
                    xs: "left",
                  },
                  marginTop: "1rem",
                  // marginLeft: "-1rem",
                }}
              >
                <Link
                  style={{ cursor: "pointer" }}
                  to="https://www.linkedin.com/company/octathorn/"
                >
                  <Linked />
                </Link>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => window.open("mailto:admin@octathorn.com")}
                >
                  <Goog />
                </a>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/octathorntechnologies?mibextid=JRoKGi"
                    )
                  }
                >
                  <Face />
                </div>
              </Box>
            </Box>
            {/* FooterSecion2 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: { xs: "1rem" },
                width: "100%",
                justifyContent: {
                  lg: "flex-start",
                  md: "flex-start",
                  sm: "left",
                  xs: "left",
                },
                alignItems: {
                  lg: "flex-start",
                  md: "flex-start",
                  sm: "left",
                  xs: "left",
                },
                textAlign: {
                  lg: "flex-start",
                  md: "flex-start",
                  sm: "left",
                  xs: "left",
                },
              }}
            >
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#F2F8FA",
                    fontFamily: "Montserrat",
                    fontSize: "1.375rem",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "normal",
                  }}
                >
                  Get in touch
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  FlexDirection: "row",
                  width: "100%",
                  textAlign: "start",
                  marginTop: { lg: "1rem", md: "1rem", sm: "1rem", xs: "1rem" },
                  justifyContent: { sm: "center", md: "center", lg: "start" },
                }}
              >
                <svg
                  width="22"
                  height="17"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 2.2C22 0.99 21.01 0 19.8 0H2.2C0.99 0 0 0.99 0 2.2V15.4C0 16.61 0.99 17.6 2.2 17.6H19.8C21.01 17.6 22 16.61 22 15.4V2.2ZM19.8 2.2L11 7.7L2.2 2.2H19.8ZM19.8 15.4H2.2V4.4L11 9.9L19.8 4.4V15.4Z"
                    fill="white"
                  />
                </svg>

                <Typography
                  variant="subtitle2"
                  component="p"
                  sx={{
                    width: "80%",
                    color: "#F2F8FA",
                    paddingLeft: "1.5rem",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    fontFamily: "Inter",
                  }}
                >
                  admin@octathorn.com
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: { sm: "center", md: "center", lg: "start" },
                  width: "100%",
                  textAlign: "start",
                  marginTop: "1rem",
                  marginBottom: {
                    lg: "2rem",
                    md: "2rem",
                    sm: "4rem",
                    xs: "2rem",
                  },
                }}
              >
                <svg
                  width="22"
                  height="17"
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 12C10.6875 12 11.2762 11.7648 11.7663 11.2944C12.2563 10.824 12.5008 10.2592 12.5 9.6C12.5 8.94 12.255 8.3748 11.765 7.9044C11.275 7.434 10.6867 7.1992 10 7.2C9.3125 7.2 8.72375 7.4352 8.23375 7.9056C7.74375 8.376 7.49917 8.9408 7.5 9.6C7.5 10.26 7.745 10.8252 8.235 11.2956C8.725 11.766 9.31333 12.0008 10 12ZM10 24C6.64583 21.26 4.14083 18.7152 2.485 16.3656C0.829167 14.016 0.000833333 11.8408 0 9.84C0 6.84 1.00542 4.45 3.01625 2.67C5.02708 0.89 7.355 0 10 0C12.6458 0 14.9742 0.89 16.985 2.67C18.9958 4.45 20.0008 6.84 20 9.84C20 11.84 19.1717 14.0152 17.515 16.3656C15.8583 18.716 13.3533 21.2608 10 24Z"
                    fill="white"
                  />
                </svg>

                <Typography
                  variant="subtitle2"
                  component="p"
                  sx={{
                    width: "80%",
                    color: "#F2F8FA",
                    paddingLeft: "1.5rem",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    fontFamily: "Inter",
                  }}
                >
                  office 608, Alpha techno square NASTP, old airport rd.
                  building chaklala cantt. RWP, punjab pakistan
                </Typography>
              </Box>
            </Box>
            {/* FooterSecion2 */}
          </Box>
          {/* Footer */}
        </Grid>
      </Grid>
    </Grid>
  );
};




const themeStyle = {
  footerStyle: {
    display: "flex",
    flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
    gap: { sm: "1rem", md: "1rem", lg: "7rem" },

    marginTop: { lg: "3rem", md: "1rem", sm: "1rem" },
  },
  formControlStyle: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
    gap: { lg: "5rem", md: "0rem", sm: "0rem", xs: "0rem" }
  },
  tabs: {
    display: "flex",
  },
  gridHeading: {
    color: "#FFF",
    fontFamily: "Montserrat",
    fontSize: {
      lg: "3.375rem",
      md: "2.5rem",
      sm: "2rem",
      xs: "1.5rem",
    },
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  gridHeading2: {
    color: "#5DB9E0",
    fontFamily: "Montserrat",
    fontSize: {
      lg: "3.375rem",
      md: "2.5rem",
      sm: "2rem",
      xs: "1.5rem",
    },
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  gridSubheading: {
    color: "#F6F6F6",
    fontFamily: "Poppins",
    fontSize: { lg: "1.4375rem", sm: "1rem", xs: "1rem" },
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "1.25rem",
  },
  gridSubheading2: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: { lg: "1rem", sm: "0.8rem", xs: "0.8rem" },
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.25rem",
  },
  lableStyle: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: { lg: "1.125rem", sm: "1rem", xs: "0.8rem" },
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.25rem",
    textTransform: "none"
  },
  tabStyle: {
    color: "#1B2231",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "1.4375rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    textTransform: "uppercase",
  },
  uploadHeading: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "1.0625rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
  uploadHeading2: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "0.5625rem",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal",
  },
};
export default ContactUs;
