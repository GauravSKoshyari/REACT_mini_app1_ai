import { google, slack, atlassian, dropbox, shopify } from './imports'
import React from 'react'
import "./brands.css"

const Brands = () => {
    return (
        <div className='brands section-padding' id="brands">
            <img src={google} alt="google" />
            <img src={slack} alt="slack" />
            <img src={atlassian} alt="atlassian" />
            <img src={dropbox} alt="dropbox" />
            <img src={shopify} alt="shopify" />
        </div>
    )
}

export default Brands