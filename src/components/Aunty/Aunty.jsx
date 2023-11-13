import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ ring }) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousin>Robert</Cousin>
                <Cousin hasFriend={true} ring={ring}>Rose</Cousin>
            </section>
        </div>
    );
};

export default Aunty;