
import React from 'react';
import { Nav } from 'react-bootstrap';
import { MdVerticalAlignTop } from 'react-icons/md'
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className=" d-flex justify-content-between align-items-center p-4 bg-dark text-light border-top">
            <p></p>
            <p> Made by Md Imran Hossain &copy;2021</p>
            <Nav.Link as={HashLink} className="p-3 bg-warning text-dark fw-bolder rounded" to="#header" ><MdVerticalAlignTop />Top</Nav.Link>
        </div>

    );
};

export default Footer;