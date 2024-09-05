import React, { useContext } from 'react';
import colorContext, { Mycolor } from './colorContext'
const ColorBox = () => {
    const color = useContext(Mycolor)
    const style = {
        backgroundColor : color,
        height : '100vh'
    }
    return (
        <div style={style}>
            
        </div>
    );
};

export default ColorBox;