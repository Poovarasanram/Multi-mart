import React from 'react';
import '../Style/checkout.css';
import { Container, Col, Row, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import Commonsection from '../components/UI/Commonsection';
import { useSelector } from 'react-redux';

const Checkout = () => {

    const totalQty = useSelector(state => state.cart.totalQuantity); // Corrected spelling of totalQuantity

    const totalAmount = useSelector(state => state.cart.totalAmount)

    return (
        <Helmet title='checkout'>
            <Commonsection title='checkout' />
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <h6 className='fs-4 fw-bold'>Billing Information</h6>
                            <Form className='billing_form'>
                                <FormGroup className="form_group mt-3">
                                    <input type="text" placeholder='Enter your name' />
                                </FormGroup>

                                <FormGroup className="form_group">
                                    <input type="email" placeholder='Enter your email' />
                                </FormGroup>

                                <FormGroup className="form_group">
                                    <input type="number" placeholder='Phone number' />
                                </FormGroup>

                                <FormGroup className="form_group">
                                    <input type="text" placeholder='Street address' />
                                </FormGroup>

                                <FormGroup className="form_group">
                                    <input type="text" placeholder='City' />
                                </FormGroup>

                                <FormGroup className="form_group">
                                    <input type="text" placeholder='Postal code' />
                                </FormGroup>

                                <FormGroup className="form_group">
                                    <input type="text" placeholder='Country' />
                                </FormGroup>
                            </Form>
                        </Col>

                        <Col lg='4'>
                            <div className="checkout_card">
                                <h6>Total Qty: <span>{totalQty} items</span></h6>

                                <h6>Subtotal: <span>{totalAmount}</span></h6>
                                <h6>Shipping:
                                    <span>$0</span>
                                </h6>
                                <h4>Total Cost: <span>{totalAmount}</span></h4>
                                <button className='buy_btn1 auth_btn w-100 mt-5'>Place an order</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>

    )
}

export default Checkout