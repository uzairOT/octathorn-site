import React, { useState } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [isWhiteTheme, setIsWhiteTheme] = useState(true);
/*
    const toggleTheme = () => {
        setIsWhiteTheme(!isWhiteTheme);
    };
*/
   // const theme = isWhiteTheme ? '#f2f2f2' : '#0E4366';
   // const textColor = isWhiteTheme ? '#0E4366' : '#f2f2f2';
   const backgroundcolor = '#F6F6F6';
   const textColor='#0E4366';
   const bodyTextColor='#696F7C';
   const HeadingColorBlue='#0E4366';

    const contextValue = {
        theme,
        textColor,
        isWhiteTheme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
