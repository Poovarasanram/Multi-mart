import React, { useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './header.css';
import { motion } from 'framer-motion';

import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../../custome-hooks/useAuth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.config';
import { signOut } from 'firebase/auth'; // Import the signOut function

const nav_links = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    }
]

const Header = () => {

    const headerRef = useRef(null);
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const profileActionRef = useRef(null)

    const menuRef = useRef(null)
    const navigate = useNavigate();
    const { currentUser } = useAuth()

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky_header');
            } else {
                headerRef.current.classList.remove('sticky_header'); // Remove the class if not scrolled past threshold
            }
        });
    };

    const logout = () => {
        signOut(auth).then(() => {
            toast.success('Logged out');
            navigate('/home')
        }).catch(err => {
            toast.error(err.message)
        })
    }

    useEffect(() => {
        stickyHeaderFunc()

        return () => window.removeEventListener('scroll', stickyHeaderFunc)
    });

    const menuToggle = () => menuRef.current.classList.toggle('active_menu')

    const naviagteToCart = () => {
        navigate("/cart");
    };

    const toggleProfileActions = () => profileActionRef.current.classList.toggle('show_profile_actions');
    return <header className="header" ref={headerRef}>
        <Container>
            <Row>
                <div className="nav_wrapper">
                    <div className="logo">
                        <img src={logo} alt="log" />
                        <div>
                            <h1>Multimart</h1>

                        </div>
                    </div>
                    <div className="navigation" ref={menuRef} onClick={menuToggle} >
                        <ul className="menu">

                            {nav_links.map((item, index) => (
                                <li className='nav_item' key={index}>
                                    <NavLink to={item.path}
                                        className={(navClass) =>
                                            navClass.isActive ? 'nav_active' : ''
                                        }
                                    >
                                        {item.display}
                                    </NavLink>
                                </li>
                            ))}

                        </ul>
                    </div>
                    <div className="nav_icons">

                        <span className='fav_icon'>
                            <i className="ri-heart-line"></i>
                            <span className='badge'>2</span>
                        </span>

                        <span className='cart_icon' onClick={naviagteToCart}>
                            <i className="ri-shopping-bag-line"></i>
                            <span className='badge'>{totalQuantity}</span>
                        </span>
                        <div className='profile'>
                            <motion.img whileTap={{ scale: 1.2 }}
                                src={currentUser && currentUser.photoURL ? currentUser.photoURL : userIcon} alt=''
                                onClick={toggleProfileActions} />
                        </div>


                        <div className="profile_actions" ref={profileActionRef}
                            onClick={toggleProfileActions}>
                            {
                                currentUser ? <span onClick={logout}>Logout</span> :
                                    <div className='d-flex align-items-center justify-content-center flex-column'>
                                        <Link to='/signup'>Signup</Link>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/dashboard'>Dashboard</Link>
                                    </div>
                            }
                        </div>


                        <div className="mobile_menu">
                            <span onClick={menuToggle}>
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>

                    </div>
                </div>

            </Row>
        </Container>
    </header>
}

export default Header