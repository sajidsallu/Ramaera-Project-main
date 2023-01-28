import React from 'react'
import Button from './Button'

function Tech(props) {
    return (
        <>
            <div className="container-fluid p-0 Technology">
                <span className='up-line'><img src="asset/image/up.png" alt="" /></span>
                <span className='up-down'><img src="asset/image/dn.png" alt="" /></span>
                <div className="row m-0">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="side-gif">
                            <img src={props.img} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="Tech-content">
                            <div className="tech-side-content">
                                <h3>{props.title}<span className='tech-change'>{props.subtitle}</span></h3>
                                <p>{props.paragraph}</p>
                                <div className="unique-btn ">
                                    <Button />
                                </div>
                            </div>
                            <div className="tech-side-icon">
                                <div className="v-img">
                                    <img src={props.Timg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tech