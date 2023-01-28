import React from 'react'
import Button from './Button'

function Making(props) {
    return (
        <>
            <div className="container-fluid p-0 Technology">
                <span className='up-line'><img src="asset/image/up-1.png" alt="" /></span>
                <span className='up-down'><img src="asset/image/dn-1.png" alt="" /></span>
                <div className="row m-0">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="Tech-content making-content">
                            <div className="tech-side-icon">
                                <div className="v-img">
                                    <img src={props.Timg} alt="" />
                                </div>
                            </div>
                            <div className="tech-side-content Making-section">
                                <h3>{props.title}</h3>
                                <p>{props.subtitle}</p>
                                <div className="unique-btn making-btn">
                                    <Button />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="side-gif making-gif">
                            <img src={props.img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Making