import React from 'react';
import spinner from '../../img/spinner.gif';

const Spinner = () => {
    return (
        <section className="center">
            <img src={spinner} alt="Loading" style={{ width: '200px' }} />
        </section>
    );
};

export default Spinner;
