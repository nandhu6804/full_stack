import "../../assets/css/NavBar.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

var NavBar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is authenticated
        const authStatus = localStorage.getItem('isAuthenticated');
        if (authStatus === 'true') {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        setIsAuthenticated(false); // Update state after logout
        navigate('/login');
    };

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about' target="blank">About</Link></li>
                    <li><Link to='/gallery'>Gallery</Link></li>
                    <li><Link to='/useeffect'>Use Effect</Link></li>
                    <li><Link to='/usecontext'>Use Context</Link></li>
                    <li><Link to='/usememo'>Use Memo</Link></li>
                    <li><Link to='/useref'>Use ref</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    {!isAuthenticated && (
                        <>
                            <li><Link to='/signup'>Sign Up</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                        </>
                    )}
                    {isAuthenticated && (
                        <li><button onClick={handleLogout}>Logout</button></li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;