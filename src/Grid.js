
import React, { useState } from 'react';
import Cell from './Cell';

function Grid() {
    const [count, setCount] = useState(0);

    const toggleCounter = (isTurningOn) => {
        setCount(prevCount => prevCount + (isTurningOn ? 1 : -1));
    };

    return (
        <div>
            <h2>Count: {count}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 100px)', gap: '10px' }}>
                <Cell toggleCounter={toggleCounter} />
                <Cell toggleCounter={toggleCounter} />
                <Cell toggleCounter={toggleCounter} />
                <Cell toggleCounter={toggleCounter} />
            </div>
        </div>
    );
}

export default Grid;
