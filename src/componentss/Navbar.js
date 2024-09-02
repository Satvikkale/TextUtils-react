import React from "react";
import { useState } from "react";
const Navbar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    }


    return ( <
        nav className = { `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` } >
        <
        div className = "container-fluid" >
        <
        a className = "navbar-brand"
        onClick = { closeNavbar }
        href = "/" >
        TextUtils { " " } <
        /a> <
        button className = "navbar-toggler"
        type = "button"
        onClick = { toggleNavbar } >
        <
        span className = "navbar-toggler-icon" > < /span> <
        /button> <
        div className = { `collapse navbar-collapse ${isOpen ? "show" : ""}` }
        id = "navbarNav" >
        <
        ul className = "navbar-nav me-auto mb-2 mb-lg-0" >
        <
        li className = "nav-item" >
        <
        a href = "/"
        className = "nav-link"
        onClick = { closeNavbar } >
        Home { " " } <
        /a>{" "} <
        /li>{" "} <
        /ul> <
        div className = { `form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }` } >
        <
        input className = "form-check-input"
        type = "checkbox"
        role = "switch"
        id = "flexSwitchCheckDefault"
        onClick = { props.toggleMode }
        />{" "} <
        label className = "form-check-label"
        htmlFor = "flexSwitchCheckDefault" >
        Enable Dark Mode { " " } <
        /label>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /nav>
    );
};

export default Navbar;