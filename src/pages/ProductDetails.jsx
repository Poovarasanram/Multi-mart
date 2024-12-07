import React, { useState, useRef, useEffect } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
// import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet';
import Commonsection from '../components/UI/Commonsection';
import ProductList from '../components/UI/ProductList';

import '../pages/productdetails.css';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';

import { db } from '../firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import useGetData from '../custome-hooks/useGetData';

const ProductDetails = () => {
    const { data: products } = useGetData('products');

    const [product, setProduct] = useState(null); // Initialize as null to check for loading state

    const [tab, setTab] = useState('desc');
    const reviewUser = useRef('');
    const reviewMsg = useRef('');
    const dispatch = useDispatch();

    const [rating, setRating] = useState(null);
    const { id } = useParams();
    const imageRef = useRef(null); // Reference for the product image

    const docRef = doc(db, 'products', id);

    useEffect(() => {
        const getProduct = async () => {
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setProduct(docSnap.data());
            } else {
                console.log('no product!');
            }
        };

        getProduct();
    }, [docRef]);

    const {
        imgUrl,
        productName,
        price,
        // avgRating,
        // reviews,
        description,
        shortDesc,
        category,
    } = product || {};

    const relatedProducts = products.filter((item) => item.category === category);

    const submitHandler = (e) => {
        e.preventDefault();

        const reviewUserName = reviewUser.current.value;
        const reviewUserMsg = reviewMsg.current.value;

        const reviewObj = {
            userName: reviewUserName,
            text: reviewUserMsg,
            rating,
        };

        console.log(reviewObj);
        toast.success('Review submitted');
    };

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id,
                image: imgUrl,
                productName,
                price,
            })
        );

        toast.success('Product added successfully');
    };



    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <Helmet title={productName}> {/* Ensure all metadata is enclosed within Helmet */}
            <Commonsection title={productName} /> {/* Use productName as the section title */}

            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img src={imgUrl} alt={productName} ref={imageRef} /> {/* Alt text should describe the image */}
                        </Col>

                        <Col lg='6'>
                            <div className="product-details">
                                <h2>{productName}</h2> {/* Use productName variable */}
                                <div className='product-rating d-flex align-items-center gap-5 mb-4'>
                                    <div>
                                        <span>
                                            <i className="ri-star-s-fill"></i> {/* Use className instead of class */}
                                        </span>
                                        <span>
                                            <i className="ri-star-s-fill"></i>
                                        </span>
                                        <span>
                                            <i className="ri-star-s-fill"></i>
                                        </span>
                                        <span>
                                            <i className="ri-star-s-fill"></i>
                                        </span>
                                        <span>
                                            <i className="ri-star-half-s-line"></i>
                                        </span>
                                    </div>

                                    <p>(
                                        {/* <span>{avgRating}</span>  */}
                                        ratings)</p> {/* Fix formatting */}
                                </div>

                                <div className='d-flex align-items-center gap-5'>
                                    <span className='product_price'>${price}</span>
                                    <span>Category : {category ? category.toUpperCase() : ''}</span>
                                </div>
                                <p className='mt-3'>{shortDesc}</p>

                                <motion.button whileTap={{ scale: 1.2 }} className='buy_btn mt-4' onClick={addToCart}>Add to Cart</motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="tab_wrapper d-flex align-items-center gap-5">
                                <h6 className={`${tab === 'desc' ? 'active_tab' : ""}`}
                                    onClick={() => setTab('desc')}>Description</h6>
                                <h6 className={`${tab === 'rev' ? 'active_tab' : ""}`}
                                    onClick={() => setTab('rev')}>Reviews
                                    {/* ({reviews.length}) */}
                                </h6>
                            </div>

                            {
                                tab === 'desc' ? (
                                    <div className="tab_content mt-5">
                                        <p>{description}</p>
                                    </div>
                                ) : (
                                    <div className='product_review mt-5'>
                                        <div className="review_wrapper">
                                            {/* <ul>
                          {
                            reviews?.map((item, index) => (
                              <li key={index} className='mb-4'>

                                <h6>Admin</h6>
                                <span>{item.rating} (rating)</span>
                                <p>{item.text}</p>
                              </li>
                            ))
                          }
                        </ul> */}

                                            <div className="review_form">
                                                <h4>Leave your experience</h4>
                                                <form action="" onSubmit={submitHandler}>
                                                    <div className="form_group">
                                                        <input type="text"
                                                            placeholder='Enter name'
                                                            ref={reviewUser}
                                                            required />
                                                    </div>

                                                    <div className="form_group d-flex align-items-center gap-5 rating_group">
                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(1)}>1<i className="ri-star-s-fill"></i></motion.span>
                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(2)}>2<i className="ri-star-s-fill"></i></motion.span>
                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(3)}>3<i className="ri-star-s-fill"></i></motion.span>
                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(4)}>4<i className="ri-star-s-fill"></i></motion.span>
                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(5)}>5<i className="ri-star-s-fill"></i></motion.span>

                                                    </div>

                                                    <div className="form_group">
                                                        <textarea
                                                            ref={reviewMsg}
                                                            rows={4}
                                                            type="text"
                                                            placeholder='Review Message...'
                                                            required />
                                                    </div>

                                                    <motion.button whileTap={{ scale: 1.2 }} type='submit' className='buy_btn'>Submit</motion.button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </Col>

                        <Col lg='12' className='mt-5'>
                            <h2 className='related_title'>You might also like</h2>
                        </Col>

                        <ProductList data={relatedProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
}

export default ProductDetails;
