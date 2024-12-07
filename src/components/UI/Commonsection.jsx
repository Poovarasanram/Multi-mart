import React from 'react';
import { Container } from 'reactstrap';
import '../../Style/section.css';

const Commonsection = ({ title }) => {

    return (
        <section className="common-section">
            <Container className='text-center'>
                <h1>{title}</h1>
            </Container>
        </section>
    )
}

export default Commonsection;
