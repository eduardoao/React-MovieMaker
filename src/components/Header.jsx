import React from 'react';
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Input
} from "reactstrap";
import { deflate } from 'zlib';

export default class Header {
    constructor(props) {
        super(props);

        //State - component
        this.toggle = this.toggle.bind(this);
        this.dropdownToggle = this.dropdownToggle.bind(this);

    }

    dropdownToggle(e) {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggle() {
        if (this.state.isOpen) {
            this.setState({
                color: "transparent"
            });
        } else {
            this.setState({
                color: "white"
            });
        }
        this.setState({
            isOpen: !this.state.isOpen
        });
    }



}


