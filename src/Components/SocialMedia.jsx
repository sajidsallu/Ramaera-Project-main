import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";


function SocialMedia() {
    return (
        <>
            <div className="row socialMeida">
                <div className="col-12 p-0">
                    <div className="social-media">
                        <ul>
                            <li><a href=""><TiSocialTwitter /></a></li>
                            <li><a href=""><AiFillInstagram /></a></li>
                            <li><a href=""><TiSocialFacebook /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SocialMedia