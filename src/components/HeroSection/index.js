import React from 'react'
import "./HeroSection.css"
import {Button} from '../ButtonElements'

function HeroSection() {
    return (
        <div className="hero-container">
            <h1> Junior</h1>
            <p>Freelance Web and a merci</p>
            <div className="hero-btns">
            <Button fontBig big primary> Junior</Button>
            </div>
        </div>
    )
}

export default HeroSection 