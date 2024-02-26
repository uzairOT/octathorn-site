import React from "react";
import Avatar from "@mui/material/Avatar";
import "./WhyClientsChooseUs.css";
import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";
import { Box, height, padding } from "@mui/system";
import web from "../../Assests/web-page.svg";
import customer from "../../Assests/customer-service.svg";
import efficiency from "../../Assests/efficiency.svg";
import creativity from "../../Assests/creativity.svg";
import talk from "../../Assests/talk.svg";
import solution from "../../Assests/solution.svg";
import user_engagement from "../../Assests/user-engagement.svg";
import review from "../../Assests/review.svg";
import idea from "../../Assests/idea.svg";

const data = [
  {
    id: 1,
    name: "High Client Retention ",
    description: "Demonstrates our dedication to satisfaction and success.",
    image: review,
  },
  {
    id: 2,
    name: "Innovative Vision",
    description:
      "Propelling your business forward with forward-thinking solutions.",
    image: creativity,
  },
  {
    id: 3,
    name: "Tailored Solutions",
    description: "Customized solutions for optimal efficiency and performance.",
    image: solution,
  },
  {
    id: 4,
    name: "User-Centric Approach",
    description: "Surpassing expectations through a client-focused approach.",
    image: user_engagement,
  },
  {
    id: 5,
    name: "Efficient Integration & Compatibility",
    description:
      "Integration that minimizes disruptions and maximizes efficiency.",
    image: efficiency,
  },
  {
    id: 6,
    name: "Domain Expertise",
    description:
      "Providing precise and effective business solutions through specialized knowledge.",
    image: web,
  },
  {
    id: 7,
    name: "Transparent Communication",
    description:
      "Open and clear communication throughout your project's lifecycle.",
    image: talk,
  },
  {
    id: 8,
    name: "Continuous Support & Updates",
    description:
      "Ongoing support, updates, and maintenance for sustained system efficiency and security.",
    image: customer,
  },
  {
    id: 9,
    name: "Cost-Effective Solutions",
    description:
      "Delivering high-quality solutions without compromising affordability.",
    image: idea,
  },

  // Add more data objects for other persons
];

const WhyClientChoseUs = () => {
  const backgroundColors = ["#319AC7", "#0E4366"];
  return (
    <Grid
      container
      sx={{
        // padding: {
        //   lg: "2rem 2rem",
        //   md: "2rem 2rem",
        //   sm: "1rem 1rem",
        //   xs: "1rem 1rem",
        // },
        padding: {
          xs: "0.9rem 1.5rem",
          sm: "4.125rem 1.5rem",
          lg: "4.125rem 5.5rem",
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
          variant="h1"
          component="h1"
          sx={{
            color: "#1B2231",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            fontSize: { lg: "40px", md: "38px", sm: "32px", xs: "20px" },
            fontWeight: 600,
            fontFamily: "Montserrat",
            Width: "100%",
          }}
        >
          Reliable Expertise in Hardware and Software Solutions <br /> Why
          Clients Choose Us ?
        </Typography>
      </Grid>

      {/* Second Section */}
      {data.map((card) => (
        <Grid
          key={card.id}
          item
          lg={4}
          md={4}
          sm={4}
          xs={12}
          sx={{
            // border: "1px solid blue",
            padding: "1rem 1rem",
          }}
        >
          <Card
            sx={{
              height: "100%",
              boxShadow: "none",
              backgroundColor: "#F6F6F6",
            }}
          >
            <Avatar
              alt={card.name}
              sx={{
                width: { lg: "100px", md: "95px", sm: "85px", xs: "80px" },
                height: { lg: "100px", md: "95px", sm: "85px", xs: "80px" },
                margin: "auto",
                backgroundColor:
                  backgroundColors[card.id % backgroundColors.length],
              }}
            >
              <img src={card.image} alt={card.name} />
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
                  width: "100%",
                  marginTop: "2.5rem",
                  fontSize: { lg: "24px", md: "18px", sm: "16px", xs: "16px" },
                  fontWeight: "600",
                  contain: "content",
                  color: "#1B2231",
                }}
              >
                {card.name}
              </Typography>
              <Typography
                variant="p"
                component="p"
                color="#4c5a67"
                sx={{
                  fontFamily: "Inter",
                  height: "100%",
                  marginTop: "1rem",
                  fontSize: { lg: "16px", md: "15px", sm: "14px", xs: "14px" },
                  fontWeight: "400",
                }}
              >
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default WhyClientChoseUs;
