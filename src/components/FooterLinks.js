import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const FooterLinks = () => {
    return (
        <>
            <div className='footerLinks'>
                <a href="https://www.facebook.com/" target="_blank"><BsFacebook /></a>
                <a href="https://twitter.com/" target="_blank"><BsTwitter /></a>
                <a href="https://www.instagram.com/" target="_blank"><BsInstagram /></a>
            </div>
        </>
    )
}

export default FooterLinks