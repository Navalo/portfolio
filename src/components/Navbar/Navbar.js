import React, { useState } from "react";
import './Navbar.css';
import logo from '../../logo.svg';

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={logo} alt='logo' />
            </div>

            <ul className="app__navbar-links">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                {!toggle ? (
                    <HiMenuAlt4 className="app_navbar-menu-button" onClick={() => setToggle(true)} />
                ) : (
                    <motion.div
                        initial={{ x: 50 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                        className="app__navbar-menu-content"
                    >
                        <HiX className="app_navbar-menu-button"  onClick={() => setToggle(false)} />

                        <ul>
                            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                                <li key={`${item}`}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
