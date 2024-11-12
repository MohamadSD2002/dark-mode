import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Switch } from "antd";
import "./navbar.less";
import { setTheme } from "../../tools/theme";

const Navbar = () => {
    const storageTheme = localStorage.getItem("theme");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useLayoutEffect(() => {
        setTheme(`${storageTheme}`);
    }, [storageTheme]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div className="menu" onClick={toggleMenu}>menu</div>

            <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/nothing-here">404</Link>
                </li>
                <li>
                    <Switch
                        checkedChildren="light"
                        unCheckedChildren="dark"
                        defaultChecked={localStorage.getItem("theme") !== "dark"}
                        onChange={(checked) => {
                            const theme = checked ? "light" : "dark";
                            setTheme(theme);
                            localStorage.setItem("theme", theme);
                        }}
                    />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
