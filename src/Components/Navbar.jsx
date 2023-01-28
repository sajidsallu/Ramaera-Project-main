import React from 'react';
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";

function Navbar() {
    return (
        <>
            <div className="row m-0 main-navbar">
                <div className="col-12 p-0">
                    <nav className="navbar navbar-expand-lg navbar-light navbar-edit">
                        <div className="container">
                            <a className="navbar-brand" href="#"><img src="asset/image/logo ramaera 1.png" alt="" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"><IoIosMore /></span>
                            </button>
                            <div className="collapse navbar-collapse nav-coll" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="">HOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">OUR INDUSTRIES <span className='icon'><FiChevronDown /></span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">OUR COMPANY <span className='icon'><FiChevronDown /></span></a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav ms-auto sm-ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">CAREER</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact">CONTACT</a>
                                    </li>
                                    <li className="nav-item">
                                        <button type='button'><span className='icon'><FiSearch /></span></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar