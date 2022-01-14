import React from 'react'
import { Link } from "react-router-dom";

function landingPage() {
    return (
        <div className="Home">
			<header className="App-header">
            <h2>This Web Application will show all the live robot matches which 
                are taking place. It will also show all the various data related
                to the match eg: the angles, distance and plot.
            </h2>
            <p>Please login to view the matches.</p>
            <Link className="loginPage" to={"/login"}>
					Login
			</Link>
            <Link className="signUpPage" to={"/signup"}>
					Signup
			</Link>
        </header>
        </div>
    )
}

export default landingPage
