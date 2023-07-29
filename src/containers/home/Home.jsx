import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './home.css'

function Home() {
    return (
        <div className='home section-padding' id="home">
            <div className="home-content">
                <h1 className='gradient__text'>Let’s Build Something
                    amazing with GPT-3
                    OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className="get-started">
                    <input type="email" placeholder='Your Email Address' />
                    <button type='button'>Get Started</button>
                </div>
                <div className="peoples">
                    <div className="people-img">
                        <img src={people} alt='peoples' />
                    </div>
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="home-image">
                <img src={ai} />
            </div>
        </div>
    )
}

export default Home