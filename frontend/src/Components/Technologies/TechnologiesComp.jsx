import React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Checkbox,
  TextField,
  InputLabel,
  Container,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Box, height, padding, typography } from "@mui/system";
// import { getTechnologyState, TechlistItems } from "../Header/Nav";
import {
  DatabaseTech,
  FrontEndTech,
  BackEndTech,
  MobTech,
  EmbeddedTech,
  PcbTech,
  IotTech,
} from "../../Components/Technologies/TechnologyData";

import ResbarryPi from "../../Assests/Technologies/Embd1.png";
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

















const TechnologiesComp = (state) => {






  const navigate = useNavigate();
  const location = useLocation();
  // const { techState, techuseState } = location?.state || {};
  //const { techuseState } = state?.state;
  //const { techState, techuseState } = state?.state || window.history.state || {};
  const { techuseState } = state?.state;
  const [selectedItem, setSelectedItem] = useState(techuseState);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setSelectedItem(techuseState);
  }, [techuseState]);

  // console.log(state.state.techState[2].TechList[0]);
  // const techDetails = state.state.techState[2].TechDetails[selectedItem];
  // console.log("techDetails:", techDetails);
  // console.log(selectedItem);

  const items = state?.state?.techState?.[2]?.TechList;

  const Styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: { lg: "8.13rem", md: "2rem", sm: "0rem", xs: "0rem" },
      flexWrap: { sm: "nowrap", xs: "wrap", md: "nowrap", lg: "nowrap" },
      // justifyContent: 'space-between',

      marginBottom: "5%",
    },
    listItem: {
      textTransform: "uppercase",
      fontFamily: "Montserrat",
      fontWeight: 600,
      justifyContent: "center",
      fontSize: { md: "1rem", lg: "1rem", xs: "0.7rem", sm: "0.7rem" },
      //paddingRight: 5,
      whiteSpace: "nowrap",
      width: { sm: "30%", xs: "48%" },
      justifyContent: "center",
    },
    listItemText: {
      display: "flex",
      justifyContent: "center",
      // fontWeight: 600,
      //  fontSize: { md: '1rem', lg: '1rem', xs: '0.7rem', sm: '0.7rem' },
    },
  };
  const handleItemClick = (item) => {
    if (selectedItem === item) {
      // If the clicked item is already selected, do nothing
      return;
    }
    setSelectedItem(item);
    setShowContent(false);
  };

  useEffect(() => {
    if (!showContent) {
      // If content is hidden, set a timeout to simulate the delay and trigger the animation
      const timeoutId = setTimeout(() => {
        setShowContent(true);
      }, 300);

      // Clear the timeout when the component unmounts or when a new item is selected
      return () => clearTimeout(timeoutId);
    }
  }, [selectedItem, showContent]);
  const isLG = useMediaQuery("(min-width: 1280px)");
  const isMD = useMediaQuery("(min-width: 900px) and (max-width: 1400px)");
  const isSM = useMediaQuery("(min-width: 600px) and (max-width: 900px)");
  const isXS = useMediaQuery("(max-width: 599px)");
  const paddingLeftValue = isXS
    ? "0rem"
    : isSM
      ? "1rem"
      : isMD
        ? "1rem"
        : "8rem";
  const heightValue = isSM ? "80%" : isXS ? "80%" : "90%";
  const title = `${state.state.techState?.[0]?.TechHeading[0]}`.toLowerCase();
  const titleWords = title.split(' ');
  const capitalizedWords = titleWords.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const capitalizedTitle = capitalizedWords.join(' ');
  const headingWithoutSpaces = capitalizedTitle.replace(
    /\s/g,
    ""
  ).toLowerCase();

  return (
    <Grid
      container
      sx={{
        marginTop: "-5rem",
        padding: {
          lg: "0rem 0rem 3rem 0rem",
          md: "7rem 0.5rem 10rem 0.5rem",
          sm: "7rem 1rem 5rem 1rem",
          xs: "7rem 1rem 4rem 1rem",
        },
        backgroundColor: "#F6F6F6",
        display: "flex",
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
          marginTop: { lg: "5rem", md: "3rem", sm: "2.5rem", xs: "1rem" },
          //   border: "1px solid red",
          padding: {
            lg: "0rem 0rem",
            md: "0 7.5rem",
            sm: "0 4.5rem",
            xs: "1.19",
          },
        }}
      >
        <Helmet>
          <title>{`Octathorn- ${capitalizedTitle}`}</title>
          <link rel="canonical" href={`https://octathorn.com/technologies/${headingWithoutSpaces}`} />
          <meta name="description" content={`${state.state.techState?.[0]?.TechHeading[0]} ${state.state.techState?.[1]?.TechDescription[0]} `} />
          <meta name="keywords"
            content="Unlock the future trusted next-generation hardware software solutions quality focus customer-centric insights-driven 20+ happy clients hardware embedded systems software scalability product development IoT platform development research and development PCB design technical consultation web applications mobile applications ERP development industry expertise transformative growth innovative vision tailored solutions user-centric approach efficient integration domain expertise cost-effective solutions diverse service offerings embedded systems IoT software development real-time AI computer vision UI/UX product development technology and platform stack Raspberry Pi LoRa ESP32 FPGA Arduino Azure IoT Hub AWS IoT Agile Methodology adaptability technological excellence client-centric approach continuous support and updates high client retention efficient integration transparent communication" />
        </Helmet>
        <Typography
          variant="h2"
          component="h1"
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
          {state.state.techState?.[0]?.TechHeading[0]}
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
            fontSize: {
              lg: "1rem",
              md: "1rem",
              sm: "0.875rem",
              xs: "0.75rem",
            },
            Width: "100%",
            maxWidth: { lg: "80%", md: "95%", sm: "95%", xs: "95%" },
            paddingTop: "1.17rem",
          }}
        >
          {state.state.techState?.[1]?.TechDescription[0]}
        </Typography>
        <Box marginTop={"2rem"} component="div" sx={Styles.container}>
          {items?.map((item, index) => (
            <ListItem
              button
              key={index}
              selected={selectedItem === item}
              onClick={() => {
                handleItemClick(item);
              }}
              sx={{
                ...Styles.listItem,
                position: "relative",
                // borderBottom:
                //   selectedItem === item ? " 4px solid #1B2231" : "none",
                color: selectedItem === item ? "#1B2231" : "#696F7C",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: "10%",
                  width: "80%",
                  borderBottom:
                    selectedItem === item ? "4px solid #1B2231" : "none",
                },
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <ListItemText
                  primary={item}
                  sx={{
                    ...Styles.listItemText,
                    justifyContent: "center",

                    "& .MuiTypography-body1": {
                      fontSize: {
                        xs: "0.8rem",
                        sm: "0.8rem",
                        md: "1rem",
                        lg: "1rem",
                      },
                      fontFamily: "Poppins",
                      fontWeight: selectedItem === item ? "bold" : "none",
                    },
                  }}
                />
                {/* {selectedItem === item && (<LineHorizental />)} */}
              </div>
            </ListItem>
          ))}
        </Box>
      </Grid>

      <Grid
        item
        container
        lg={6}
        md={6}
        sm={12}
        xs={12}
        paddingLeft={paddingLeftValue}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { lg: "1.1rem", sm: "1rem", xs: "1rem" },
          alignItems: {
            lg: "start",
            md: "start",
            sm: "center",
            xs: "center",
          },
          marginTop: "1rem",
          justifyContent: {
            lg: "start",
            md: "start",
            sm: "center",
            xs: "center",
          },
          //   border: "2px solid black",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
            justifyContent: {
              lg: "flex-start",
              md: "flex-start",
              sm: "flex-start",
              xs: "center",
            },
            alignItems: {
              lg: "start",
              md: "start",
              sm: "start",
              xs: "center",
            },
            textAlign: {
              lg: "start",
              md: "start",
              sm: "start",
              xs: "center",
            },
            width: "100%",
            marginTop: "0.5rem",
            // border: "2px solid purple",
          }}
        >
          <Box
            sx={{
              marginTop: { lg: "0rem", sm: "0rem", md: "0rem", xs: "1rem" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                marginTop: {
                  lg: "-0.2rem",
                  md: "-0.2rem",
                  sm: "-0.2rem",
                  xs: "-0.1rem",
                },
                // width: "80%",
                color: "#1B2231",
                paddingLeft: {
                  lg: "5rem",
                  md: "5rem",
                  sm: "5rem",
                  xs: "0.5rem",
                },
                fontSize: {
                  lg: "1.5rem",
                  md: "1rem",
                  sm: "1rem",
                  xs: "0.9rem",
                },
                fontWeight: "600",
                fontFamily: "Montserrat",
                textTransform: "uppercase",
              }}
            >
              Overview
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{
                color: "#4c5a67",
                fontFamily: "Inter",
                fontSize: {
                  lg: "1rem",
                  md: "0.9rem",
                  sm: "0.8rem",
                  xs: "0.75rem",
                },
                fontStyle: "normal",
                fontWeight: "400",
                paddingLeft: {
                  lg: "5rem",
                  md: "5rem",
                  sm: "5rem",
                  xs: "0.5rem",
                },
                marginTop: "0.7rem",
              }}
            >
              {state.state.techState?.[2]?.TechDetails[selectedItem]?.TechOverview}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
            justifyContent: {
              lg: "flex-start",
              md: "flex-start",
              sm: "flex-start",
              xs: "center",
            },
            alignItems: {
              lg: "start",
              md: "start",
              sm: "start",
              xs: "center",
            },
            textAlign: {
              lg: "start",
              md: "start",
              sm: "start",
              xs: "center",
            },

            width: "100%",
            marginTop: "0.5rem",
            // border: "2px solid purple",
          }}
        >
          <Box
            sx={{
              marginTop: { lg: "0rem", sm: "0rem", md: "0rem", xs: "1rem" },
            }}
          >
            <Typography
              component="h2"
              sx={{
                marginTop: {
                  lg: "-0.2rem",
                  md: "-0.2rem",
                  sm: "-0.2rem",
                  xs: "-0.1rem",
                },

                color: "#1B2231",
                paddingLeft: {
                  lg: "5rem",
                  md: "5rem",
                  sm: "5rem",
                  xs: "0.5rem",
                },
                fontSize: {
                  lg: "1.5rem",
                  md: "1rem",
                  sm: "1rem",
                  xs: "0.9rem",
                },
                fontWeight: "600",
                fontFamily: "Montserrat",
                textTransform: "uppercase",
              }}
            >
              Key Features:
            </Typography>
            <Typography

              sx={{
                color: "#4c5a67",
                fontFamily: "Inter",
                fontSize: {
                  lg: "1rem",
                  md: "0.9rem",
                  sm: "0.8rem",
                  xs: "0.75rem",
                },
                fontStyle: "normal",
                fontWeight: "400",
                paddingLeft: {
                  lg: "6rem",
                  md: "6rem",
                  sm: "6rem",
                  xs: "0.5rem",
                },
                marginTop: "0.7rem",
              }}
            >
              {state.state.techState?.[2]?.TechDetails[
                selectedItem
              ]?.TechKeyFeatures.map((application, index) => {
                const [state, content] = application.split(":");
                return (
                  <li key={index}>
                    <strong style={{ color: "#3E3E3E" }}>{state}:</strong>{" "}
                    {content}
                  </li>
                );

                // return <li key={index}>{application}</li>;
              })}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
            justifyContent: {
              lg: "flex-start",
              md: "flex-start",
              sm: "flex-start",
              xs: "center",
            },
            alignItems: {
              lg: "start",
              md: "start",
              sm: "start",
              xs: "center",
            },
            textAlign: {
              lg: "start",
              md: "start",
              sm: "start",
              xs: "center",
            },

            width: "100%",
            marginTop: "0.5rem",
            // border: "2px solid purple",
          }}
        >
          <Box
            sx={{
              marginTop: { lg: "0rem", sm: "0rem", md: "0rem", xs: "1rem" },
            }}
          >
            <Typography
              component="h2"
              sx={{
                marginTop: {
                  lg: "-0.2rem",
                  md: "-0.2rem",
                  sm: "-0.2rem",
                  xs: "-0.1rem",
                },

                color: "#1B2231",

                paddingLeft: {
                  lg: "5rem",
                  md: "5rem",
                  sm: "5rem",
                  xs: "0.5rem",
                },
                fontSize: {
                  lg: "1.5rem",
                  md: "1rem",
                  sm: "1rem",
                  xs: "0.9rem",
                },
                fontWeight: "600",
                fontFamily: "Montserrat",
                textTransform: "uppercase",
              }}
            >
              Applications:
            </Typography>
            <Typography
              sx={{
                color: "#4c5a67",
                fontFamily: "Inter",
                fontSize: {
                  lg: "1rem",
                  md: "0.9rem",
                  sm: "0.8rem",
                  xs: "0.75rem",
                },
                fontStyle: "normal",
                fontWeight: "400",

                paddingLeft: {
                  lg: "6rem",
                  md: "6rem",
                  sm: "6rem",
                  xs: "0.5rem",
                },
                marginTop: "0.7rem",
              }}
            >
              {/* {state.state.techState[4].ServicePointDescription[2]} */}

              {state.state.techState?.[2]?.TechDetails[
                selectedItem
              ]?.TechApplications.map((application, index) => {
                const [state, content] = application.split(":");
                return (
                  <li key={index}>
                    <strong style={{ color: "#3E3E3E" }}>{state}:</strong>{" "}
                    {content}
                  </li>
                );

                // return <li key={index}>{application}</li>;
              })}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
            justifyContent: {
              lg: "flex-start",
              md: "flex-start",
              sm: "flex-start",
              xs: "center",
            },
            alignItems: {
              lg: "start",
              md: "start",
              sm: "start",
              xs: "center",
            },
            textAlign: {
              lg: "start",
              md: "start",
              sm: "start",
              xs: "center",
            },
            width: "100%",
            marginTop: "0.5rem",
            // border: "2px solid purple",
          }}
        >
          <Box
            sx={{
              marginTop: { lg: "0rem", sm: "0rem", md: "0rem", xs: "1rem" },
            }}
          >
            <Typography
              component="h2"
              sx={{
                marginTop: {
                  lg: "-0.2rem",
                  md: "-0.2rem",
                  sm: "-0.2rem",
                  xs: "-0.1rem",
                },

                color: "#1B2231",
                paddingLeft: {
                  lg: "5rem",
                  md: "5rem",
                  sm: "5rem",
                  xs: "0.5rem",
                },
                fontSize: {
                  lg: "1.5rem",
                  md: "1rem",
                  sm: "1rem",
                  xs: "0.9rem",
                },
                fontWeight: "600",
                fontFamily: "Montserrat",
                textTransform: "uppercase",
              }}
            >
              Impact:
            </Typography>
            <Typography
              sx={{
                color: "#4c5a67",
                fontFamily: "Inter",
                fontSize: {
                  lg: "1rem",
                  md: "0.9rem",
                  sm: "0.8rem",
                  xs: "0.75rem",
                },
                fontStyle: "normal",
                fontWeight: "400",
                paddingLeft: {
                  lg: "5rem",
                  md: "5rem",
                  sm: "5rem",
                  xs: "0.5rem",
                },
                marginTop: "0.7rem",
              }}
            >
              {state.state.techState?.[2]?.TechDetails[selectedItem]?.TechImpact}
            </Typography>
          </Box>
        </Box>

        {/* Button */}
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        sx={{
          // gap: "15px",
          display: {
            lg: "flex",
            md: "flex",
            sm: "flex",
            xs: "flex",
          },
          flexDirection: "column",
          alignItems: {
            lg: "center",
            md: "center",
            sm: "center",
            xs: "center",
          },
          justifyContent: {
            lg: "center",
            md: "center",
            sm: "center",
            xs: "center",
          },
          marginTop: { lg: "-1rem", md: "-1rem", sm: "2rem", xs: "0rem" },
          // border: "2px solid red",
        }}
      >
        <Box
          sx={{
            paddingTop: "4rem",
            opacity: showContent ? 1 : 0,
            transform: showContent ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.9)',
            transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
            // border: "2px solid red",
          }}
        >
          {/* <ServiceWebSvg /> */}
          <img
            width={"100%"}
            height={heightValue}
            //   src={state.state.techState[5].ServiceImage}
            src={state.state.techState?.[2]?.TechDetails[selectedItem]?.TechImg}
            alt={capitalizedTitle}
          />
        </Box>
      </Grid>
    </Grid>
  );

};

export default TechnologiesComp;
