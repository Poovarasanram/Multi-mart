import React from 'react';
import '../Footer/footer.css';

import { Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const Footer = () => {


    const year = new Date().getFullYear

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='4' className='mb-4' md='6'>
                        <div className="logo">
                            <div>
                                <h1 className='text-white'>Multimart</h1>
                            </div>
                        </div>
                        <p className='footer_text mt-4'>
                            Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Quia facilis quam totam dolore a eaque quo
                            aliquid inventore nam libero?
                        </p>
                    </Col>

                    <Col lg='3' md='3' className='mb-4' >
                        <div className="footer_quick_links">
                            <h4 className="quick_links_title">Top Categories</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Mobile Phones</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Modern Sofa</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Arm Chair</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Smart Watches</Link>
                                </ListGroupItem>

                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='2' md='3' className='mb-4'>
                        <div className="footer_quick_links">
                            <h4 className="quick_links_title">Useful Links</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/shop'>Shop</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/cart'>Cart</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/login'>Login</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Privacy Policy</Link>
                                </ListGroupItem>

                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='3' md='4'>
                        <div className="footer_quick_links">
                            <h4 className="quick_links_title">Contact</h4>
                            <ListGroup className='footer-contact'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center'>
                                    <span><i className="ri-map-pin-line"></i></span>
                                    <p>123 ZindaBazar, Sylhet, Bangladesh</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center'>
                                    <span><i className="ri-phone-line"></i></span>
                                    <p>+0881234567890</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center'>
                                    <span><i className="ri-mail-line"></i></span>
                                    <p>admin123@gmail.com</p>
                                </ListGroupItem>

                                {/* <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Smart Watches</Link>
                                </ListGroupItem> */}

                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='12'>
                        <p className="footer_copyright">Copyright {year} developed
                            by Admin. All rights reserved.   </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer