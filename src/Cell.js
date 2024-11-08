
import React, { useState } from 'react';

function Cell({ toggleCounter }) {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn);
        toggleCounter(!isOn);
    };

    return (
        <div
            onClick={handleClick}
            style={{
                width: '100px',
                height: '100px',
                border: '1px solid grey',
                backgroundColor: isOn ? 'black' : 'white',
                display: 'inline-block',
            }}
        ></div>
    );
}

export default Cell;
