import React from "react";
import Avatar from "@mui/material/Avatar";
import "./EngagementModel.css";

import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Box, height, padding } from "@mui/system";
import tag from "../../Assests/tag.svg";
import hiring from "../../Assests/hiring.svg";
import time from "../../Assests/time-management.svg";

const data = [
  {
    id: 1,
    name: "Fixed Price",
    description: [
      "Best option for small projects with limited budgets",
      "Resource, time & cost is discussed before the project begins",
      "Low risk model as cost and timeline are predefined",
    ],
    image: tag,
  },
  {
    id: 2,
    name: "Dedicated Hiring Model",
    description: [
      "Best option for long term & scalable projects",
      "Complete control over processes & resource management",
      "Assured model with exclusive dedicated resources",
    ],
    image: hiring,
  },
  {
    id: 3,
    name: "Time and Material",
    description: [
      "Best option when the project scope is unclear",
      "Change resources based on project's evolving lifecycle",
      "Flexible model allowing client to experiment new ideas",
    ],
    image: time,
  },

  // Add more data objects for other persons
];

const EngagementModel = () => {
  const backgroundColors = ["#319AC7", "#0E4366"];
  const isMobileView = useMediaQuery("(max-width: 480px)");
  const isTabletView = useMediaQuery("(max-width: 768px)");

  return (
    <Grid
      container
      sx={{
        padding: {
          lg: "2rem 3rem",
          md: "2rem 0rem",
          sm: "2rem 0rem",
          xs: "1rem 1rem",
        },
        backgroundColor: "#F6F6F6",
      }}
    >
      {/* First Section */}
      <Grid
        item
        xs={12}
        sx={{
          marginBottom: "3rem",
          padding: "1rem 1rem",
          // border: "1px solid red",
        }}
      >
        <Typography
          variant="h1" component="h1"
          sx={{
            color: "#1B2231",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            fontSize: { lg: ' 2.5rem', md: '2rem', sm: '1.5rem', xs: '1.5rem' },
            fontWeight: 600,
            fontFamily: "Montserrat",
            Width: "100%",
          }}
        >
          We work with you with these Business Friendly Engagement {!isMobileView && !isTabletView && <br />}Model
        </Typography>
      </Grid>

      {/* Second Section */}

      {data.map((person, index) => (
        <Grid
          key={person.id}
          item
          lg={4}
          md={4}
          sm={4}
          xs={12}
          sx={{
            // border: "1px solid blue",
            padding: {
              lg: "1rem 1.3rem",
              md: "1rem 1rem",
              sm: "1rem 0.5rem",
              xs: "1rem 3rem",
            },
            position: "relative",
          }}
        >
          <Card
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              boxShadow: "none",
            }}
          >
            <Avatar
              alt={person.name}
              sx={{
                width: { lg: "100px", md: "90px", sm: "80px", xs: "75px" },
                height: { lg: "100px", md: "90px", sm: "80px", xs: "75px" },
                marginTop: "-2rem",
                transform: {
                  lg: "auto",
                  md: "auto",
                  sm: "auto",
                  xs: "auto",
                },
                position: "absolute",
                alignItems: "center",

                backgroundColor:
                  backgroundColors[person.id % backgroundColors.length],
              }}
            >
              <img
                style={{ height: "80%", width: "80%" }}
                src={person.image}
                alt={person.name}
              />
            </Avatar>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  fontFamily: "Montserrat",
                  marginTop: {
                    lg: "6rem",
                    md: "6rem",
                    sm: "4rem",
                    xs: "3.5rem",
                  },
                  fontSize: {
                    lg: "24px",
                    md: "18px",
                    sm: "14px",
                    xs: "12px",
                  },
                  fontWeight: 600,
                  color: "#1B2231",
                }}
              >
                {person.name}
              </Typography>
              {person.description.map((point, index) => (
                <Box
                  sx={{
                    // border: "1px solid gray",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    // marginBottom: "1.5rem",
                    // marginTop: "1.5rem",
                    margin: {
                      lg: "1rem",
                      md: "1rem",
                      sm: "0.5rem",
                      xs: "0.5rem",
                    },
                    padding: "auto",
                    height: "100%",

                    width: "100%",
                    contain: "content",
                  }}
                >
                  {/* <EnTick/> */}
                  <Box
                    sx={{
                      paddingLeft: "0.5rem",
                    }}
                  >
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.5"
                        cy="10.5"
                        r="10.5"
                        fill="#62C4EA"
                        fill-opacity="0.65"
                      />
                      <path
                        d="M5 10.6L7.85714 13L15 7"
                        stroke="#0E4366"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Box>
                  <Typography
                    key={index}
                    variant="p"
                    component="p"
                    color="#4c5a67"
                    sx={{
                      fontFamily: "Inter",
                      fontSize: {
                        lg: "16px",
                        md: "14px",
                        sm: "12px",
                        xs: "12px",
                      },
                      fontWeight: 400,
                      display: "flex",
                      textAlign: "left",
                      minHeight: "90%",

                      paddingLeft: "1rem",
                    }}
                  >
                    {point}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      ))}
      {/* 3rd Section */}
      <Grid
        item
        xs={12}
        sx={{
          marginTop: "3rem",
          //   padding: "1rem 1rem",
          // border: "1px solid green",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a href="/contact" style={{ textDecoration: "none" }}>
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
            Talk to our Team
          </Button>
        </a>
      </Grid>
    </Grid>
  );
};

export default EngagementModel;
