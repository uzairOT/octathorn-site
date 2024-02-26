import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';
import { animateScroll as scroll } from "react-scroll";


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
    Grid,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ReactComponent as VerticalLine } from "../../Assests/home/svgs/VerticleLineIndustry.svg";
import { ReactComponent as TickIcon } from "../../Assests/home/svgs/tickIcon.svg";
import RounedButton from "../UI/Buttons/RounedButton";

import "./IndustryBar.css";
//accordian imports
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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


function PortfolioProjects() {
    let { heading } = useParams();
    console.log("heading", heading);
    const [loading, setLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [projectsData, setProjectsData] = useState({});
    const [items, setItems] = useState([]); // Initialize the items
    const navigate = useNavigate();
    const handleViewMore = (project) => {
        const titleWithoutSpaces = project.title.replace(/\s/g, '').toLowerCase();
        navigate(`/project/${titleWithoutSpaces}`, { state: { project } });
        scroll.scrollToTop({ duration: 2000 });

    };
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
                setProjectsData(transformedData);

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
            fontFamily: "Inter",
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
        learnMore: {
            color: '#4c5a67',
            fontFamily: 'Inter',
            fontSize: { lg: '0.875rem', md: '0.875rem', sm: '0.875rem', xs: '0.75rem' },
            fontStyle: 'italic',
            fontWeight: 400,
            lineHeight: '1.5625rem',
            cursor: 'pointer',
        },

        mediaCard: {
            // width: {
            //     lg: "29.4375rem",
            //     md: "30.4375rem",
            //     sm: "9.4375rem",
            //     xs: "18.125rem",
            // },
            //  height: { lg: "24.975rem", md: "20.375rem", sm: "13rem", xs: "7.125rem" },

            boxShadow: "none",
            border: "none",
        },
        contentCard: {
            display: "flex",
            justifyContent: "left",
            textAlign: "left",
            backgroundColor: "#FFF",
            //minWidth: "90%",
            // width: {
            //     lg: "39.4375rem",
            //     md: "30.4375rem",
            //     sm: "18.4375rem",
            //     xs: "18.125rem",
            // },
            // height: { lg: "24.975rem", md: "20.375rem", sm: "15rem", xs: "7.125rem" },
            // padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "none",
            border: "none",

        },

        cardtitle: {
            fontSize: { lg: "1.5rem", md: "1rem", sm: "0.8rem", xs: "0.8rem" },
            color: "#1B2231",
            fontWeight: 600,
            fontStyle: "normal",
            lineHeight: "27px",
            marginTop: "10px",
            lineHeight: "1.96563rem",
            textTransform: "capitalize",
            // width: {
            //     lg: "32rem",
            //     md: "25.875rem",
            //     sm: "19.125rem",
            //     xs: "16.375rem",
            // },
            fontFamily: "Montserrat",
        },
        carddescription: {
            fontSize: { lg: "1rem", md: "0.8rem", sm: "0.75rem", xs: "0.75rem" },
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: "1.695rem",
            color: "#4c5a67",
            // width: {
            //     lg: "32.0625rem",
            //     md: "25.0625rem",
            //     sm: "21.3125rem",
            //     xs: "13.75rem",
            // },
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
            WebkitLineClamp: { xs: 4, sm: 4, md: 5, lg: 5 },
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
            //  maxHeight: { sm: "6.6em", xs: "6.6em", md: "10.6em", lg: "10.6em" },
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
    const selectedData = projectsData[selectedItem] || {};


    return (
        <Box
            sx={{
                // marginLeft: { lg: "-3rem", md: "-3rem", sm: "1.5rem", xs: "0" },
                // Contain: "content",
                // border: "2px solid blue",
                // display: "flex",
                // flexDirection: "column",
                // alignItems: "center",
                //  justifyContent: "center",
            }}
        >
            {/* <Box width="100%" display="flex" flexDirection="column" alignItems="center" >
    <Container maxWidth="false" sx={{ padding: {xs:'0.9rem 1.5rem',sm: '4.125rem 1.5rem',lg:'4.125rem 4.5rem'} }}> */}

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
                    {!isMobileTabletView ? (
                        <Box
                            sx={{
                                display: "flex",
                                // marginRight: { lg: "0%", md: "-5%", sm: "-9%", xs: "0%" },
                                marginTop: "3%",
                                // border: "2px solid red ",
                                // width: "auto",
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

                            <Grid container spacing={3} ml={'auto'}>
                                {selectedItem && projectsData[selectedItem].map((project, projectIndex) => (
                                    <>
                                        <Grid item key={projectIndex} xs={12} sm={12} md={12} lg={5}  >

                                            <Card
                                                sx={{
                                                    ...themeStyles.mediaCard,
                                                    marginLeft: { lg: "2.8%", md: "0rem", sm: "0rem", xs: "" },
                                                    mt: '2%',

                                                }}
                                            >
                                                <Carousel
                                                    showThumbs={false}
                                                    showStatus={false}
                                                    infiniteLoop={true}
                                                    autoPlay={true}
                                                    interval={3000}
                                                    showArrows={false}
                                                //width: '100%', height: '100%', objectFit: 'cover' 

                                                >
                                                    {project.images?.map((image, index) => (
                                                        <div key={index} style={{ width: '100%', height: '300px' }}>
                                                            <img src={image} style={{ width: '100%', height: '100%', objectFit: 'scale-down' }} alt={`IMAGE ${index}`} />
                                                        </div>
                                                    ))}
                                                </Carousel>
                                            </Card>

                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={6} mt={1}>

                                            <Card sx={{ ...themeStyles.contentCard, }}>
                                                <CardContent>
                                                    <Typography component="h2" sx={themeStyles.cardtitle}>
                                                        {project.title}
                                                    </Typography>
                                                    <Typography component="p" sx={themeStyles.carddescription}>
                                                        {project.description}
                                                    </Typography>

                                                    {/* Products LISTS*/}

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
                                                        {project?.features?.slice(0, 3)?.map((feature, index) => {
                                                            const trimmedFeature = feature.split(':')[0].trim();
                                                            return (
                                                                <Box key={index} sx={{ display: "flex", flexDirection: "row" }}>
                                                                    <TickIcon />
                                                                    <Typography sx={themeStyles.productList}>
                                                                        {trimmedFeature}
                                                                    </Typography>
                                                                </Box>
                                                            );
                                                        })}
                                                    </Box>
                                                    <Box
                                                        sx={{
                                                            marginLeft: "0%",
                                                            mt: "3%",
                                                        }}
                                                    >
                                                        {/* <RounedButton text={"View More"}  /> */}
                                                        <Typography sx={{ ...themeStyles.learnMore, textAlign: 'right' }} onClick={() => handleViewMore(project)}> Learn More {">>"}</Typography>
                                                    </Box>
                                                </CardContent>
                                            </Card>

                                        </Grid>
                                    </>
                                ))}
                            </Grid>
                        </Box>
                    ) : (
                        // </Box>
                        <Box mt={5} >
                            {Object.entries(projectsData).map(([industry, projects], index) => (
                                <Accordion
                                    key={index}
                                    style={{
                                        minHeight: "4.375rem",
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{ color: "#0E4366" }} />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography sx={themeStyles.accordioHeading}>
                                            {industry}
                                        </Typography>
                                    </AccordionSummary>
                                    {projects.map((data, projectIndex) => (
                                        <AccordionDetails key={projectIndex}>
                                            <Typography
                                                sx={{ ...themeStyles.cardtitle, textAlign: "left" }}
                                            >
                                                {data.title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    ...themeStyles.accordionContentDescription,
                                                    textAlign: "left",
                                                }}
                                            >
                                                {data.description}
                                            </Typography>
                                            {/* Products LISTS*/}
                                            <Box
                                                sx={{
                                                    // display: "grid",
                                                    // gridTemplateColumns: "repeat(2, 1fr)",
                                                    display: "flex",
                                                    flexDirection: "column",

                                                    marginTop: "10%",
                                                }}
                                            >
                                                {data?.features?.slice(0, 3)?.map((feature, index) => {
                                                    const trimmedFeature = feature.split(':')[0].trim();
                                                    return (
                                                        <Box key={index} sx={{ display: "flex", flexDirection: "row" }}>
                                                            <TickIcon />
                                                            <Typography sx={themeStyles.productList}>
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


                                                    <Carousel
                                                        showThumbs={false}
                                                        showStatus={false}
                                                        infiniteLoop={true}
                                                        autoPlay={true}
                                                        interval={3000}
                                                        showArrows={false}

                                                    >
                                                        {data.images?.map((image, index) => (
                                                            <div key={index} >
                                                                <img src={image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={`IMAGE ${index}`} />
                                                            </div>
                                                        ))}
                                                    </Carousel>
                                                </Card>
                                            </Box>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                            ))}
                        </Box>
                    )}
                </>
            )}

        </Box>
    );
}

export default PortfolioProjects;
