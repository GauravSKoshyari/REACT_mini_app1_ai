import React from 'react'
import { Blog } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import "./casestudies.css"

function CaseStudies() {

    const count = 5;
    const blogComponents = [];
    const images = [blog01, blog02, blog03, blog04, blog05]
    for (let i = 0; i < count; i++) {
        blogComponents.push(<Blog date="Sep 26, 2021" heading="GPT-3 and Open AI is the future. Let us exlore how it is?" link="Read Full Article" src={images[i]} key={i} />);
    }
    return (
        <div className='case-studies section-padding' id='casestudies'>
            <div className="case-heading">
                <h1 className='gradient__text'>A lot is happening,
                    We are blogging about it.</h1>
            </div>
            <div className="blogs">
                {blogComponents}
            </div>
        </div>
    )
}

export default CaseStudies