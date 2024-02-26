

//.........

import React from "react";
import { useState, useEffect, } from "react";
import { Link, useNavigate, NavLink, Router, Route } from "react-router-dom";
import { ScrollLink } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Popover,
  Tooltip,
  Card,
  Paper,
  Collapse,
  ListItemButton
} from "@mui/material";
import {
  ProductService,
  EmbeddedService,
  IotService,
  RDService,
  PcbService,
  TechnicalService,
  WebService,
  MobileService,
  ErpService,
} from "../../Components/ServicesComponents/SecondServiceComps/ServiceData";
import {
  DatabaseTech,
  FrontEndTech,
  BackEndTech,
  MobTech,
  EmbeddedTech,
  PcbTech,
  IotTech,
} from "../../Components/Technologies/TechnologyData";
import { styled } from "@mui/system";
import Logo from "../../Assests/OctathornLogo.png";
import CustomeButton from "../UI/Buttons/RounedButton";
import MenuIcon from "@mui/icons-material/Menu";
import ClosIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// pl={{xl:'30%',lg:'25%',md:'10%'}}
export const TechlistItems = [
  "Embedded System",
  "Internet of things",
  "PCB",
  "Front End",
  "Back End",
  "Mobile App Development",
  "Database",
];
export const getTechnologyState = (tech) => {
  let techState;
  let techuseState;

  switch (tech) {
    // Embedded System
    case "Embedded System":
      techState = EmbeddedTech;
      techuseState = "Raspberry Pi";
      break;

    // Internet of Things (ioT)
    case "Internet of things":
      techState = IotTech;
      techuseState = "Azure IoT Hub";
      break;

    // PCB
    case "PCB":
      techState = PcbTech;
      techuseState = "Altium";
      break;

    // FrontEnd
    case "Front End":
      techState = FrontEndTech;
      techuseState = "Angular";
      break;

    // BackEnd
    case "Back End":
      techState = BackEndTech;
      techuseState = "Node JS";
      break;

    // MobileApp Development
    case "Mobile App Development":
      techState = MobTech;
      techuseState = "Flutter";
      break;

    // Database
    case "Database":
      techState = DatabaseTech;
      techuseState = "FireBase";
      break;

    // Add other cases for different technologies if needed
    default:
      techState = null; // Default state if no match
  }

  return { techState, techuseState };
};

function Nav() {
  const navigate = useNavigate();
  const isMobileView = useMediaQuery("(max-width: 480px)");
  const isTabletView = useMediaQuery("(max-width: 768px)");
  const mobileViewMinWidth = useMediaQuery("(min-width: 480px)");
  const [technologyState, setTechnologyState] = useState({
    techState: null,
    techuseState: null,
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  //serive popover handeling
  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ tooltip: className }} />
  ))({
    backgroundColor: "transparent",
    boxShadow: "none",
    borderRadius: 0,
    //color:'#F6F6F6'
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const IndustriesListItems = [
    "Health care",
    "Finance",
    "Defence",
    "Public Sector",
    "Manufacturing",
    "Telecom",
    "Ecommerce",
  ];
  const listItems = [
    "Product Development",
    "Embedded System",
    "iot platform development",
    "Research & Development",
    "PCB",
    "Technical Consultation",
    "Web Application",
    "Mobile Application",
    "ERP",
  ];

  const TechDataArray = [
    EmbeddedTech,
    IotTech,
    PcbTech,
    FrontEndTech,
    BackEndTech,
    MobTech,
    DatabaseTech,
  ];

  //serive popover navigation handeling....
  // Create an array of service data
  const serviceDataArray = [
    ProductService,
    EmbeddedService,
    IotService,
    RDService,
    PcbService,
    TechnicalService,
    WebService,
    MobileService,
    ErpService,
  ];


  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setDrawerOpen(!drawerOpen);
  };
  // Initialize the index state variable to null
  const [index, setIndex] = useState(null);
  const [activeLink, setActiveLink] = useState('/');




  function handleTechListItemClick(item) {
    const { techState, techuseState } = getTechnologyState(item);

    if (techState) {
      const stateObject = {
        techState: techState,
        techuseState: techuseState,
      };


      const headingWithoutSpaces = techState[0].TechHeading[0].replace(
        /\s/g,
        ""
      ).toLowerCase();
      const itemWithoutSpaces = techState[2].TechList[0].replace(/\s/g, "").toLowerCase();

      // Update the URL when the user clicks on an item
      navigate(`/technologies/${headingWithoutSpaces}`, {
        state: stateObject,
      });

      scroll.scrollToTop({ duration: 2000 });

      setAnchorEl(null);
      setDrawerOpen(false);
    }
  }





  const [openTechnologies, setOpenTechnologies] = useState(false);
  const handleTechnologiesClick = () => {
    setOpenTechnologies(!openTechnologies);
  };

  function handleServiceListItemClick(item) {
    const itemIndex = listItems?.findIndex((listItem) => listItem === item);
    // Update the index state variable
    setIndex(itemIndex);
    // Use the index to get the corresponding service data
    const serviceData = serviceDataArray[itemIndex];

    const headingWithoutSpaces = serviceData[0].ServiceHeading[0].replace(
      /\s/g,
      ""
    ).toLowerCase();
    navigate(`/services/${headingWithoutSpaces}`, {
      state: serviceData,
    });
    scroll.scrollToTop({ duration: 2000 });
    setAnchorEl(null);
    console.log(index);
    setDrawerOpen(false);
  }
  //end service popover handeling....
  //serive expand  list handeling mobile
  const [openServices, setOpenServices] = useState(false);
  const handleServicesClick = () => {
    setOpenServices(!openServices);


  };

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
    scroll.scrollToTop({ duration: 2000 });
    setAnchorEl(null);
    console.log(index);
    setDrawerOpen(false);
  }
  //end service popover handeling....
  //serive expand  list handeling mobile
  const [openIndustries, setOpenIndustries] = useState(false);
  const handleIndustriesClick = () => {
    setOpenIndustries(!openIndustries);
  };
  //end service list handeling mobile
  const style = {
    ListItemText: {
      fontSize: { lg: "1rem", md: "0.9rem", sm: "0.8rem", xs: "0.75rem" },
      fontWeight: "400",
      color: "#4c5a67",
      transition: "transform 0.3s ease-in-out", // Add transition property for transform
      '&:hover': {
        color: "#0E4366",
        background: "#fff",
        transform: 'scale(1.05)', // Grow the text to 1.1 times its original size on hover
      },


    },
    listTypography: {
      color: "#4c5a67",
      fontFamily: "Inter",
      fontSize: { lg: "1rem", md: "0.9rem", sm: "0.8rem", xs: "0.9rem" },
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      textTransform: "none",
      transition: "transform 0.3s ease-in-out",
      '&:hover': {
        transform: 'translateX(5px)',
        color: "#0E4366"
      },
    },
  };
  const list = (
    <List>
      {/* <Link to="/" style={{ textDecoration: "none" }}></Link> */}
      <Link to="/" style={{ textDecoration: "none", color: "#4c5a67" }} onClick={handleLinkClick} component={ListItemButton}>
        <ListItem button>
          <ListItemText primary="Home" sx={style.ListItemText} />
        </ListItem>
      </Link>
      <Link to="/about" style={{ textDecoration: "none", color: "#4c5a67" }} onClick={handleLinkClick} >
        <ListItem >
          <ListItemText primary="About" sx={style.ListItemText} />
        </ListItem>

      </Link>
      {/* Serive list-Item*/}
      <ListItem button onClick={handleServicesClick}>
        <ListItemText primary="Services" sx={style.ListItemText} />
        {openServices ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openServices} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {listItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleServiceListItemClick(item)}
            >
              <ListItemIcon>
                <ArrowForwardIosIcon
                  style={{
                    width: "1rem",
                    height: "1rem",
                    flexShrink: 0,
                    color: "#8E8E8E",
                    fontSize: "0.3rem",
                  }}
                />
              </ListItemIcon>
              <Typography sx={style.listTypography}>{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Collapse>
      {/* Serive list-Item END*/}
      {/* <a
        href="/Industries"
        style={{ textDecoration: "none", color: "#757575" }}
      >
        <ListItem button>
          <ListItemText primary="Industries" sx={style.ListItemText} />
        </ListItem>
      </a> */}

      <ListItem button onClick={handleIndustriesClick}>
        <ListItemText primary="Industries" sx={style.ListItemText} />
        {openIndustries ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={openIndustries} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {IndustriesListItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleIndustriesListItemClick(item)}
            >
              <ListItemIcon>
                <ArrowForwardIosIcon
                  style={{
                    width: "1rem",
                    height: "1rem",
                    flexShrink: 0,
                    color: "#8E8E8E",
                    fontSize: "0.3rem",
                  }}
                />
              </ListItemIcon>
              <Typography sx={style.listTypography}>{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Collapse>


      <ListItem button onClick={handleTechnologiesClick}>
        <ListItemText primary="Technologies" sx={style.ListItemText} />
        {openTechnologies ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openTechnologies} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {TechlistItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleTechListItemClick(item)}
            >
              <ListItemIcon>
                <ArrowForwardIosIcon
                  style={{
                    width: "1rem",
                    height: "1rem",
                    flexShrink: 0,
                    color: "#8E8E8E",
                    fontSize: "0.3rem",
                  }}
                />
              </ListItemIcon>
              <Typography sx={style.listTypography}>{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Collapse>

      {/* <ListItem button>
        <ListItemText primary="Technologies" sx={style.ListItemText} />
      </ListItem> */}
      {/* Your other components and routes */}
      <Link to="/portfolio" style={{ textDecoration: "none", color: "#757575" }} onClick={handleLinkClick}>
        <ListItem button>
          <ListItemText primary="Portfolio" sx={style.ListItemText} />
        </ListItem>
      </Link>
      <Link to="/contact" style={{ textDecoration: "none", color: "#757575" }} onClick={handleLinkClick}>
        <ListItem button sx={{ marginTop: "8%" }}>
          <CustomeButton text="Contact Us" sx={style.ListItemText} />
        </ListItem>
      </Link>
    </List>
  );
  return (
    <div style={{ minWidth: "700px" }}>
      <AppBar
        sx={{
          background: "#FFFFFF",
          boxShadow: "none",
          padding: "15px",
          borderBottom: "none",
          padding: "5px",
          boxShadow:
            "0px -1px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 2px 0px rgba(0,0,0,0.01)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#757575" }}>
            <img
              src={Logo}
              width={isTabletView ? "134px" : ""}
              alt="Octathorn technologies Hardware & Software Logo"
              style={{ marginLeft: isTabletView ? "0px" : "25px" }}
            />
          </Link>
          {!isMobileView && !isTabletView ? (
            <>
              <div style={{ flexGrow: 1 }}></div>
              <Box style={{ display: "flex", marginLeft: "auto" }}>
                <Typography
                  fontFamily={"Inter"}
                  fontWeight={400}
                  color={"#4c5a67"}
                  fontSize={{ sm: 11, md: 16, lg: 16, xl: 16 }}
                  padding={{
                    xl: "0 15px",
                    lg: "0 15px",
                    md: "0 10px",
                    sm: "0 10px",
                  }}
                  sx={{
                    transition: "transform 0.3s ease-in-out", // Add transition property for transform
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: activeLink === '/' ? "#1B2231" : "#757575", fontWeight: activeLink === '/' ? "bold" : "normal" }}
                    onClick={() => {
                      setActiveLink('/');
                      scroll.scrollToTop({ duration: 1000 });
                    }}
                  >
                    Home
                  </Link>

                </Typography>
                <Typography
                  fontFamily={"Inter"}
                  fontWeight={400}
                  color={"#4c5a67"}
                  fontSize={{ sm: 11, md: 16, lg: 16, xl: 16 }}
                  padding={{
                    xl: "0 15px",
                    lg: "0 15px",
                    md: "0 10px",
                    sm: "0 10px",
                  }}
                  sx={{
                    transition: "transform 0.3s ease-in-out", // Add transition property for transform
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  {/* <ScrollLink
                    to="company"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    style={{
                      textDecoration: "none",
                      color: "#757575",
                    }}
                  > */}
                  <Link
                    to="/about"
                    style={{ textDecoration: "none", color: activeLink === '/about' ? "#1B2231" : "#757575", fontWeight: activeLink === '/about' ? "bold" : "normal" }}
                    onClick={() => {
                      setActiveLink('/about');
                      scroll.scrollToTop({ duration: 1000 });
                    }}
                  >
                    About
                  </Link>
                  {/* </ScrollLink> */}
                </Typography>
                <Typography
                  fontFamily={"Inter"}
                  fontWeight={400}
                  color={"#4c5a67"}
                  fontSize={{ sm: 11, md: 16, lg: 16, xl: 16 }}
                  padding={{
                    xl: "0 15px",
                    lg: "0 15px",
                    md: "0 10px",
                    sm: "0 10px",
                  }}
                  sx={{ cursor: "pointer", color: "#757575" }}
                >

                  <CustomTooltip
                    title={
                      <React.Fragment>
                        <Card
                          style={{
                            width: "21.25rem",
                            height: "21rem",
                            borderRadius: "1.1875rem",
                            background: "#fff",
                            padding: "0.4rem",
                          }}
                        >
                          <Box mb={1.4375}>
                            {listItems.map((item, index) => (
                              <ListItem
                                button
                                key={index}
                                onClick={() => {
                                  handleServiceListItemClick(item);
                                  // scroll.scrollToTop({ duration: 1000 });
                                  setActiveLink(`/services/${item}`); // Add this line
                                }}

                              >
                                <ListItemIcon>
                                  <ArrowForwardIosIcon
                                    style={{
                                      width: "1rem",
                                      height: "1rem",
                                      flexShrink: 0,
                                      color: activeLink === `/services/${item}` ? "#0E4366" : "#757575",
                                      fontSize: "0.3rem",
                                    }}
                                  />
                                </ListItemIcon>
                                <Typography
                                  sx={{ ...style.listTypography, color: activeLink === `/services/${item}` ? "#0E4366" : "#757575", fontWeight: activeLink === `/services/${item}` ? "bold" : "normal" }}>
                                  {item}
                                </Typography>
                              </ListItem>
                            ))}
                          </Box>
                          {/* Add More List Items Here */}
                        </Card>
                      </React.Fragment>
                    }
                    placement="bottom"
                    interactive
                  >
                    Services
                  </CustomTooltip>
                  {/* </ScrollLink> */}
                </Typography>

                <Typography
                  fontFamily={"Inter"}
                  fontWeight={400}
                  color={"#4c5a67"}
                  fontSize={{ sm: 11, md: 16, lg: 16, xl: 16 }}
                  padding={{
                    xl: "0 15px",
                    lg: "0 15px",
                    md: "0 10px",
                    sm: "0 10px",
                  }}
                  sx={{
                    cursor: "pointer",
                    color: "#757575"
                  }}
                >

                  <CustomTooltip
                    title={
                      <React.Fragment>
                        <Card
                          style={{
                            width: "16.25rem",
                            height: "16.5rem",
                            borderRadius: "1.1875rem",
                            background: "#fff",
                            padding: "0.4rem",
                          }}
                        >
                          <Box mb={1.4375}>
                            {IndustriesListItems.map((item, index) => (
                              <ListItem
                                button
                                key={index}
                                onClick={() => {
                                  handleIndustriesListItemClick(item);
                                  // scroll.scrollToTop({ duration: 1000 });
                                  setActiveLink(`/industries/${item}`); // Add this line
                                }}
                              >
                                <ListItemIcon>
                                  <ArrowForwardIosIcon
                                    style={{
                                      width: "1rem",
                                      height: "1rem",
                                      flexShrink: 0,
                                      color: activeLink === `/industries/${item}` ? "#0E4366" : "#757575",
                                      fontSize: "0.3rem",
                                    }}
                                  />
                                </ListItemIcon>
                                <Typography sx={{ ...style.listTypography, color: activeLink === `/industries/${item}` ? "#0E4366" : "#757575", fontWeight: activeLink === `/industries/${item}` ? "bold" : "normal" }}>
                                  {item}
                                </Typography>
                              </ListItem>
                            ))}
                          </Box>
                          {/* Add More List Items Here */}
                        </Card>
                      </React.Fragment>
                    }
                    placement="bottom"
                  // interactive
                  >
                    Industries
                  </CustomTooltip>
                  {/* </ScrollLink> */}
                </Typography>

                <Typography
                  fontFamily={"Inter"}
                  fontWeight={400}
                  color={"#4c5a67"}
                  fontSize={{ sm: 11, md: 16, lg: 16, xl: 16 }}
                  padding={{
                    xl: "0 15px",
                    lg: "0 15px",
                    md: "0 10px",
                    sm: "0 10px",
                  }}
                  sx={{ cursor: "pointer", color: "#757575" }}
                >

                  <CustomTooltip
                    title={
                      <React.Fragment>
                        <Card
                          style={{
                            width: "21.25rem",
                            height: "16.5rem",
                            borderRadius: "1.1875rem",
                            background: "#fff",
                            padding: "0.4rem",
                          }}
                        >
                          <Box mb={1.4375}>
                            {TechlistItems.map((item, index) => (
                              <ListItem
                                button
                                key={index}
                                onClick={() => {
                                  handleTechListItemClick(item);
                                  // scroll.scrollToTop({ duration: 1000 });
                                  setActiveLink(`/technologies/${item}`); // Add this line
                                }}
                              >
                                <ListItemIcon>
                                  <ArrowForwardIosIcon
                                    style={{
                                      width: "1rem",
                                      height: "1rem",
                                      flexShrink: 0,
                                      color: activeLink === `/technologies/${item}` ? "#0E4366" : "#757575",
                                      fontSize: "0.3rem",
                                    }}
                                  />
                                </ListItemIcon>
                                <Typography sx={{ ...style.listTypography, color: activeLink === `/technologies/${item}` ? "#0E4366" : "#757575", fontWeight: activeLink === `/technologies/${item}` ? "bold" : "normal" }}>
                                  {item}
                                </Typography>
                              </ListItem>
                            ))}
                          </Box>
                          {/* Add More List Items Here */}
                        </Card>
                      </React.Fragment>
                    }
                    placement="bottom"
                    interactive="true"
                  >
                    Technologies
                  </CustomTooltip>
                  {/* </ScrollLink> */}
                </Typography>



                <Typography
                  fontFamily={"Inter"}
                  fontWeight={400}
                  color={"#4c5a67"}
                  fontSize={{ sm: 11, md: 16, lg: 16, xl: 16 }}
                  padding={{
                    xl: "0 100px 0 15px",
                    lg: "0 15px 0 25px",
                    md: "0 10px",
                    sm: "0 10px",
                  }}
                  sx={{
                    transition: "transform 0.3s ease-in-out", // Add transition property for transform
                    '&:hover': {
                      transform: 'scale(1.04)',
                    },
                  }}
                >

                  <Link
                    to="/portfolio"
                    style={{ textDecoration: "none", color: activeLink === '/portfolio' ? "#1B2231" : "#757575", fontWeight: activeLink === '/portfolio' ? "bold" : "normal" }}
                    onClick={() => {
                      setActiveLink('/portfolio');
                      scroll.scrollToTop({ duration: 1000 });
                    }}
                  >
                    Portfolio
                  </Link>
                  {/* </ScrollLink> */}
                </Typography>
              </Box>
              <div style={{ marginRight: "3%" }}
              >
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "#757575" }}
                  onClick={() => {
                    setActiveLink('/contact');
                    scroll.scrollToTop({ duration: 1000 });
                  }}
                >
                  <CustomeButton text="Contact Us" />
                </Link>
              </div>
            </>
          ) : (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={toggleDrawer}
                sx={{
                  marginLeft: "auto",
                  color: " #172F49",
                  display: { sm: "block", md: "none" },
                  zIndex: 9999,
                }}
              >
                {drawerOpen ? <ClosIcon /> : <MenuIcon />}
              </IconButton>
            </>
          )}
          {/* <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer} sx={{width:'100%'}}>
                        {list}
                    </Drawer> */}
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer}
            variant="persistent"
          >
            <Paper
              style={{
                width: "100%",
                height: "calc(100% - 64px)",
                marginTop: "67px",
                position: "fixed",
              }}
            >
              {list}
            </Paper>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Nav;

