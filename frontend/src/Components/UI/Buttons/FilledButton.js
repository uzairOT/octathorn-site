import React from 'react';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';

const FilledButton = ({ text, style, onClick }) => {
  const isTabletView = useMediaQuery('(max-width: 768px)');
  const themeStyles = {
    ButtonStyle: {
      width:{xl:'170px',lg:'170px',md:'116px', sm:'116px', xs:'116px'},
      minWidth: {xl:'170px',lg:'170px',md:'116px', sm:'116px', xs:'116px'},
      height: {xl:'49px',lg:'49px',md:'49px', sm:'33px', xs:'33px'},
      color: '##FFFFFF',
      background: '#0E4366',
      fontSize:  {xs:'12px',sm:'12px',md:'12px',lg:'15px',xl:'15px'},
      fontWeight: 400,
      fontFamily:'Montserrat',
      lineHeight: '24px',
      letterSpacing: '0px',
      textAlign: 'center',
      border: '1px solid #0E4366',
      borderRadius: '4px',
      boxShadow: 'none',
      padding: '20px, 36px, 20px, 36px',
      '&:hover': {
        color: '#0E4366',
        background: '#fff',
      },
    },
  };
  return (
    <Button variant="contained" sx={{...themeStyles.ButtonStyle, }} onClick={onClick}>
      {text}
    </Button>
  );
};

export default FilledButton;
