import React from 'react'
import { Navbar, Brands, Register } from './components'
import { Home, Gpt3, Future, Possibilities, CaseStudies, Footer } from './containers'
import './App.css'

function App() {
    return (
        <div>
            <div className="gradient__bg">
                <Navbar />
                <Home />
            </div>
            <Brands />
            <Gpt3 />
            <Future />
            <Possibilities />
            <Register />
            <CaseStudies />
            <Footer />
        </div>
    )
}

export default App