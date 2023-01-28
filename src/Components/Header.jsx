import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import SocialMedia from './SocialMedia'

function Header() {
    return (
        <>
            <div className="container-fluid p-0 header-section">
                <Navbar />
                <Slider />
                <div className="row main-content">
                    <div className="col-12">
                        <div className="home-content">
                            <h1>Ramaera Industries</h1>
                            <p>An incredible multi-industrial approach oriented towards financial independence, customer focus and serving the best quality to the people.
                            </p>
                            <button type='button'>Explore More</button>
                        </div>
                    </div>
                </div>
                <SocialMedia />
            </div>
        </>
    )
}

export default Header