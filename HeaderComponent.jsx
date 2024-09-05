import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';
import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers';

const HeaderComponent = () => {
    const {darkMode, setDarkMode} = useContext(ThemeContext)
    function toggleDark(){
        setDarkMode(!darkMode)
    }
    const theme = {
        backgroundColor : darkMode ? 'black' : 'white',
        color : darkMode ? 'white' : 'black',
    }
    return (
        <div className='header' style={theme}>
            헤더
            {
                darkMode ? (
                <button className='toggleBtn' onClick={toggleDark}>😉</button>
                ):(
                <button className='toggleBtn' onClick={toggleDark}>😎</button>
            )
            }
        </div>
    );
};

export default HeaderComponent;