import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    // { ring } object destructuring in the function parameter
    const token = useContext(RingContext);
    return (
        <div>
            <h2>Special</h2>
            {/* <p>Ring: {ring}</p> */}
            <p>Ring: {token}</p>
        </div>
    );
};

export default Special;