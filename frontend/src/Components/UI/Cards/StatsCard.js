import React from "react";
import CountUp from "react-countup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Divider, Grid } from "@mui/material";
import "./StatsCard.css";
function StatsCard() {
  const themeStyles = {
    container: {
      textAlign: "center",
      background: "#F6F6F6", // Use the theme color
      alignItems: "center",
      justifyContent: "center",
      //  width: '100%',
      fontFamily: "Poppins",
    },
    contup: {
      fontSize: {
        xs: "3.125rem",
        sm: "4.375rem",
        md: "5.125rem",
        lg: "5.125rem",
      },
      fontWeight: 600,
      color: "#319AC7",
    },
    countupBottomText: {
      fontSize: { lg: "1.1875rem", md: "1.1875rem", sm: "1rem", xs: "0.75rem" },
      fontWeight: 500,
      color: "#757575",
      marginTop: "5%",
    },
    gridStyle: {
      marginTop: "3%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      // gap: '140px',
      "@media (maxwidth: 576px)": {
        flexWrap: "wrap",
      },
    },
  };
  return (
    <Box
      sx={{
        border: "none",
        padding: { lg: "0 5rem", md: "0 5rem", sm: "0 5rem", xs: "0 0" },
      }}
    >
      <Grid
        container
        color={"#319AC7"}
        spacing={2}
        style={themeStyles.gridStyle}
        flexWrap={{ xs: "wrap", sm: "wrap", md: "nowrap", lg: "nowrap" }}
        gap={{ xs: "2rem", sm: "9rem", md: "140px", lg: "140px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          
        >
          <Typography className="txt-shine" variant="h3" component="p" sx={themeStyles.contup}>
            <CountUp end={78} duration={10} />
          </Typography>
          {/* <StraightLine /> */}
          <Divider
            sx={{
              border: " 2px solid #0E4366",
              width: {
                lg: "5.8rem",
                md: "5.8rem",
                sm: "5.8rem",
                xs: "5.8125rem",
              },
            }}
          />
          <Typography
            fontFamily={" Montserrat"}
            sx={themeStyles.countupBottomText}
          >
            Satisfied Clients
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography className="txt-shine" variant="h3" component="p" sx={themeStyles.contup}>
            <CountUp end={25} duration={10} />
          </Typography>
          {/* <StraightLine /> */}
          <Divider
            sx={{
              border: " 2px solid #0E4366",
              width: {
                lg: "5.8rem",
                md: "5.8rem",
                sm: "5.8rem",
                xs: "5.8125rem",
              },
            }}
          />
          <Typography
            sx={themeStyles.countupBottomText}
            fontFamily={" Montserrat"}
          >
            Accolades Earned
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography className="txt-shine" variant="h3" component="p" sx={themeStyles.contup}>
            <CountUp end={50} duration={10} />
            {"+"}
          </Typography>
          {/* <StraightLine /> */}
          <Divider
            sx={{
              border: " 2px solid #0E4366",
              width: {
                lg: "9.18rem",
                md: "9.18rem",
                sm: "9.18rem",
                xs: "5.8125rem",
              },
            }}
          />
          <Typography
            sx={themeStyles.countupBottomText}
            fontFamily={" Montserrat"}
          >
            Talanted IT Professionals
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography className="txt-shine" variant="h3" component="p" sx={themeStyles.contup}>
            <CountUp end={500} duration={10} />
            {"+"}
          </Typography>

          {/* <StraightLine /> */}
          <Divider
            sx={{
              border: " 2px solid #0E4366",
              width: {
                lg: "12.5625rem",
                md: "12.5625rem",
                sm: "12.5625rem",
                xs: "5.8125rem",
              },
            }}
          />
          <Typography
            sx={themeStyles.countupBottomText}
            fontFamily={" Montserrat"}
          >
            Successful Projects
          </Typography>
        </div>
      </Grid>
    </Box>
  );
}

export default StatsCard;
