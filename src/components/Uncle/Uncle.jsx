import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p>Granpa Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Send Money</button>
            <section className='flex'>
                <Cousin>Joe</Cousin>
                <Cousin>Fiona</Cousin>
            </section>
        </div>
    );
};

export default Uncle;