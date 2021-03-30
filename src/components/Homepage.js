import React from 'react' 
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom' 

export default function Homepage() {
    return (
        <div className="hero_img">
            <div className="title_btn_container">
                <h1 className="title"> The Workout App</h1>
                <div className="btn_cont">
                    <Button className="hero_btn" variant="light">Log In</Button>
                    <Link to='./Signup'><Button className="hero_btn" variant="dark">Sign Up</Button></Link>
                </div>
            </div>
        </div>
    )
}

