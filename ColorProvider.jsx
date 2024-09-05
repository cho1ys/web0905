import React, { createContext, useEffect, useState } from 'react';
import ColorBox from './ColorBox';
import { Mycolor } from './colorContext';

const ColorProvider = () => {

    const color = prompt('원하는 색상을 입력하세요')
    return (
        <div>
            <Mycolor.Provider value = {color}>
                <ColorBox/>
            </Mycolor.Provider>
        </div>
    );
};

export default ColorProvider;