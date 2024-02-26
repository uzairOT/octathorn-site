import React from "react";
import {
  CardContent,
  Typography,
  Container,
  Box,
  IconButton,
  Grid,
} from "@mui/material";
const Style = {
  containerHeading: {
    color: "#1B2231",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: {
      sm: "2rem",
      xs: "1.25rem",
      md: "2.5rem",
      lg: "2.5rem",
      xl: "2.5rem",
    },
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "131.043%", // or '52.417px'
  },
  cardHeading: {
    color: "#1B2231",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: {lg:"1.25rem",md:"1.25rem",sm:"1.0625rem",xs:"0.9375rem",xl:"1.25rem"},
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "131.043%", // or '26.209px'
    textTransform: "uppercase",
    marginBottom: "5%",
  },
  cardHeading2: {
    color: "#1B2231",
    fontFamily: "Montserrat",
    fontSize: {sm:'1.0625rem',xs:'0.9375rem',md:'1.25rem',lg:'1.25rem',xl:'1.25rem'},
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "131.043%",
    textTransform: "uppercase",
  },
  cardContent: {
    color: "#4c5a67",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: {lg:"1rem",md:"1rem",sm:"0.875rem",xs:"0.75rem",xl:"1rem"},
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "131.043%", // or '20.967px'
    textTransform: "capitalize",

    //width:'28.875rem',
    // marginLeft:'5%',
  },
};

  const testimonials = [
    {
      name: "Lift Services",
      US: "USA",
      content:
        "Perfect execution of the project as always. We were often skeptical about working with developers over distance, but it has actually worked out incredibly well. The team is attentive even during unsocial hours. Could not recommend more!",
    },
    {
      name: "Plus Control",
      US: "USA",
      content:
        "Team Octathorn is very efficient and competent in what the team does, the entire project was completed as requested and was on time. Communication is excellent as well, I look forward to using them again for future projects.",
    },
    {
      name: "Madelec",
      US: "USA",
      content:
        "Octathorn has done an excellent job in a professional manner, only two revisions were necessary to complete the job, exceeding my expectations. I will definitely hire them again in the future. Thank you.",
    },
    {
      name: "Bright Image Corporation",
      US: "USA",
      content:
        "Excellent service! They really worked hard to develop everything according to my specifications. Added a bunch of great ideas.",
    },
    {
      name: "Gric Professional Services",
      US: "USA",
      content:
        "The development of the PCB and firmware was an amazing job. Thank you guys so much for all the work you have done. We are still working and will definitely contact them again in the future",
    },
    {
      name: "James Richard",
      US: "Australia",
      content:
        "Another successful project completed by Team Octathorn! Great communication and assistance throughout. He always gets the job done and provides assistance after the project is completed.",
    },
    {
      name: "Under Dog Solution",
      US: "HONG KONG",
      content:
        "Working with team Octathorn was an amazing experience! He is very professional and highly skilled. Well worth the price, and I am really lucky to have the pleasure of working with him. He is the best!",
    },
    {
      name: "Massive Wifi",
      US: "United States",
      content:
        "This project was a tough one and it required a lot of moving parts with different programmers and different specialties. He was able to assemble a great team who was capable of tackling every aspect. It was on a very tight timeline and they delivered as promised. I can't say enough good things.",
    },
    {
      name: "Jenniferogi",
      US: "United States",
      content:
        "Excellent service! Team Octathorn is very knowledgeable and walked me through the process from start to finish and was sure to thoroughly answer all my questions. We will continue to use his services. 10/10 recommend.",
    },
  ];

  const testimonialsInSentenceCase = testimonials.map((testimonial) => {
    const name = testimonial.name.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
    const us = testimonial.US.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
    const content = testimonial.content.charAt(0).toUpperCase() + testimonial.content.slice(1);
    
    return {
      name,
      US: us,
      content,
    };
  });

const CardCarousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const testimonialsPerPage = 3;

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const getVisibleTestimonials = () => {
    const startIndex = activeIndex * testimonialsPerPage;
    const endIndex = startIndex + testimonialsPerPage;
    return testimonials.slice(startIndex, endIndex);
  };


  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        marginTop: { lg: "1.5rem", md: "1.5rem", sm: "1.5rem", xs: "1.5rem" },
      }}
      
    >
      <Container
        maxWidth=""
        sx={{
          padding: {
            xs: "",
            sm: "",
            md: "4.125rem 5.5rem",
            lg: "4.125rem 5.5rem",
          },
        }}
      >
        <Box textAlign="center" mb={3}>
          <Typography variant="h1" sx={Style.containerHeading}>What People Say?</Typography>
        </Box>
        <Grid container spacing={5} justifyContent="center">
          {getVisibleTestimonials().map((testimonial, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "block" }}
              
            >
              <Box sx={{ textAlign: 'center' }}>
                <CardContent sx={{minHeight: {lg: '200px',md:"200px",sm:"150px",xs:"80px" }}}>
                  <Typography variant="h3" sx={Style.cardHeading}>
                    {testimonial.name}
                    <Box component="span" style={Style.cardHeading2}>
                      {" "}
                      {testimonial.US}
                    </Box>
                  </Typography>

                  <Typography
                  variant="body2"
                    // paddingLeft={{ sm: "0%", md: "1%", lg: "1%", xl: "1%" }}
                    // paddingRight={{
                    //   sm: "0%",
                    //   md: "11%",
                    //   lg: "11%",
                    //   xl: "11%",
                    // }}
                    sx={Style.cardContent}
                  >
                    {testimonial.content}
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={3}>
          {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }).map((_, index) => (
            <IconButton
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                color: index === activeIndex ? "#62C4EA" : "inherit",
                opacity: index === activeIndex ? 1 : 0.5,
                "&:hover": { opacity: 1 },
              }}
            >
              ●
            </IconButton>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CardCarousel;

