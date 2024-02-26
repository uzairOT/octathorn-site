import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  ListItem,
  ListItemText,
  useMediaQuery,
  Button,
} from "@mui/material";
//import RounedButton from '../UI/Buttons/RounedButton';

function FeaturedProjects() {
  const [selectedItem, setSelectedItem] = useState("Embedded"); // Initialize the selected item
  const items = [
    "Embedded",
    "IOT",
    "PCB",
    "Front end",
    "Back End",
    "Mobile",
    "Customize",
  ];
  const itemsmb1 = ["Embedde", "IOT", "PCB"];
  const itemsmb2 = ["Front end", "Back End", "Mobile", "Customize"];
  const themeStyles = {
    card: {
      backgroundColor: "#D9D9D9",
      width: {
        lg: "39.3675rem",
        md: "39.3675rem",
        sm: "21.5rem",
        xs: "23.17019rem",
      },
      height: {
        lg: "24.9375rem",
        md: "24.9375rem",
        sm: "14.3125rem",
        xs: "10.8235rem",
      },
      padding: "0px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "none",
      border: "none",
      borderRadius: "0px",
    },
    cardTitile: {
      color: "#1B2231",
      fontFamily: "Montserrat",
      fontSize: { md: "1.5rem", lg: "1.5rem", sm: "0.875rem", xs: "0.75rem" },
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
    },
    cardDescription: {
      color: "#696F7C",
      fontFamily: "Montserrat",
      fontSize: { lg: "1rem", md: "1rem", sm: "0.875rem", xs: "0.75rem" },
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "151.5%",
      marginBottom: "3%",
      marginTop: "5%",
      overflow: { sm: "hidden", xs: "hidden", md: "unset", lg: "unset" },
      textOverflow: {
        xs: "ellipsis",
        sm: "ellipsis",
        md: "unset",
        lg: "unset",
      },
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: { xs: 4, sm: 4, md: 9, lg: 9 },
      maxHeight: { sm: "6.6em", xs: "6.6em", md: "unset", lg: "unset" },
    },
    listItemText: {
      // color:'#A7A7A7',
      fontFamily: "Montserrat",
      fontSize: "1.125rem",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
    },
    listContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: { sm: "nowrap", xs: "nowrap", md: "nowrap", lg: "nowrap" },
    },
    ButtonStyle: {
      width: {
        xl: "170px",
        lg: "170px",
        md: "127px",
        sm: "127px",
        xs: "7.25rem",
      },
      minWidth: {
        xl: "170px",
        lg: "170px",
        md: "127px",
        sm: "127px",
        xs: "7.25rem",
      },
      height: {
        xl: "49px",
        lg: "49px",
        md: "49px",
        sm: "37px",
        xs: "2.0625rem",
      },
      color: "#172F49",
      background: "transparent",
      fontSize: {
        xs: "0.75rem",
        sm: "12px",
        md: "12px",
        lg: "15px",
        xl: "15px",
      },
      fontWeight: 500,
      fontFamily: "Montserrat",
      lineHeight: { xs: "1.5625rem", sm: "24px", md: "24px", lg: "24px" },
      letterSpacing: "0px",
      textAlign: "center",
      marginLeft: "auto",
      border: "1px solid #0E4366",
      textTransform: "none",
      boxShadow: "none",
      padding: "20px, 36px, 20px, 36px",

      "&:hover": {
        color: "#0E4366",
        background: "#fff",
      },
    },
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };
  const isMobileView = useMediaQuery("(max-width: 480px)");
  return (
    <div>
      <Box>
        <Container
          maxWidth="lg"
          sx={{
            padding: {
              xs: "0.9rem 1.5rem",
              sm: "4.125rem 1.5rem",
              lg: "4.125rem 4.5rem",
            },
            width: "auto",
          }}
        >
          <Typography
            mb={5}
            color={"#1B2231"}
            fontSize={{
              lg: "1.875rem",
              md: "1.875rem",
              sm: "1.375rem",
              xs: "1.125rem",
            }}
            fontWeight={600}
            fontFamily={"Montserrat"}
            letterSpacing={0.2}
          >
            Feature Projects
          </Typography>
          {!isMobileView ? (
            <Box
              component="div"
              sx={{ ...themeStyles.listContainer, flex: "nowrap" }}
            >
              {items.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  selected={selectedItem === item}
                  onClick={() => handleItemClick(item)}
                  sx={{
                    ...themeStyles.listItemText,
                    borderBottom:
                      selectedItem === item
                        ? " 2px solid #1B2231"
                        : "1px solid #A7A7A7",
                    color: selectedItem === item ? "#1B2231" : "#A7A7A7",
                    "&:hover": { backgroundColor: "rgba(14, 67, 102, 0.06)" },
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
                        ...themeStyles.listItemText,
                        "& .MuiTypography-body1": {
                          fontSize: {
                            xs: "0.8rem",
                            sm: "0.8rem",
                            md: "1rem",
                            lg: "1rem",
                          },
                        },
                      }}
                    />
                    {/* {selectedItem === item && (<LineHorizental />)} */}
                  </div>
                </ListItem>
              ))}
            </Box>
          ) : (
            <Box
              component="div"
              sx={{ ...themeStyles.listContainer, flex: "nowrap" }}
            >
              {itemsmb1.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  selected={selectedItem === item}
                  onClick={() => handleItemClick(item)}
                  sx={{
                    ...themeStyles.listItemText,
                    borderBottom:
                      selectedItem === item
                        ? " 2px solid #1B2231"
                        : "1px solid #A7A7A7",
                    color: selectedItem === item ? "#1B2231" : "#A7A7A7",
                    "&:hover": { backgroundColor: "rgba(14, 67, 102, 0.06)" },
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
                        ...themeStyles.listItemText,
                        "& .MuiTypography-body1": {
                          fontSize: {
                            xs: "0.8rem",
                            sm: "0.8rem",
                            md: "1rem",
                            lg: "1rem",
                          },
                        },
                      }}
                    />
                    {/* {selectedItem === item && (<LineHorizental />)} */}
                  </div>
                </ListItem>
              ))}
            </Box>
          )}

          <Grid container spacing={2} mt={5}>
            {/*row 1*/}
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "2%",
                  marginBottom: "0%",
                }}
              >
                <Card
                  sx={{
                    ...themeStyles.card,
                    background: `URL('https://i.postimg.cc/bv274Cc6/Rectangle-95.png') no-repeat center center`,
                  }}
                >
                  {/* <CardMedia component="img" height="auto" image={'https://i.postimg.cc/bv274Cc6/Rectangle-95.png'} alt={'IMAGE'} /> */}
                </Card>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              sx={{ marginRight: "0px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  textAlign: {
                    lg: "left",
                    md: "left",
                    sm: "left",
                    xs: "center",
                  },
                  marginTop: "2%",
                  marginBottom: "0%",
                }}
              >
                <Card sx={{ ...themeStyles.card }}>
                  <CardContent
                    style={{
                      padding: { lg: "9%", md: "8%", sm: "5%", xs: "1%" },
                    }}
                  >
                    <Typography sx={themeStyles.cardTitile}>
                      Project 1
                    </Typography>
                    <Typography sx={{ ...themeStyles.cardDescription }}>
                      At Octathorn Technologies, our Custom Agile Approach
                      prioritizes adaptability and technological excellence for
                      cost-effective software solutions. Seamlessly aligned with
                      evolving needs and armed with cutting-edge technology, our
                      team ensures solutions that exceed expectations while
                      maintaining affordability. Expect a strategic partnership
                      focused on maximizing adaptability and expertise in every
                      solution we deliver.
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{ ...themeStyles.ButtonStyle }}
                    >
                      View More
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            {/*row 1 end*/}

            {/*row 2*/}

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box
                sx={{
                  display: "flex",
                  textAlign: {
                    lg: "left",
                    md: "left",
                    sm: "left",
                    xs: "center",
                  },
                  marginTop: "2%",
                  marginBottom: "0%",
                }}
              >
                <Card sx={{ ...themeStyles.card }}>
                  <CardContent
                    style={{
                      padding: { lg: "9%", md: "8%", sm: "5%", xs: "1%" },
                    }}
                  >
                    <Typography sx={themeStyles.cardTitile}>
                      Project 1
                    </Typography>
                    <Typography sx={themeStyles.cardDescription}>
                      At Octathorn Technologies, our Custom Agile Approach
                      prioritizes adaptability and technological excellence for
                      cost-effective software solutions. Seamlessly aligned with
                      evolving needs and armed with cutting-edge technology, our
                      team ensures solutions that exceed expectations while
                      maintaining affordability. Expect a strategic partnership
                      focused on maximizing adaptability and expertise in every
                      solution we deliver.
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{ ...themeStyles.ButtonStyle }}
                    >
                      View More
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "2%",
                  marginBottom: "0%",
                }}
              >
                <Card
                  sx={{
                    ...themeStyles.card,
                    background: `URL('https://i.postimg.cc/XNfkQTq2/Rectangle-97.png') no-repeat center center`,
                  }}
                >
                  {/* <CardMedia component="img" height="auto" image={'https://i.postimg.cc/bv274Cc6/Rectangle-95.png'} alt={'IMAGE'} /> */}
                </Card>
              </Box>
            </Grid>
            {/*row 2 end*/}
            {/*row 3*/}

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "2%",
                  marginBottom: "0%",
                }}
              >
                <Card
                  sx={{
                    ...themeStyles.card,
                    background: `URL('https://i.postimg.cc/bv274Cc6/Rectangle-95.png') no-repeat center center`,
                  }}
                >
                  {/* <CardMedia component="img" height="auto" image={'https://i.postimg.cc/bv274Cc6/Rectangle-95.png'} alt={'IMAGE'} /> */}
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box
                sx={{
                  display: "flex",
                  textAlign: {
                    lg: "left",
                    md: "left",
                    sm: "left",
                    xs: "center",
                  },
                  marginTop: "2%",
                  marginBottom: "0%",
                }}
              >
                <Card sx={{ ...themeStyles.card }}>
                  <CardContent
                    style={{
                      padding: { lg: "9%", md: "8%", sm: "5%", xs: "1%" },
                      overflow: "hidden",
                    }}
                  >
                    <Typography sx={themeStyles.cardTitile}>
                      Project 1
                    </Typography>
                    <Typography sx={themeStyles.cardDescription}>
                      At Octathorn Technologies, our Custom Agile Approach
                      prioritizes adaptability and technological excellence for
                      cost-effective software solutions. Seamlessly aligned with
                      evolving needs and armed with cutting-edge technology, our
                      team ensures solutions that exceed expectations while
                      maintaining affordability. Expect a strategic partnership
                      focused on maximizing adaptability and expertise in every
                      solution we deliver.
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{ ...themeStyles.ButtonStyle }}
                    >
                      View More
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            {/*row 3 end*/}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
export default FeaturedProjects;
