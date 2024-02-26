import { Grid, Card, CardMedia, Box, Typography, Container } from '@mui/material';
import { ReactComponent as TickIcon } from "../../Assests/home/svgs/tickIcon.svg";

function ProjectDetail({ project }) {
  console.log("project deails compoent", project);
  const themeStyles = {
    productList: {
      color: "#696F7C",
      fontSize: { lg: "1rem", md: "1rem", sm: "0.875rem", xs: "0.75rem" },
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "1.695rem",
      fontFamily: "Poppins",
      marginLeft: 4,
    },
    projectTitle: {
      fontSize: { lg: "2.5rem", md: "2.5rem", sm: "2.25rem", xs: "1.75rem" },
      color: "#1B2231",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "27px",
      marginTop: "10px",
      lineHeight: "1.96563rem",

      fontFamily: "Montserrat",
    },
    projectDescription: {
      color: "#545454",
      textAlign: "center",
      fontFamily: "Montserrat",
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "1.5625rem",
      letterSpacing: "0.0125rem",


    },
    card: {
      boxShadow: "none",
      borderRadius: "0px",
    },
  };
  return (
    <Box >
      <Grid container spacing={2}>
        {/* First image */}
        <Grid item xs={12} sm={6}>
          <Card sx={themeStyles.card}>
            <CardMedia component="img" sx={{ height: { sm: 426, md: 526 } }} src={project.images[0]} />
          </Card>
        </Grid>

        {/* Rest of the images */}
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            {project.images.slice(1).map((image, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={themeStyles.card}>
                  <CardMedia component="img" sx={{ height: { sm: 204, md: 254 } }} src={image} />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Box textAlign={'center'} alignContent={'center'} alignItems={'center'} mt={10}>
        <Typography variant='h1' sx={themeStyles.projectTitle}>
          {project.title}
        </Typography>
        <Typography variant='body1' sx={themeStyles.projectDescription} mt={5}>
          {project.description}
        </Typography>
      </Box>

      <Container maxWidth="md" sx={{ marginTop: "4rem" }}>
        <Typography variant='h1' sx={themeStyles.projectTitle}>
          Feature List
        </Typography>
        <Grid container spacing={3} mt={5} >
          {project.features.map((feature, index) => (
            <Grid item xs={6} sm={6} md={6} key={index} justifyContent={'center'} >
              <Box sx={{ display: "flex", flexDirection: "row", }}>
                <TickIcon />
                <Typography sx={themeStyles.productList}>
                  {feature}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ProjectDetail;


