import React from 'react';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';

const RounedButton = ({ text, Style, onClick }) => {
  const isTabletView = useMediaQuery('(max-width: 768px)');
  const themeStyles = {
    ButtonStyle: {
      width: { xl: '170px', lg: '170px', md: '127px', sm: '127px', xs: '100%' },
      minWidth: { xl: '170px', lg: '170px', md: '127px', sm: '127px', xs: '100%' },
      height: { xl: '49px', lg: '49px', md: '49px', sm: '37px', xs: '49px' },
      color: '#172F49',
      background: 'transparent',
      fontSize: { xs: '15px', sm: '12px', md: '12px', lg: '15px', xl: '15px' },
      fontWeight: 400,
      fontFamily: 'Montserrat',
      lineHeight: '24px',
      letterSpacing: '0px',
      textAlign: 'center',
      marginLeft: 'auto',
      border: '1px solid #0E4366',
      textDecoration: 'none',

      boxShadow: 'none',
      padding: '20px, 36px, 20px, 36px',

      '&:hover': {
        color: '#0E4366',
        background: '#fff',
      },
    },
  };
  return (
    <Button variant="contained" sx={{ ...themeStyles.ButtonStyle }} onClick={onClick}  >
      {text}
    </Button>
  );
};

export default RounedButton;
