
import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import '../Style/Home.css'

import Clock from '../components/UI/Clock';
import heroImg from '../assets/images/hero-img.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';
import counterImg from '../assets/images/counter-timer-img.png'

import useGetData from '../custome-hooks/useGetData';



const Home = () => {

    const { data: products, loading } = useGetData('products');




    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);


    const year = new Date().getFullYear();

    useEffect(() => {
        const filteredTrendingProducts = products.filter(item => item.category === 'chair');

        const filteredBestSalesProducts = products.filter(item => item.category === 'sofa');

        const filteredMobileProducts = products.filter(item => item.category === 'mobile');

        const filteredWirelessProducts = products.filter(item => item.category === 'wireless');

        const filteredPopularProducts = products.filter(item => item.category === 'watch');


        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);
        setMobileProducts(filteredMobileProducts);
        setWirelessProducts(filteredWirelessProducts);
        setPopularProducts(filteredPopularProducts);
    }, [products]);


    return (
        <Helmet title={'Home'}>
            <section className="hero-section">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero-content">
                                <p className="hero-subtilte">Trending product in {year}</p>
                                <h2>Make Your Interior More Minimalistic & Modern </h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Quarerat nulla repallat quo eaque alias corporois sunt,
                                    facilis nesciunt rem fugit!
                                </p>

                                <motion.button whileTap={{ scale: 1.2 }} className="buy-btn1">
                                    <Link to='/shop'>SHOP NOW</Link>
                                </motion.button>

                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="hero_img">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Services />
            <section className="trending-products">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className='section-title'>Trending Products</h2>
                        </Col>

                        {
                            loading ? <h5>Loading.....</h5> :
                                <ProductList data={trendingProducts} />

                        }
                    </Row>
                </Container>
            </section>

            <section className="best_sales">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className='section-title'>Best Sales</h2>
                        </Col>
                        {
                            loading ? <h5>Loading.....</h5> :
                                <ProductList data={bestSalesProducts} />

                        }
                    </Row>

                </Container>
            </section>

            <section className="timer_count">
                <Container>
                    <Row>
                        <Col lg='6' md='12' className='count_down-col'>
                            <div className="clock_top-content">
                                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                                <h3 className='text-white fs-5 mb-3'>Quantity Armchair </h3>
                            </div>
                            <Clock />
                            <motion.button whileTap={{ scale: 1.2 }} className="buy_btn1 store_btn">
                                <Link to='/shop'>Visit Store</Link>
                            </motion.button>
                        </Col>

                        <Col lg='6' md='12' className='text-end counter_img'>
                            <img src={counterImg} alt="" className="counter-img" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="new_arrivals">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h2 className='section-title'>New Arrivals</h2>
                        </Col>

                        {
                            loading ? <h5>Loading.....</h5> :
                                <ProductList data={mobileProducts} />

                        }
                        {
                            loading ? <h5>Loading.....</h5> :
                                <ProductList data={wirelessProducts} />

                        }

                    </Row>
                </Container>
            </section>

            <section className="popular_category">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h2 className='section-title'>Popular in Category</h2>
                        </Col>

                        {
                            loading ? <h5>Loading.....</h5> :
                                <ProductList data={popularProducts} />

                        }
                    </Row>
                </Container>
            </section>

        </Helmet>
    )
}

export default Home