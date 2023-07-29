import React from 'react'
import './feature.css'

function Feature({ heading, text }) {
    return (
        <div className='what-gpt3-container'>
            <div className="what-gpt3-heading">
                <div></div>
                <p>{heading}</p>
            </div>
            <div className="what-gpt3-content">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature