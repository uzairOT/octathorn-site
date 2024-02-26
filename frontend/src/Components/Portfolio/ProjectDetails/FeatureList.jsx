import { Grid, Typography, Card, CardContent, Container } from "@mui/material";

const FeatureList = ({project}) => {
    // const cardData = [
    //     { heading: "Unlimited Power", description: "Unlimited Power Say goodbye to power interruptions. PowerHub Pro is designed to provide a continuous and reliable power source by utilizing multiple batteries. This ensures that your devices stay powered, even when some batteries are being charged." },
    //     { heading: "Card 2 Heading", description: "Card 2 Description" },
    //     { heading: "Card 3 Heading", description: "Card 3 Description" },
    //     { heading: "Card 4 Heading", description: "Card 4 Description" },
    //     { heading: "Card 5 Heading", description: "Card 5 Description" },
    //     { heading: "Card 6 Heading", description: "Card 6 Description" },
    // ];
    const cardData = project.features.map(feature => {
        const index = feature.indexOf(':');
        return {
          heading: feature.substring(0, index).trim(),
          description: feature.substring(index + 1).trim()
        };
      });

    return (
        <Container maxWidth="xl">
            <Typography variant="h4" sx={{...themeStyles.pageHeading, textAlign: "center",mb:'5%'}}>Feature List</Typography>

            <Grid container spacing={2} justifyContent="center">
                {cardData.map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card sx={themeStyles.cardStyle}>
                            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Typography variant="h5" sx={{...themeStyles.cardHeading}}>{item.heading}</Typography>
                                <Typography variant="body1" sx={{...themeStyles.cardDescription}}>{item.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
};
export default FeatureList;


const themeStyles = {
    pageHeading:{
        color: "#1B2231",
        fontFamily: "Montserrat",
        fontSize: {lg:"2.5rem", md:"2rem", sm:"1.5rem", xs:"1.5rem"},
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "normal"
    },
    cardStyle:{
        width: "100%", // Adjusted width to be responsive
        height: "14.9375rem",
        flexShrink: 0,
        borderRadius: "0.6875rem",
        background: "#FFF",
        boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.04)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    cardHeading:{
        color: "#3A3A3A",
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: {lg:"1.125rem", md:"1rem", sm:"1rem", xs:"1rem"},
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "169.5%"
    },
    cardDescription: {
        color: "#696F7C",
        fontFamily: "Inter",
        fontSize:{lg:"1rem", md:"0.875rem", sm:"0.875rem", xs:"0.875rem"},
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "169.5%"
    }
}