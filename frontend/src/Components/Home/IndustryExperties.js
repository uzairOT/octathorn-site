import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./industryExperties.css";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Container,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ReactComponent as VerticalLine } from "../../Assests/home/svgs/VerticleLineIndustry.svg";
import { ReactComponent as TickIcon } from "../../Assests/home/svgs/tickIcon.svg";
import FilledButton from "../UI/Buttons/FilledButton";
import { animateScroll as scroll } from "react-scroll";

import "./IndustryBar.css";
//accordian imports
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Skeleton from '@mui/material/Skeleton';
import { Button } from "react-scroll";

const Styles = {
  list: {
    // width: '100%',
    // maxWidth: 333,
  },
  listItem: {
    paddingLeft: "0%",
  },
  listItemText: {
    paddingLeft: 5,
    textTransform: "uppercase",
    "& .MuiTypography-body1": {
      fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1.25rem", lg: "1.25rem" },
      fontFamily: "Poppins",
      fontWeight: 600,
      fontStyle: "normal",
    },
  },
};


function IndustryExperties() {
  const IndustriesListItems = [
    "Health care",
    "Finance",
    "Defence",
    "Public Sector",
    "Manufacturing",
    "Telecom",
    "Ecommerce",
  ];
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [industryData, setIndustryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]); // Initialize the items
  // Initialize the index state variable to null
  const [index, setIndex] = useState(null);

  function handleIndustriesListItemClick(item) {
    const itemIndex = IndustriesListItems?.findIndex(
      (listItem) => listItem === item
    );
    // Update the index state variable
    setIndex(itemIndex);
    const headingWithoutSpaces = item.replace(
      /\s/g,
      ""
    ).toLowerCase();

    navigate(`/industries/${headingWithoutSpaces}`, {
      // state: serviceData,
    });
    // setAnchorEl(null);
    console.log(index);
    // setDrawerOpen(false);
  }


  useEffect(() => {
    axios.get('https://octathorn.com/api/project')
      .then(response => {
        const transformedData = response.data.reduce((acc, item) => {
          if (!acc[item.industry]) {
            acc[item.industry] = [];
          }
          acc[item.industry] = [...acc[item.industry], ...item.projects.map(project => ({
            title: project.title,
            images: project.images,
            description: project.description,
            features: project.features,
            bussinues: project.bussinues,
            challenges: project.challenges,
            solutions: project.solutions,
            objectives: project.objectives,
            technologies: project.technologies,
          }))];
          return acc;
        }, {});
        console.log("project portfolio", transformedData);
        setIndustryData(transformedData);
        setSelectedItem(response.data[0].industry);

        // Set the items with the industries from the response
        setItems([...new Set(response.data.map(item => item.industry))]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const themeStyles = {
    heading: {
      fontSize: { lg: "2.5rem", md: "2.5rem", sm: "2rem", xs: "1.25rem" },
      color: "#1B2231",
      textTransform: "capitalize",
      fontWeight: 600,
    },
    subtitle: {
      fontSize: { lg: "1rem", md: "1rem", sm: "0.875rem", xs: "0.75rem" },
      color: "#4c5a67",
      fontWeight: 400,
      paddingTop: 2,
      width: {
        lg: "60.25rem",
        md: "52.25rem",
        sm: "90%",
        xs: "90%",
      },
      marginLeft: "auto",
      marginRight: "auto",
    },
    card: {
      display: "flex",
      justifyContent: "center",
      // backgroundColor: "#D9D9D9",
      // minWidth: "90%",
      // width: {
      //   lg: "15.6875rem",
      //   md: "14.6875rem",
      //   sm: "9.4375rem",
      //   xs: "18.125rem",
      // },
      height: { lg: "19.375rem", md: "14.375rem", sm: "13rem", xs: "7.125rem" },
      // padding: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "none",
      border: "none",
    },
    cardtitle: {
      fontSize: { lg: "1.5rem", md: "1.5rem", sm: "1.25rem", xs: "0.8rem" },
      color: "#1B2231",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "27px",
      marginTop: "10px",
      lineHeight: "1.96563rem",
      textTransform: "capitalize",
      width: {
        lg: "32rem",
        md: "25.875rem",
        sm: "19.125rem",
        xs: "16.375rem",
      },
      fontFamily: "Montserrat",
    },
    carddescription: {
      fontSize: { lg: "1rem", md: "1rem", sm: "0.875rem", xs: "0.75rem" },
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "1.695rem",
      color: "#4c5a67",
      width: {
        lg: "32.0625rem",
        md: "25.0625rem",
        sm: "21.3125rem",
        xs: "13.75rem",
      },
      marginTop: "1rem",
      lineHeight: "24px",
      fontFamily: "Inter",
      overflow: { sm: "hidden", xs: "hidden", md: "hidden", lg: "hidden" },
      textOverflow: {
        xs: "ellipsis",
        sm: "ellipsis",
        md: "ellipsis",
        lg: "ellipsis",
      },
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: { xs: 4, sm: 4, md: 7, lg: 7 },
      maxHeight: { sm: "6.6em", xs: "6.6em", md: "10.6em", lg: "10.6em" },
    },
    textarea: {
      width: "100%",
      height: "100px",
      color: "#000",
      borderRadius: "17px",
      backgroundColor: "#0E4366",
    },
    productList: {
      color: "#4c5a67",
      fontSize: { lg: "1rem", md: "1rem", sm: "0.875rem", xs: "0.75rem" },
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "1.695rem",
      fontFamily: "Inter",
      marginLeft: 4,
    },
    learnMore: {
      color: "#4c5a67",
      fontFamily: "Inter",
      fontSize: { lg: '175rem', md: '0.875rem', sm: '0.875rem', xs: '0.75rem' },
      fontStyle: 'italic',
      fontWeight: 400,
      lineHeight: '1.5625rem',
      cursor: 'pointer',
    },
    accordioHeading: {
      color: "#0E4366",
      fontFamily: "Montserrat",
      fontSize: "0.75rem",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      textTransform: "uppercase",
    },
    accordionContentDescription: {
      color: "#4c5a67",
      fontFamily: "Inter",
      fontSize: "0.75rem",
      fontStyle: "normal",
      fontWeight: 400,
    },
  };
  const isMobileTabletView = useMediaQuery("(max-width: 600px)");
  const selectedData = industryData[selectedItem] || {};


  return (
    <Box
      sx={{
        marginLeft: { lg: "-3rem", md: "-3rem", sm: "1.5rem", xs: "0" },
        Contain: "content",
        // border: "2px solid blue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Box width="100%" display="flex" flexDirection="column" alignItems="center" >
    <Container maxWidth="false" sx={{ padding: {xs:'0.9rem 1.5rem',sm: '4.125rem 1.5rem',lg:'4.125rem 4.5rem'} }}> */}
      <Typography variant="h1" fontFamily={"Montserrat"} sx={themeStyles.heading}>
        {" "}
        Industry Expertise
      </Typography>
      <Typography variant="subtitile1" component="p" fontFamily={"Inter"} sx={themeStyles.subtitle}>
        {" "}
        At Octathorn, our tailored solutions cater to diverse industries,
        enriching operations with enhanced security, efficiency, innovation, and
        seamless workflows. We drive transformative growth and innovation across
        various sectors.
      </Typography>
      {loading ? (
        // <CircularProgress /> 

        <>
          <Skeleton width="50%" height="60px" animation="wave" />
          <Skeleton width="50%" height="60px" animation="wave" />
          <Skeleton width="50%" height="60px" animation="wave" />
          <Skeleton width="50%" height="60px" animation="wave" />
          <Skeleton width="50%" height="60px" animation="wave" />
        </>
      ) : (
        <>
          {!isMobileTabletView ? (
            <Box
              sx={{
                display: "flex",
                marginRight: { lg: "0%", md: "-5%", sm: "-9%", xs: "0%" },
                marginTop: "3%",
                // border: "2px solid red ",
                width: "auto",
                // paddingLeft: "15rem",
              }}
            >

              {/* call industry bar here */}
              <List component="nav" sx={Styles.list}>
                {items.map((item, index) => (
                  <ListItem
                    button
                    key={index}
                    selected={selectedItem === item}
                    onClick={() => handleItemClick(item)}
                    style={Styles.listItem}
                    sx={{
                      width: {
                        lg: "21.9375rem",
                        md: "21.9375rem",
                        sm: "14.625rem",
                      },
                      height: { lg: "3.875rem", md: "3.875rem", sm: "3.875rem" },
                      marginBottom: "10px",
                      color: "#0E4366",
                      backgroundColor:
                        selectedItem === item
                          ? "rgba(14, 67, 102, 0.06)"
                          : "#F6F6F6",
                    }}
                  >
                    {selectedItem === item && <VerticalLine />}

                    <ListItemText primary={item} sx={Styles.listItemText} />
                    <ListItemIcon sx={{ color: "#0E4366", marginLeft: "20px" }}>
                      {/* {selectedItem === item && <ChevronRightIcon />} */}
                      <ChevronRightIcon />
                    </ListItemIcon>
                  </ListItem>
                ))}
              </List>
              {/* 
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              border: "2px solid red",
            }}
            marginLeft={{ lg: "5%", md: "5%", sm: "0%", xs: "0%" }}
          > */}
              <Container
                maxWidth="none"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: {
                      lg: "30.875rem",
                      md: "16.875rem",
                      sm: "16rem",
                      xs: "12rem",
                    },
                    height: "auto",
                    textAlign: "left",
                    // border: "2px solid orange",
                  }}
                >
                  <Typography variant="h2" component="h2" sx={themeStyles.cardtitle}>
                    {industryData[selectedItem]?.[0]?.title}
                  </Typography>
                  <Typography variant="subtiltle2" component="p" sx={themeStyles.carddescription}>
                    {industryData[selectedItem]?.[0]?.description}
                  </Typography>

                  {/* Proudcts LISTS*/}

                  <Box
                    sx={{
                      //display: "grid",
                      // gridTemplateColumns: "repeat(2, 1fr)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      marginTop: "5%",
                      justifyContent: "left",
                      alignItems: "flex-start",
                    }}
                  >

                    {industryData[selectedItem]?.[0]?.features?.slice(0, 3).map((feature, index) => {
                      const trimmedFeature = feature.split(':')[0].trim();
                      return (
                        <Box key={index} sx={{ display: "flex", flexDirection: 'row' }}>
                          <TickIcon />
                          <Typography variant="body2" component="p" sx={themeStyles.productList}>
                            {trimmedFeature}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>


                  <Box
                    sx={{
                      marginTop: "1rem",
                      display: "flex",
                    }}
                  >
                    <h4 style={{ ...themeStyles.learnMore, textAlign: 'left' }} onClick={() => {
                      handleIndustriesListItemClick(selectedItem);
                      scroll.scrollToTop({ duration: 1000 });
                    }}> Learn More {">>"}</h4>

                  </Box>
                  {/*LISTS*/}
                </Box>
                <Box
                  sx={{
                    marginLeft: { lg: "2.8%", md: "0rem", sm: "4.8rem", xs: "" },
                    marginTop: "2%",
                    display: "flex",
                  }}
                >
                  <Card
                    sx={{
                      ...themeStyles.card,
                      display: "block", // Set the default display property
                      "@media (max-width: 1200px) and (min-width: 600px)": {
                        display: "none", // Hide the image within the specified range
                      },
                    }}
                  >
                    <CardMedia
                      sx={{
                        // left: "10rem",
                        width: "100%",
                        height: "100%",
                        objectFit: 'fill',
                      }}

                      component="img"
                      image={industryData[selectedItem]?.[0]?.images[0]}
                      alt={industryData[selectedItem]}
                    />
                  </Card>
                </Box>
              </Container>
            </Box>
          ) : (
            // </Box>
            <Box mt={5} sx={{ width: "90%" }}>
              {Object.entries(industryData).map(([industry, data], index) => (
                <Accordion
                  key={index}
                  style={{
                    // width: '19.9375rem',
                    // height: '4.375rem',
                    // border: '0.5px solid rgba(14, 67, 102, 0.02)',
                    minHeight: "4.375rem",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "#0E4366" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="h2" sx={themeStyles.accordioHeading}>
                      {industry}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="h2"
                      sx={{ ...themeStyles.cardtitle, textAlign: "left" }}
                    >
                      {data[0].title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        ...themeStyles.accordionContentDescription,
                        textAlign: "left",
                      }}
                    >
                      {data[0].description}
                    </Typography>
                    {/* Proudcts LISTS*/}

                    <Box
                      sx={{
                        // display: "grid",
                        //  gridTemplateColumns: "repeat(2, 1fr)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        marginTop: "5%",
                      }}
                    >
                      {data[0]?.features?.slice(0, 3)?.map((feature, index) => {
                        const trimmedFeature = feature.split(':')[0].trim();
                        return (
                          <Box key={index} sx={{ display: "flex", flexDirection: "row" }}>
                            <TickIcon />
                            <Typography variant="body2" sx={themeStyles.productList}>
                              {trimmedFeature}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Box>
                    {/*LISTS*/}
                    <Box
                      sx={{
                        marginLeft: "1%",
                        marginTop: "2%",
                        width: "100%",
                        contain: "content",
                      }}
                    >
                      <Card sx={{ ...themeStyles.card }}>
                        <CardMedia
                          component="img"
                          height="200"
                          sx={{ objectFit: 'scale-down', }}
                          image={data[0].images[0]}
                          alt={industryData[selectedItem]}
                        />
                      </Card>
                    </Box>
                    <h5 style={{ ...themeStyles.learnMore, textAlign: 'left' }} onClick={() => {
                      handleIndustriesListItemClick(selectedItem);
                      scroll.scrollToTop({ duration: 1000 });
                    }}> Learn More {">>"}</h5>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          )}
        </>
      )}
    </Box>
  );
}

export default IndustryExperties;
