import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { animateScroll as scroll } from 'react-scroll';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ResponsiveCard({ logo, title, description , serviceState}) {
    const navigate = useNavigate();
    const themeStyle = {
        cardTitle: {
            color: '#0E4366',
            fontFamily: 'Poppins',
            fontSize: {lg:'1rem',md:'0.875rem',sm:'0.75rem',xs:'0.625rem'},
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal',
            textTransform: 'uppercase',
        },
        cardDescription: {
            color: '#4c5a67',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: {lg:'0.75rem',md:'0.6875rem',sm:'0.625rem',xs:'0.5625rem'},
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '170.051%', // equivalent to '1.27538rem'
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display:{xs:'none',sm:'unset',md:'unset',lg:'unset'},
            textTransform:"none"
        },
        cardImage: {
            width: '3.25225rem',
            height: '3.09744rem',
        },
        moreButtonText: {
            color: '#0E4366',
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontSize:{lg: '0.75rem',md:'0.6875rem',sm:'0.625rem',xs:'0.5625rem'},
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            textTransform: 'capitalize',
        },

    }
   
    return (
        <Card sx={{ maxWidth: 345, boxShadow: 'none' }} 
        onClick={() => {
            const headingWithoutSpaces =
            serviceState[0].ServiceHeading[0].replace(/\s/g, "").toLowerCase();
            navigate(`/services/${headingWithoutSpaces}`, {
              state: serviceState,
            });
            scroll.scrollToTop({ duration: 2000 });
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
                <img src={logo} alt="logo" style={themeStyle.cardImage} />
            </Box>
            <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography gutterBottom variant="h2" component="div" sx={themeStyle.cardTitle}>
                        {title}
                    </Typography>
                    <Typography variant="subtitile1" color="text.secondary" sx={themeStyle.cardDescription}>
                        {description}
                    </Typography>
                </Box>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2 }}>
                <Button sx={themeStyle.moreButtonText}  endIcon={<ArrowForwardIosIcon  style={{fontSize:'0.875rem',fontWeight:'500'}}/>}>Learn More</Button>
            </Box>
        </Card>
    );
}