import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='nav-flex'>
                <CustomLink className='nav-center' to='/home'>Home</CustomLink>
                <CustomLink className='nav-center' to='/reviews'>Reviews</CustomLink>
                <CustomLink className='nav-center' to='/dashboard'>Dashboard</CustomLink>
                <CustomLink className='nav-center' to='/blogs'>Blogs</CustomLink>
                <CustomLink className='nav-center' to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;