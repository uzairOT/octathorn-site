import {
  Typography,
  useMediaQuery,
  Box,
  Zoom,
  Fade,
  Grid,
  colors,
  Container,
  Divider,
  theme,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./HomMain.css";
import CutomeFilledButton from "../UI/Buttons/FilledButton";
//assets imports
import IdeaImage from "../../Assests/home/ideaImage.png";
import { ReactComponent as IEPHome } from "../../Assests/home/svgs/IEPHome.svg";
import { ReactComponent as VerticalLine } from "../../Assests/home/svgs/VerticalLine.svg";
import topLeftBg from "../../Assests/home/topLeftBg.png";
import topBGTab from "../../Assests/home/topBgTab.png";
import topBGMobile from "../../Assests/home/topRightbgMobile.png";
import { ReactComponent as Idea } from "../../Assests/home/svgs/Idea.svg";
import { ReactComponent as IdeaMobile } from "../../Assests/home/svgs/IdeaMobile.svg";
import { ReactComponent as Execution } from "../../Assests/home/svgs/Execution.svg";
import { ReactComponent as ExecutionMobile } from "../../Assests/home/svgs/ExecutionMobile.svg";
import { ReactComponent as Perfect } from "../../Assests/home/svgs/Perfect.svg";
import { ReactComponent as PerfectMobile } from "../../Assests/home/svgs/PerfectMobile.svg";
import { ReactComponent as ArrowLine } from "../../Assests/home/svgs/ArrowLine.svg";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import "../UI/Cards/StatsCard.css";
function HomeMain() {

  const theme = useTheme();
  const isMobileView = useMediaQuery("(max-width: 600px)");
  const isTabletView = useMediaQuery("(max-width: 900px)");
  const isVvSmallLaptop = useMediaQuery("(max-width: 999px)");
  const isVerySmallLaptop = useMediaQuery("(max-width: 1450px)");
  const isSmallLaptop = useMediaQuery("(max-width: 1650px)");
  const isLargeLaptop = useMediaQuery("(max-width: 1900px)");
  const widthValue = isVvSmallLaptop
    ? "10rem"
    : isVerySmallLaptop
      ? "23rem"
      : isSmallLaptop
        ? "25rem"
        : "40rem";
  const marginLeftValue = isVvSmallLaptop
    ? "0rem"
    : isVerySmallLaptop
      ? "0rem"
      : isSmallLaptop
        ? "0rem"
        : "10rem";

  const themeStyles = {
    heading: {
      fontSize: { xl: "2.5rem", lg: "40px", md: "40px", sm: "32px", xs: "20px" },
      fontWeight: 600,

      lineHeight: {
        xl: "45px",
        lg: "52px",
        md: "52px",
        sm: "50px",
        xs: "25px",
      },
      letterSpacing: "0px",
      width: {
        xl: "47.75rem",
        lg: "47.75rem",
        md: "47.75rem",
        sm: "auto",
        xs: "auto",
      },
      // minWidth: { xl: '70%', lg: '70%', md: '90%', sm: '90%', xs: '90%' },
      marginTop: { xl: "10%", lg: "10%", md: "10%", sm: "10%", xs: "25%" },
      fontFamily: "Montserrat",
      color: "#1B2231",
      textTransform: "uppercase",
      textAlign: {
        lg: "left",
        md: "left",
        sm: "center",
        sx: "center",
        xs: "center",
      },
      marginLeft: { sm: "8%", xs: "3%", md: "0%", lg: "0%", xl: "0%" },


    },
    heading2: {
      color: "#319AC7",
      fontFamily: "Montserrat",
      fontSize: { xl: "45px", lg: "40px", md: "40px", sm: "32px", xs: "20px" },
      fontStyle: "normal",
      fontWeight: " 800",
      // fontWeight: "bold",
      lineHeight: "131.652%",
      textTransform: "uppercase",

    },
    sutitle: {
      fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: { lg: "27px", md: "27px", sm: "22px", xs: "normal" },
      letterSpacing: "0px",
      marginLeft: "0%",
      width: { xl: "63%", lg: "63%", md: "70%", sm: "85%", xs: "85%" },
      paddingTop: { lg: "2%", md: "2%", sm: "2%", xs: "5%" },
      paddingBottom: { lg: "0%", md: "0%", sm: "0%", xs: "5%" },
      // marginBottom: isMobileView ? '40%' : '',
      textAlign: {
        lg: "left",
        md: "left",
        sm: "center",
        sx: "center",
        xs: "center",
      },
      color: "#4c5a67",
      fontFamily: "Inter",
      marginLeft: { xs: "6%", sm: "6%", md: "0%", lg: "0%", xl: "0%" },
      animation: "slideInFromLeft 0.8s ease-in-out",
      "@keyframes slideInFromLeft": {
        from: {
          transform: "translateX(-100%)",
          opacity: 0,
        },
        to: {
          transform: "translateX(0)",
          opacity: 1,
        },
      },
    },
    gridStyle: {
      //break point
      fontFamily: "Montserrat",
      justifyContent: { sm: "center", xs: "space-between" },
      alignItems: { sm: "center", xs: "normal" },
      width: { xl: "70%", lg: "70%", md: "90%", sm: "90%", xs: "100%" },
      // MOVE TO LTTLE LEFT
      marginLeft: { sm: "4%", xs: "0%" },
    },


  };
  return (

    <Box
      // minWidth={{ sm: "1200px", md: "1200px" }}
      padding="0 1rem"
      sx={{
        display: "flex",
        padding: {
          xs: "0.9rem 1.5rem",
          sm: "4.125rem 1.5rem",
          lg: "1.0rem 2.5rem",
        },
      }}
    >

      <Box
        sx={{
          marginBottom: "3%",
          textAlign: { xs: "centre", sm: "center", md: "left", lg: "left" },
          zIndex: 1,
          // border: "2px solid black",
          display: "block",
          // width: { lg: "80%", md: "80%", sm: "auto", xs: "" },
        }}
        marginLeft={marginLeftValue}
      >

        {/*  marginTop: isMobileView ? "30%" : '8%' */}
        {isMobileView ? (
          <img
            src={topBGMobile}
            alt="Octathorn technologies Hardware & Software Logo"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
              top: 0,
              zIndex: -1,
            }}
          />
        ) : isTabletView ? (
          <img
            src={topBGTab}
            alt="Octathorn technologies Hardware & Software Logo"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              top: 0,
              zIndex: -1,
            }}
          />
        ) : (
          <img
            src={topLeftBg}
            alt="Octathorn technologies Hardware & Software Logo"
            style={{
              display: "flex",
              overflow: "hidden",
              justifyContent: "flex-end",
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: -1,
            }}
          />
        )}
        <Typography variant="h1" sx={{
          ...themeStyles.heading,
          animation: "slideInFromLeft 0.8s ease-in-out",
          "@keyframes slideInFromLeft": {
            from: {
              transform: "translateX(-100%)",
              opacity: 0,
            },
            to: {
              transform: "translateX(0)",
              opacity: 1,
            },
          },
        }}>
          Unlock the Future with Trusted Next-Generation
          <Box
            component="span"
            fontWeight="900"
            // className="btn-shine"
            className="txt-shine"
            style={themeStyles.heading2}
          >
            {" "}
            Hardware
          </Box>{" "}
          {!isTabletView ? "" : ""}and{" "}
          <strong className="txt-shine" style={themeStyles.heading2}>
            Software
          </strong>{" "}
          Solution
        </Typography>

        <Typography variant="body1" sx={themeStyles.sutitle}>
          Embrace the future confidently with our trusted and forward-looking
          next-generation hardware and software solutions.
        </Typography>
        <Fade in={true} timeout={3000}>
          <Box
            style={{
              marginTop: "3%",
              marginLeft: "0%",
              textAlign: isTabletView ? "center" : "",
            }}
          >
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <CutomeFilledButton text="Consult" />
            </Link>
          </Box>
        </Fade>
        {!isMobileView && (
          <Box
            style={{
              marginTop: "6%",
              display: "flex",
              marginLeft: isTabletView ? "2%" : "",
            }}
          >
            <Typography
              // className="txt-shine"
              variant="h3"
              fontSize={13}
              mt={0.5}
              mr={2}
              marginLeft={{ sm: "auto", md: "0px", lg: "0px", xl: "0px" }}
              fontWeight={700}
              fontFamily={"Montserrat"}
              color={"#1B2231"}
            >
              QUALITY FOCUS
            </Typography>
            <VerticalLine />
            <Typography
              // className="txt-shine"
              variant="h3"
              fontSize={13}
              mt={0.5}
              mr={2}
              ml={2}
              fontWeight={700}
              fontFamily={"Montserrat"}
              color={"#1B2231"}
            >
              CUSTOMER CENTRIC
            </Typography>
            <VerticalLine />
            <Typography
              // className="txt-shine"
              variant="h3"
              fontSize={13}
              marginRight={{ sm: "auto" }}
              mt={0.5}
              ml={2}
              fontWeight={700}
              fontFamily={"Montserrat"}
              color={"#1B2231"}
            >
              INSIGHTS DRIVEN
            </Typography>
          </Box>
        )}
        {(isTabletView || isMobileView) && (
          <Grid
            container
            color={"#0E4366"}
            spacing={2}
            sx={{ ...themeStyles.gridStyle, mt: 5 }}
          >
            <Grid
              item
              xs={6}
              sm={3}
              height={{ xs: "8.5rem", sm: "" }}
              width={{ xs: "11.0625rem", sm: "" }}
              sx={{
                background: isMobileView ? "#fff" : "",
                color: isMobileView ? "#0E4366" : "",
              }}
            >
              {isMobileView ? (
                <IdeaMobile style={{ marginBottom: "5%" }} />
              ) : (
                <Idea style={{ marginBottom: "5%" }} />
              )}
              <Typography
                variant="h3"
                fontFamily="Montserrat"
                fontSize={{ sm: 14, xs: 11 }}
                fontWeight={600}
                align="center"
              >
                YOUR IDEA
              </Typography>
            </Grid>
            {!isMobileView && (
              <Grid item xs={6} sm={1}>
                {" "}
                <ArrowLine />
              </Grid>
            )}

            <Grid
              item
              xs={6}
              sm={3}
              paddingLeft={20}
              sx={{
                background: isMobileView ? "#EBEBEB" : "",
                color: isMobileView ? "#319AC7" : "",
              }}
            >
              {isMobileView ? (
                <ExecutionMobile style={{ marginBottom: "5%" }} />
              ) : (
                <Execution style={{ marginBottom: "5%" }} />
              )}
              <Typography
                variant="h3"
                fontFamily="Montserrat"
                align="center"
                fontSize={{ sm: 14, xs: 11 }}
                fontWeight={600}
              >
                OUR EXECUTION
              </Typography>
            </Grid>
            {!isMobileView && (
              <Grid item xs={6} sm={1}>
                {" "}
                <ArrowLine />
              </Grid>
            )}
            {/* {!isMobileView &&(  <ArrowLine  style={{ flex: '1' }} />)}   */}
            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                background: isMobileView ? "#575757" : "",
                color: isMobileView ? "#FFF" : "",
              }}
            >
              {isMobileView ? <PerfectMobile /> : <Perfect />}
              <Typography
                variant="h3"
                fontFamily="Montserrat"
                align="center"
                fontSize={{ sm: 14, xs: 11 }}
                fontWeight={600}
              >
                PERFECT PRODUCT
              </Typography>
            </Grid>

            {isMobileView && (
              <Grid
                item
                xs={6}
                sm={4}
                height={"8.5rem"}
                width={"11.0625rem"}
                sx={{
                  background: "#0E4366",
                  color: "#FFF",
                  alignItems: "center",
                }}
              >
                <Box mt={1} mr={2}>
                  <Typography
                    variant="h3"
                    pb={1}
                    fontFamily="Montserrat"
                    align="center"
                    fontSize={"0.75rem"}
                    fontWeight={700}
                  >
                    QUALITY FOCUS
                  </Typography>
                  <Divider
                    sx={{
                      width: "2.3125rem",
                      height: "1px",
                      background: "#5ADAFD",
                      margin: "0 auto",
                    }}
                  />
                  <Typography
                    variant="h3"
                    pt={1}
                    pb={1}
                    fontFamily="Montserrat"
                    align="center"
                    fontSize={"0.75rem"}
                    fontWeight={700}
                  >
                    CUSTOMER CENTRIC
                  </Typography>
                  <Divider
                    sx={{
                      width: "2.3125rem",
                      height: "1px",
                      background: "#5ADAFD",
                      margin: "0 auto",
                    }}
                  />
                  <Typography
                    variant="h3"
                    pt={1}
                    fontFamily="Montserrat"
                    align="center"
                    fontSize={"0.75rem"}
                    fontWeight={700}
                  >
                    INSIGHTS DRIVEN
                  </Typography>
                </Box>
              </Grid>
            )}
          </Grid>
        )}
      </Box>

      {!isMobileView && !isTabletView && (
        <Fade in={true} timeout={3000}>
          <Box
            display="flex"
            sx={{
              flexDirection: "column",
              // border: "2px solid red",
              marginRight: { lg: "4rem", md: "10rem" },
              marginLeft: { lg: "0rem", md: "-8rem" },
              marginTop: { lg: "1rem", md: "-2rem" },
            }}
          >
            <IEPHome width={widthValue} />
          </Box>
        </Fade>
      )}

    </Box>

  );
}

export default HomeMain;
