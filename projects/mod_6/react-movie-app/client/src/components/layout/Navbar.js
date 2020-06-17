import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import TMDBLogo from '../../images/tmdbLogo.svg';

const Navbar = props => (
    <>
        <nav className='navbar'>
            { props.token && <Link to='/'>Home</Link> }
            <a className='navbar-logo' href='/'><img src={ TMDBLogo } alt={ TMDBLogo } /></a> 
        </nav>
        <Menu theme='light' mode='horizontal' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'><NavLink to='/home' /> Home</Menu.Item>
            <Menu.Item key='2'><NavLink to='/search' />Search Movies</Menu.Item>
            <Menu.Item key='3'><NavLink to='/favorites' />My List</Menu.Item>
        </Menu>
        <button className='nav-button' onClick={ props.logout }>logout</button> 
    </>
);
    
export default Navbar;
