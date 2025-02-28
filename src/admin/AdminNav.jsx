import React from 'react';
import { Container, Row } from 'reactstrap';
import useAuth from '../custome-hooks/useAuth';
import '../Style/admin-nav.css';
import { NavLink } from 'react-router-dom';


const admin_nav = [
    {
        display: 'Dashboard',
        path: '/dashboard'
    },

    {
        display: 'All-Products',
        path: '/dashboard/all-products'
    },

    {
        display: 'Orders',
        path: '/dashboard/orders'
    },

    {
        display: 'Users',
        path: '/dashboard/users'
    }

]

const AdminNav = () => {

    const { currentUser } = useAuth()

    return (
        <div>
            <header className='admin_header'>
                <div className="admin_nav_top">
                    <Container>
                        <div className="admin_nav_wrapper_top">
                            <div className="logo">
                                <h2>Multimart</h2>
                            </div>

                            <div className="search_box">
                                <input type="text" placeholder='Search....' />
                                <span><i className='ri-search-line'></i></span>
                            </div>
                            <div className="admin_nav_top_right">
                                <span><i className='ri-notification-3-line'></i></span>
                                <span><i className='ri-settings-2-line'></i></span>
                                <img src={currentUser &&  currentUser.photoURL} alt="" />
                            </div>
                        </div>
                    </Container>
                </div>
            </header>

            <section className="admin_menu p-0">
                <Container>
                    <Row>
                        <div className="adimn_navigation">
                            <ul className='admin_menu-list'>
                                {
                                    admin_nav.map((item, index) => (
                                        <li className='admin_menu-item' key={index}>
                                            <NavLink to={item.path} className={navClass => navClass.isActive ? 'active_admin-menu' : ''}


                                            >{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default AdminNav