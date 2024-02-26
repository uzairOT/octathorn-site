import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import "../UI/Cards/StatsCard"

function DProcess() {
    const themeStyle = {
        pageTitle: {
            color: "#1B2231",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: { lg: "2.5rem", md: "2rem", sm: "1.5rem", xs: "1.5rem" },
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",

            marginTop: { lg: "5rem", md: "5rem", sm: "4rem", xs: "1.5rem" },
            marginBottom: "2rem",
        },
        number: {
            color: "#319AC7",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: { lg: "5.125rem", md: "4.125rem", sm: "3.125rem", xs: "3.125rem" },
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            textTransform: "uppercase"
        },
        title: {
            color: "#757575",
            textAlign: "center",
            fontFamily: "Montserrat",
            fontSize: { lg: "1.1875rem", md: "1.1875rem", sm: "1.1875rem", xs: "1.1875rem" },
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            marginTop: "1.5rem",
        },
        description: {
            color: "#4c5a67",
            fontFamily: "Inter",
            fontSize: { lg: "1rem", md: "1rem", sm: "1rem", xs: "0.9rem" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            textAlign: "left",
            paddingLeft: "5%",
            paddingRight: { lg: "32%", md: "30%", sm: "5%", xs: "8%" },

        },
        dividerStyle: {
            width: '5.8rem', height: '0rem', border: '2.5px solid #0E4366',
        }
    }

    const gridItems = [
        {
            number: "01",
            title: "Discover",
            description: "Share your challenges and requirements with Octathorn."
        },
        {
            number: "02",
            title: "Define",
            description: " Defining Solutions and Deliverables for Your Challenges."
        },
        {
            number: "03",
            title: "Design",
            description: "We specialize in designing tailored solutions for your unique challenges."
        },
        {
            number: "04",
            title: "Develop",
            description: "We takes charge of solution development, ensuring a comprehensive end-to-end result."
        },
        {
            number: "05",
            title: "Deploy",
            description: "We are committed to deploying the solution at your site and offering complete installation services for a seamless experience."
        },
        {
            number: "06",
            title: "Deliver",
            description: "We ensure that all solution files are meticulously delivered to you for your future reference and use."
        }
    ];

    return (
        <Container maxWidth="lg">
            <Typography variant="h1" sx={themeStyle.pageTitle}>Our 6-D Process</Typography>
            <Grid container spacing={5} ml={{ lg: 10, md: 2, sm: '', xs: '' }}>
                {gridItems.map((item, index) => (
                    <Grid item xs={12} sm={6} display={'flex'} flexDirection={'row'} gap={'1rem'} key={index}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <Typography variant="h2" component="h2" className="txt-shine" sx={{ ...themeStyle.number }}>{item.number}</Typography>
                            <Divider style={themeStyle.dividerStyle} />
                            <Typography variant="h2" component="h2" sx={{ ...themeStyle.title }}>{item.title}</Typography>
                        </Box>
                        <Typography variant="subtitle2" component="p" sx={{ ...themeStyle.description, mt: 5, }}>{item.description}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
export default DProcess;