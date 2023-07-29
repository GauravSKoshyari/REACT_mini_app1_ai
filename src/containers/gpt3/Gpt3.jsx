import React from 'react'
import { Feature } from '../../components'
import "./Gpt3.css"

function Gpt3() {
    return (
        <div className="gpt3" id="gpt3">
            <div className="what-gpt3">
                <Feature heading="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
            </div>

            <div className="gpt3-possibilities">
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Explore the Library</p>
            </div>

            <div className="gpt3-features">
                <Feature heading="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
                <Feature heading="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                <Feature heading="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            </div>
        </div>
    )
}

export default Gpt3