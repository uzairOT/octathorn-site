import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Card,
  ListItem,
  ListItemText,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import Skeleton from '@mui/material/Skeleton';
import useMediaQuery from "@mui/material/useMediaQuery";
import { ReactComponent as TickIcon } from "../../Assests/home/svgs/tickIcon.svg";
import { animateScroll as scroll } from "react-scroll";


const Projects = () => {
  const navigate = useNavigate();
  const isXS = useMediaQuery("(max-width: 599px)");
  const isLG = useMediaQuery("(min-width: 600px)");
  const [loading, setLoading] = useState(true);
  const [projectsData, setProjectsData] = useState({});
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showContent, setShowContent] = useState(false);


  const handleViewMore = (project) => {
    const titleWithoutSpaces = project.title.replace(/\s/g, '').toLowerCase();
    navigate(`/project/${titleWithoutSpaces}`, { state: { project } });
    scroll.scrollToTop({ duration: 2000 });
  };
  useEffect(() => {
    axios.get('https://octathorn.com/api/project')
      .then(response => {
        const transformedData = response.data.reduce((acc, item) => {
          const projects = item.projects.map(project => ({
            title: project.title,
            images: project.images,
            description: project.description,
            features: project.features,
            bussinues: project.bussinues,
            challenges: project.challenges,
            solutions: project.solutions,
            objectives: project.objectives,
            technologies: project.technologies,
          }));

          if (acc[item.category]) {
            acc[item.category] = [...acc[item.category], ...projects];
          } else {
            acc[item.category] = projects;
          }

          return acc;
        }, {});

        setProjectsData(transformedData);
        setSelectedItem(response.data[0].category);

        // Set the items with the categories from the response
        const uniqueCategories = [...new Set(response.data.map(item => item.category))];
        setItems(uniqueCategories);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  const itemsmb1 = items.length > 3 ? items.slice(0, 3) : items;

  const itemsmb2 = items.length > 3 ? items.slice(3, 6) : items;


  const themeStyles = {
    productList: {
      color: "#696F7C",
      fontSize: { lg: "1rem", md: "1rem", sm: "0.875rem", xs: "0.75rem" },
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "1.695rem",
      fontFamily: "Inter",
      marginLeft: 2,

      overflow: { sm: "hidden", xs: "hidden", md: "hidden", lg: "hidden" },
      textOverflow: {
        xs: "ellipsis",
        sm: "ellipsis",
        md: "ellipsis",
        lg: "ellipsis",
      },
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: { xs: 1, sm: 1, md: 1, lg: 1 },

    },
    card: {
      backgroundColor: "#FFF",
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
        xs: "auto",
      },
      padding: "0px",
      display: "flex",
      flexDirection: "column",
      boxShadow: "none",
      border: "none",
      borderRadius: "0px",
      textAlign: { lg: "left", md: "left", sm: "left", xs: "center" },
      alignItems: "start",
      justifyContent: "start",
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
      color: "#4c5a67",
      fontFamily: "Inter",
      fontSize: { lg: "1rem", md: "1rem", sm: "0.875rem", xs: "0.75rem" },
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "151.5%",
      marginBottom: "3%",
      marginTop: "5%",
      overflow: { sm: "hidden", xs: "hidden", md: "hidden", lg: "hidden" },
      textOverflow: {
        xs: "ellipsis",
        sm: "ellipsis",
        md: "ellipsis",
        lg: "ellipsis",
      },
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: { xs: 2, sm: 3, md: 5, lg: 5 },
      maxHeight: { xs: "5.6em", sm: "6.6em", md: "10.6em", lg: "10.6em" },
    },
    listItemText: {
      color: "#4c5a67",
      fontFamily: "Montserrat",
      fontSize: "1.125rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      justifyContent: "center",
    },
    listContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: { sm: "nowrap", xs: "nowrap", md: "nowrap", lg: "nowrap" },
    },
    learnMore: {
      color: '#4c5a67',
      fontFamily: 'Inter',
      fontSize: { lg: '0.875rem', md: '0.875rem', sm: '0.875rem', xs: '0.75rem' },
      fontStyle: 'italic',
      fontWeight: 400,
      lineHeight: '1.5625rem',
      cursor: 'pointer',
      marginTop: 'auto'
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
      color: "#0E4366",
      background: "transparent",
      fontSize: {
        xs: "0.75rem",
        sm: "0.75",
        md: "0.9rem",
        lg: "1rem",
        xl: "1rem",
      },
      fontWeight: 500,
      fontFamily: "Montserrat",
      lineHeight: { xs: "1.5625rem", sm: "24px", md: "24px", lg: "24px" },
      letterSpacing: "0px",
      textAlign: "center",
      marginLeft: "auto",
      marginTop: { lg: "1rem", md: "0.8rem" },
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
    if (selectedItem === item) {
      // If the clicked item is already selected, do nothing
      return;
    }
    setSelectedItem(item);
    setShowContent(false); // H
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
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };
  const selectedData = projectsData[selectedItem] || {};
  function chunkArray(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      let myChunk = myArray.slice(index, index + chunk_size);
      tempArray.push(myChunk);
    }

    return tempArray;
  }

  return (
    <Box
    // sx={{ marginLeft: { lg: "18%", md: "15%", sm: "0%", xs: "0%" } }}
    >
      <Container
        maxWidth="lg"
        sx={{
          padding: {
            xs: "0.9rem 1.5rem",
            sm: "4.125rem 1.5rem",
            lg: "4.125rem 0rem",
          },
          width: "auto",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            marginBottom: "3rem",
            // fontSize: {
            //   lg: "1.875rem",
            //   md: "1.875rem",
            //   sm: "1.375rem",
            //   xs: "1.125rem",
            // },
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
          Feature Projects
        </Typography>

        {loading ? (
          // <CircularProgress /> 

          <>
            <Skeleton height="60px" animation="wave" />
            <Skeleton height="60px" animation="wave" />
            <Skeleton height="60px" animation="wave" />
            <Skeleton height="60px" animation="wave" />
            <Skeleton height="60px" animation="wave" />
          </>
        ) : (
          <>

            {isXS ? (
              chunkArray(items, 3).map((chunk, chunkIndex) => (
                <Box
                  key={chunkIndex}
                  component="div"
                  sx={{ ...themeStyles.listContainer, flex: "nowrap" }}
                >
                  {chunk.map((item, index) => (
                    <ListItem
                      button
                      key={index}
                      selected={selectedItem === item}
                      onClick={() => handleItemClick(item)}
                      sx={{
                        ...themeStyles.listItemText,
                        fontFamily: "Montserrat",
                        position: "relative",
                        borderBottom:
                          selectedItem === item ? "none" : "1px solid #A7A7A7",
                        color: selectedItem === item ? "#1B2231" : "#A7A7A7",
                        "&:hover": { backgroundColor: "rgba(14, 67, 102, 0.06)" },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: "10%",
                          width: "80%",
                          borderBottom:
                            selectedItem === item ? "3px solid #1B2231" : "none",
                        },
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "center",
                          fontFamily: "Montserrat",
                        }}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              variant="body1"
                              sx={{
                                ...themeStyles.listItemText,
                                fontSize: {
                                  xs: '0.8rem',
                                  sm: '0.8rem',
                                  md: '1rem',
                                  lg: '1rem',
                                },
                                fontWeight: selectedItem === item ? 'bold' : 'none',
                              }}
                            >
                              {item}
                            </Typography>
                          }
                        />
                        {/* {selectedItem === item && (<LineHorizental />)} */}
                      </div>
                    </ListItem>
                  ))}
                </Box>
              ))
            ) : (
              <>
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
                        fontFamily: "Montserrat",
                        position: "relative",
                        borderBottom:
                          selectedItem === item ? "none" : "1px solid #A7A7A7",
                        color: selectedItem === item ? "#1B2231" : "#A7A7A7",
                        "&:hover": { backgroundColor: "rgba(14, 67, 102, 0.06)" },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: "10%",
                          width: "80%",
                          borderBottom:
                            selectedItem === item ? "3px solid #1B2231" : "none",
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
                          primary={
                            <Typography
                              variant="body1"
                              sx={{
                                ...themeStyles.listItemText,
                                fontSize: {
                                  xs: '0.8rem',
                                  sm: '0.8rem',
                                  md: '1rem',
                                  lg: '1rem',
                                },
                                fontWeight: selectedItem === item ? 'bold' : 'none',
                              }}
                            >
                              {item}
                            </Typography>
                          }
                        />
                        {/* {selectedItem === item && (<LineHorizental />)} */}
                      </div>
                    </ListItem>
                  ))}
                </Box>
              </>
            )}

            <Grid container spacing={2} marginTop={"2rem"}>

              {selectedItem && projectsData[selectedItem].map((project, projectIndex) => (
                <Grid item key={projectIndex} xs={12} sm={12} md={12} lg={12}>
                  {isLG && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: projectIndex % 2 === 0 ? "row" : "row-reverse",
                      }}
                    >
                      <Card
                        sx={{
                          ...themeStyles.card,
                          opacity: showContent ? 1 : 0,
                          transform: showContent ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.9)',
                          transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                          // background: `URL('${project.image}') no-repeat center center`,
                        }}
                        style={{ flex: 1, marginRight: '1%', }}
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image={project.images[0]}
                          alt={project.title}
                          sx={{ height: "100%", width: "100%", objectFit: 'fill' }}
                        />
                      </Card>
                      <Card
                        sx={{
                          ...themeStyles.card,
                          opacity: showContent ? 1 : 0,
                          transform: showContent ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.9)',
                          transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                        }}
                        style={{ flex: 1, marginRight: '1%' }}
                      >
                        <CardContent
                          sx={{
                            padding: {
                              //lg: "2rem 4rem 2rem 4rem",
                              lg: "2rem 2rem",
                              md: "2rem 2rem",
                              sm: "2rem 2rem",
                              xs: "1%",
                            },
                            overflow: "hidden",
                          }}
                        >
                          <Typography
                            variant="h3"
                            component="h3"
                            gutterBottom
                            sx={themeStyles.cardTitile}
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="subtitle2" component="p"
                            sx={{ ...themeStyles.cardDescription }}
                          >
                            {project.description}
                          </Typography>
                          <Box
                            sx={{

                              display: "flex",
                              flexDirection: "column",
                              gap: "10px",
                              marginTop: "0%",
                              justifyContent: "left",
                              alignItems: "flex-start",
                            }}
                          >
                            {project?.features?.slice(0, 3)?.map((feature, index) => {
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

                          <Typography variant="body2" sx={{ ...themeStyles.learnMore, textAlign: 'right' }} onClick={() => handleViewMore(project)}> Learn More {">>"}</Typography>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {isXS && (
                    <>
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
                            opacity: showContent ? 1 : 0,
                            transform: showContent ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.9)',
                            transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                            // background: `URL('https://i.postimg.cc/bv274Cc6/Rectangle-95.png') no-repeat center center`,
                          }}
                        >
                          <CardMedia
                            component="img"
                            height="140"
                            image={project.images[0]}
                            alt={project.title}
                            sx={{ height: "100%", width: "100%" }}
                          />
                        </Card>
                      </Box>
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
                        <Card sx={{
                          ...themeStyles.card,
                          opacity: showContent ? 1 : 0,
                          transform: showContent ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.9)',
                          transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                        }}>
                          <CardContent
                            style={{
                              padding: { lg: "9%", md: "8%", sm: "5%", xs: "1%" },
                              overflow: "hidden",
                            }}
                          >
                            <Typography
                              variant="h3"
                              component="h3"
                              sx={themeStyles.cardTitile}
                              gutterBottom
                            >
                              {project.title}
                            </Typography>
                            <Typography
                              sx={{ ...themeStyles.cardDescription }}
                              variant="p"
                              component="p"
                              color="textSecondary"
                            >
                              {project.description}
                            </Typography>
                            <Grid
                              container

                              sx={{
                                marginTop: "3%",
                              }}
                            >
                              {project?.features?.slice(0, 3)?.map((feature, index) => {
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
                            </Grid>

                            <Typography variant="body2" sx={{ ...themeStyles.learnMore, textAlign: 'center' }} onClick={() => handleViewMore(project)}> Learn More {">>"}</Typography>
                          </CardContent>
                        </Card>
                      </Box>
                    </>
                  )}
                </Grid>
              ))}

            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Projects;
