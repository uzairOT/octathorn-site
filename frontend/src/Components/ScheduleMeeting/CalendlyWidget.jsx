import React, { useEffect } from 'react';
import { IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const CalendlyWidget = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <>
      <div>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/octathorn"
          style={{ minWidth: '320px', height: '500px', marginTop: '2rem', }}
        />
      </div>
      {/* <IconButton onClick={handleGoBack} sx={{ color: '#0E4366', textAlign: 'left', fontSize: '3rem', width: '4rem', height: '4rem', marginBottom: '2rem', }}>
        <ArrowBack />
      </IconButton> */}
    </>
  );
};

export default CalendlyWidget;