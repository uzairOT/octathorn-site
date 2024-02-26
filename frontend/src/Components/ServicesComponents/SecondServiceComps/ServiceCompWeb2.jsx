import React from "react";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Page1 } from "./ServiceData";

import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  Container,
} from "@mui/material";
import { Box, height, padding } from "@mui/system";

function ServiceCompWeb2(state) {


  // if (state) {
  //   const firstServiceHeading = state[0]?.ServiceHeading[0];
  //   console.log("component", state[0].ServiceHeading);
  //   const firstService = state[0];
  //   // console.log(firstService);
  //   const serviceHeading = firstService.ServiceHeading;
  //   // console.log({ serviceHeading });
  // }

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
  const heightValue = isSM ? "60%" : isXS ? "80%" : "85%";
  return (
    <Grid
      container
      sx={{
        padding: {
          lg: "2rem 0rem",
          md: "2rem 0rem",
          sm: "1rem 1rem",
          xs: "1rem 1rem",
        },
        backgroundColor: "#F6F6F6",
        marginTop: "5rem",
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
          //   border: "1px solid red",
          padding: {
            lg: "0rem 3rem",
            md: "0 7.5rem",
            sm: "0 4.5rem",
            xs: "1.19",
          },
        }}
      >
        <Typography
          variant="h1"
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
          {state?.state?.[0]?.ServiceHeading}
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{
            color: "#4C5A67",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: { lg: "1rem", md: "1rem", sm: "0.875rem", xs: "0.75rem" },

            Width: "100%",
            maxWidth: { lg: "80%", md: "97%", sm: "97", xs: "98%" },
            paddingTop: "1.17rem",

            paddingTop: "1.17rem",
          }}
        >
          {state?.state?.[1]?.ServiceDescription}
        </Typography>
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
          alignItems: { lg: "start", md: "start", sm: "center", xs: "center" },
          // paddingLeft: { lg: "8rem", md: "2rem", sm: "1rem", xs: "0rem" },
          marginTop: "1rem",
          justifyContent: {
            lg: "start",
            md: "start",
            sm: "center",
            xs: "center",
          },
          // border: "2px solid black",
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
            alignItems: { lg: "start", md: "start", sm: "start", xs: "center" },
            textAlign: { lg: "start", md: "start", sm: "start", xs: "center" },
            width: "100%",
            marginTop: "0.5rem",
            // border: "2px solid purple",
          }}
        >
          <Box
            sx={{
              paddingLeft: "0.75rem",
            }}
          >
            <img src={state?.state?.[2]?.ServicePointSvgImage[0]} alt={state?.state?.[0]?.ServiceHeading} />
          </Box>
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
              }}
            >
              {state?.state?.[3]?.ServicePointHeading[0]}
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{
                color: "#4C5A67",
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
              {state?.state?.[4]?.ServicePointDescription[0]}
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
            alignItems: { lg: "start", md: "start", sm: "start", xs: "center" },
            textAlign: { lg: "start", md: "start", sm: "start", xs: "center" },

            width: "100%",
            marginTop: "0.5rem",
            // border: "2px solid purple",
          }}
        >
          <Box
            sx={{
              paddingLeft: "0.75rem",
            }}
          >
            <img src={state?.state?.[2]?.ServicePointSvgImage[1]} alt={state?.state?.[0]?.ServiceHeading} />
          </Box>
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
              }}
            >
              {state?.state?.[3]?.ServicePointHeading[1]}
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{
                color: "#4C5A67",
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
              {state?.state?.[4]?.ServicePointDescription[1]}
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
            alignItems: { lg: "start", md: "start", sm: "start", xs: "center" },
            textAlign: { lg: "start", md: "start", sm: "start", xs: "center" },

            width: "100%",
            marginTop: "0.5rem",
            // border: "2px solid purple",
          }}
        >
          <Box
            sx={{
              paddingLeft: "0.75rem",
            }}
          >
            <img src={state?.state?.[2]?.ServicePointSvgImage[2]} alt={state?.state?.[0]?.ServiceHeading} />
          </Box>
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
              }}
            >
              {state?.state?.[3]?.ServicePointHeading[2]}
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{
                color: "#4C5A67",
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
              {state?.state?.[4]?.ServicePointDescription[2]}
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
            alignItems: { lg: "start", md: "start", sm: "start", xs: "center" },
            textAlign: { lg: "start", md: "start", sm: "start", xs: "center" },
            width: "100%",
            marginTop: "0.5rem",
            // border: "2px solid purple",
          }}
        >
          <Box
            sx={{
              paddingLeft: "0.75rem",
            }}
          >
            <img src={state?.state?.[2]?.ServicePointSvgImage[3]} alt={state?.state?.[0]?.ServiceHeading} />
          </Box>
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
              }}
            >
              {state?.state?.[3]?.ServicePointHeading[3]}
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{
                color: "#4C5A67",
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
              {state?.state?.[4]?.ServicePointDescription[3]}
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
            alignItems: { lg: "start", md: "start", sm: "start", xs: "center" },
            textAlign: { lg: "start", md: "start", sm: "start", xs: "center" },
            width: "100%",
            marginTop: "0.5rem",
            // border: "2px solid purple",
          }}
        >
          <Box
            sx={{
              paddingLeft: "0.75rem",
            }}
          >
            <img src={state?.state?.[2]?.ServicePointSvgImage[4]} alt={state?.state?.[0]?.ServiceHeading} />
          </Box>
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
              }}
            >
              {state?.state?.[3]?.ServicePointHeading[4]}
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{
                color: "#4C5A67",
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
              {state?.state?.[4]?.ServicePointDescription[4]}
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
            // border: "2px solid red",
          }}
        >
          {/* <ServiceWebSvg /> */}
          <img
            width={"100%"}
            height={heightValue}
            src={state?.state?.[5]?.ServiceImage}
            alt={state?.state?.[0]?.ServiceHeading}
          />
        </Box>
      </Grid>
      {/* Last Section */}
      <Grid
        item
        xs={12}
        sx={{
          marginTop: { lg: "6rem", md: "5rem", sm: "-20rem", xs: "-3rem" },
          //   padding: "1rem 1rem",
          // border: "1px solid green",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <Button
          variant="outlined"
          sx={{
            width: { lg: "10%", md: "15%", sm: "22%", xs: "35%" },
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
          <a href="/contact" style={{ textDecoration: "none", color: '#ffffff' }}>
            Consult
          </a>
        </Button>

      </Grid>
    </Grid>
  );
}

export default ServiceCompWeb2;
