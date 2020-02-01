import React from 'react';
import { Link } from "react-router-dom";


const MenuItem = ({active, children, to}) => (
    <Link to={to} className="menu-item">
            {children}
    </Link>
)

const Header = () => {
    return (
        <div>
            <div className="menu">
                <MenuItem to={'/'}>Home</MenuItem>
                <br/>
                <MenuItem to={'/new'}>New Post</MenuItem>
            </div>
        </div>
    );
};

export default Header;