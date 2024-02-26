import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import Lcd from "../../../Assests/Portfolio/projectDetails/lcd.png"
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";

const ProjectOverview = ({ project }) => {

    const [selectedItem, setSelectedItem] = useState('Business Needs');

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const data = [

        {
            item: 'Business Needs',
            points: JSON.parse(project?.bussinues[0]),
            images: project.images
        },

        {
            item: 'Challenges',
            points: JSON.parse(project?.challenges[0])
        },
        {
            item: 'Proposed Solution',
            points: JSON.parse(project?.solutions[0])
        },
        {
            item: 'Objectives Achieved',
            points: JSON.parse(project?.objectives[0])
        },
        {
            item: 'Technologies Used',
            points: JSON.parse(project?.technologies[0])
        }
    ];

    return (
        <Container maxWidth="xl" sx={{ textAlign: 'left', }} >
            <Typography variant="h1" sx={{ ...themeStyles.pageHeading, textAlign: "center", mb: 8, mt: 8 }}>Project Overview</Typography>

            <Grid container spacing={5}>
                <Grid item xs={12} md={6} lg={7}>
                    <Card sx={{ height: '100%', boxShadow: 'none', borderRadius: '0px', background: 'transparent' }}>
                        <CardContent >
                            <div style={{ display: 'flex', flexDirection: 'row', cursor: 'pointer' }}>
                                {data?.map((itemData) => (
                                    <Typography key={itemData.item} onClick={() => handleItemClick(itemData.item)} sx={{ padding: '0rem', color: '#1B2231', fontSize: { lg: '1rem', sm: '0.8rem', xs: '0.75rem' }, marginRight: '1rem', fontWeight: selectedItem === itemData.item ? 'bold' : 'normal', borderBottom: selectedItem === itemData.item ? { lg: '4px solid #0E4366', sm: '2px solid #0E4366', xs: '1px solid #0E4366' } : 'none' }}>
                                        {itemData.item}
                                    </Typography>
                                ))}
                            </div>
                            <ul style={{ textAlign: 'left', marginLeft: '-0.8rem', }}>
                                {data?.map((itemData) => (
                                    selectedItem === itemData.item && itemData.points.map((point) => (

                                        <li key={point} style={{ listStyle: 'none', fontSize: '0.9rem', display: "flex", alignItems: "center", }}>
                                            <span style={{ color: '#0E4366', fontSize: '2rem', marginRight: '0.5rem', }}>&#8226;</span>
                                            {point}
                                        </li>
                                    ))
                                ))}
                            </ul>
                            <div
                                style={{ textAlign: 'left' }}
                            >
                                <Link to='/contact' style={{ textDecoration: 'none' }}>
                                    <Button variant='contained' sx={{ mt: 3, fontStyle: 'bold', fontSize: '0.87rem', background: '#0E4366' }}
                                    >Discuss your project</Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Card sx={{ ...themeStyles.mediaCard, padding: '1.5rem' }} >
                        <Carousel
                            showThumbs={false}
                            showStatus={false}
                            infiniteLoop={true}
                            autoPlay={true}
                            interval={2000}
                            showArrows={false}
                            showIndicators={false}
                        >

                            {project.images?.map((image, index) => (
                                <div key={index} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={image} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} alt={`IMAGE ${index}`} />
                                </div>
                            ))}
                        </Carousel>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
};

export default ProjectOverview;

const themeStyles = {
    mediaCard: {
        boxShadow: 'none',
        borderRadius: '0px',
        backgroundBlendMode: 'darken',
        background: 'transparent',
        width: '38.25rem',
        height: '30.75rem',
        flexShrink: 0,
        backgroundImage: `url(${Lcd})`,
        backgroundSize: 'cover',
        '@media (max-width: 1600px) and (min-width: 1201px)': {
            width: '90%', height: '100%'
        },
        '@media (max-width: 1200px) and (min-width: 901px)': {
            width: '100%', height: 'auto'
        },
        '@media (max-width: 900px) and (min-width: 801px)': {
            width: '100%', height: 'auto'
        },
        '@media (max-width: 800px) and (min-width: 601px)': {
            width: '100%', height: 'auto'
        },
        '@media (max-width: 600px)': {
            width: '100%', height: 'auto'
        }
    },
    itemStyle: {
        marginRight: '1rem',
    },
    pageHeading: {
        color: "#1B2231",
        fontFamily: "Montserrat",
        fontSize: { lg: "2.5rem", md: "2rem", sm: "1.5rem", xs: "1.5rem" },
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "normal"
    },
}







{/* <Grid item xs={12} md={6}>
<Card sx={{ ...themeStyles.mediaCard, padding: '1rem' }}>
    <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showArrows={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
                return (
                    <li
                        style={{ background: 'rgba(0, 0, 0, 0.8)', width: '8px', height: '8px', borderRadius: '50%', display: 'inline-block', margin: '0 4px' }}
                        aria-label={`Selected: ${label} ${index + 1}`}
                        title={`Selected: ${label} ${index + 1}`}
                    />
                );
            }
            return (
                <li
                    style={{ background: 'rgba(0, 0, 0, 0.3)', width: '8px', height: '8px', borderRadius: '50%', display: 'inline-block', margin: '0 4px' }}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    title={`${label} ${index + 1}`}
                    aria-label={`${label} ${index + 1}`}
                />
            );
        }}
    >
        {data?.map((itemData) => (
            selectedItem === itemData.item && itemData.images?.map((image, index) => (
                <div key={index} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={image} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} alt={`IMAGE ${index}`} />
                </div>
            ))
        ))}
    </Carousel>
</Card>
</Grid> */}