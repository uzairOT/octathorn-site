import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  ListItem,
  ListItemText,
  useMediaQuery,
  Container,
  Grid,
  Button,
} from "@mui/material";


import EmbeddedDesktop from "../../Assests/Technologies/EmdDesk.png"
import IotDesktop from "../../Assests/Technologies/iotDest.png"
import PcbDesktop from "../../Assests/Technologies/pcbDesk.png"
import FrontDesktop from "../../Assests/Technologies/frontDesk.png"
import BackDesktop from "../../Assests/Technologies/backDesk.png"
import MobDesktop from "../../Assests/Technologies/mobDesk.png"
import DbDesktop from "../../Assests/Technologies/dbDesk.png"

import { ReactComponent as EmbeddedTab } from "../../Assests/Technologies/embdTab.svg"
import { ReactComponent as iotTab } from "../../Assests/Technologies/iotTab.svg"
import { ReactComponent as PCBTab } from "../../Assests/Technologies/pcbTab.svg"
import { ReactComponent as FrontEndTab } from "../../Assests/Technologies/frontTab.svg";
import { ReactComponent as BackEndTab } from "../../Assests/Technologies/backTab.svg"
import { ReactComponent as MobileTab } from "../../Assests/Technologies/mobTab.svg"
import { ReactComponent as DatabaseTab } from "../../Assests/Technologies/dbTab.svg"

import { ReactComponent as EmbededMobile } from "..//../Assests/home/techStack/embededMobile.svg";

import { ReactComponent as IOTMobile } from "..//../Assests/home/techStack/iotMobile.svg";

import { ReactComponent as PCBMobile } from "..//../Assests/home/techStack/pcbMobile.svg";

import { ReactComponent as FrontEndMobile } from "..//../Assests/home/techStack/frontendMobile.svg";

import { ReactComponent as BackEndMobile } from "..//../Assests/home/techStack/backendMobile.svg";

import { ReactComponent as MobileMobile } from "..//../Assests/home/techStack/appMobile.svg";

import { ReactComponent as DatabaseMobile } from "..//../Assests/home/techStack/databaseMobile.svg";

const NewTechStack = () => {
  const [selectedItem, setSelectedItem] = useState("Embedded System"); // Initialize the selected item
  const [showContent, setShowContent] = useState(false);
  const items = [
    "Embedded System",
    "IOT",
    "PCB",
    "Front end",
    "Back End",
    "Mobile",
    "Database",
  ];
  const isMobileView = useMediaQuery("(max-width: 600px)");
  const isTabView = useMediaQuery("(max-width: 900px)");
  const itemToSVG = {
    "Embedded System": { desktop: EmbeddedDesktop, Tab: EmbeddedTab, mobile: EmbededMobile },
    IOT: { desktop: IotDesktop, Tab: iotTab, mobile: IOTMobile },
    PCB: { desktop: PcbDesktop, Tab: PCBTab, mobile: PCBMobile },
    "Front end": { desktop: FrontDesktop, Tab: FrontEndTab, mobile: FrontEndMobile },
    "Back End": { desktop: BackDesktop, Tab: BackEndTab, mobile: BackEndMobile },
    Mobile: { desktop: MobDesktop, Tab: MobileTab, mobile: MobileMobile },
    Database: { desktop: DbDesktop, Tab: DatabaseTab, mobile: DatabaseMobile },
  };
  const Styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      flexWrap: { sm: "nowrap", xs: "wrap", md: "nowrap", lg: "nowrap" },
      // justifyContent: 'space-between',

      marginBottom: "5%",
    },
    listItem: {
      textTransform: "uppercase",
      fontFamily: "Inter",
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
    setShowContent(false); // Hide the content for a moment
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
  //sx={{ padding: { xs: '0.9rem 1.5rem', sm: '4.125rem 1.5rem', lg: '4.125rem 4.5rem' } }}
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop="0.5rem"


    >
      <Container maxWidth="lg" sx={{}}>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2%",
            marginBottom: "2%",

          }}
        >
          <Typography
            component="h1"
            color={"#1B2231"}
            fontSize={{ lg: "2.5rem", md: "2.5rem", sm: "2rem", xs: "1.25rem" }}
            fontWeight={600}
            fontFamily={"Montserrat"}
            letterSpacing={0.2}
          >
            Our Technology & PlatForm Stack
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            mt={2}
            fontFamily={"Inter"}
            color={"#4c5a67"}
            fontWeight={400}
            fontSize={{ lg: "1rem", md: "1rem", sm: "0.875rem", xs: "0.75rem" }}
          >
            Elevate your business with our diverse technology and platform
            solutions.
          </Typography>
        </Box>
        <Box component="div" sx={Styles.container}>
          {items.map((item, index) => (
            <ListItem
              button
              key={index}
              selected={selectedItem === item}
              onClick={() => handleItemClick(item)}
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
                      fontFamily: "Inter",
                      fontWeight: selectedItem === item ? "bold" : "none",
                    },
                  }}
                />
                {/* {selectedItem === item && (<LineHorizental />)} */}
              </div>
            </ListItem>
          ))}
        </Box>
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { sm: '95%', md: '100%', lg: '100%' },

              display: 'block',
              justifyContent: 'center',
              opacity: showContent ? 1 : 0,
              transform: showContent ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.9)',
              transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
            }}
          >
            {selectedItem === item && (
              <div className={`selected-content ${selectedItem === item ? 'active' : ''}`}>
                {isMobileView
                  ? React.createElement(itemToSVG[selectedItem].mobile)
                  : isTabView
                    ? React.createElement(itemToSVG[selectedItem].Tab)
                    : (

                      <img
                        src={itemToSVG[selectedItem].desktop}
                        alt={`${selectedItem} Desktop`}
                      />


                    )}
              </div>
            )}
          </Box>
        ))}
        <Grid
          item
          xs={12}
          sx={{
            marginTop: { lg: "5rem", md: "3.5rem", sm: "1.5rem", xs: "1.5rem" },
            //   padding: "1rem 1rem",
            // border: "1px solid green",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              sx={{
                width: "auto",
                // height: "auto",
                // width: { lg: "170px", md: "170px", sm: "130px", xs: "120px" },
                height: { lg: "49px", md: "49px", sm: "38px", xs: "33px" },
                fontSize: { lg: "15px", md: "15px", sm: "12px", xs: "12px" },
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
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "#00000026",
              }}
            >
              Schedule A Developer Interview
            </Button>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewTechStack;
