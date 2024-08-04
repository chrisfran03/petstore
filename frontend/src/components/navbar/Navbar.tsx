import { useState, useEffect } from 'react'
import './navbar.scss'
import { Menu, Close } from "@mui/icons-material"
import { Button } from "@mui/material";
import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };


    const toggleNavbar = () => {
        if (window.innerWidth < 500) {
            setOpen(!open);
        }
    };

    const menuStyle = open ? "menu open" : "menu";

    return (
        <div className="navbar">
            <div className="brand">Pet Store</div>
            <div className="hamburger"><Menu onClick={toggleNavbar} /></div>
            <div className={menuStyle}>
                <ul>
                    <Close className="close" onClick={toggleNavbar} />
                    <li onClick={toggleNavbar}><Link to="/">Home</Link></li>
                    <li onClick={toggleNavbar}><Link to="/products">Products</Link></li>
                    <li onClick={toggleNavbar}><Link to="/products/add">Add Product</Link></li>
                    <li onClick={toggleNavbar}>
                        <Button onClick={toggleDarkMode} color="secondary">
                            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar