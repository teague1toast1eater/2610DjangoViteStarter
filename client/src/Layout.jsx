import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'

import './index.css'

import wholeismLogo from './assets/wholeism logo grn trans.png'
import wholeismLogoWhite from './assets/wholeism logo wht.png'
import wholeismLogoDarkBlue from './assets/wholeism logo drk blue.png'


function App() {
    const [count, setCount] = useState(0)

    async function logout() {
        const res = await fetch("/registration/logout/", {
            credentials: "same-origin", // include cookies!
        });

        if (res.ok) {
            // navigate away from the single page app!
            window.location = "/registration/sign_in/";
        } else {
            // handle logout failed!
        }
    }

    return (
        <>
            <div className="logo-container">
                <img src={wholeismLogo} className="logo wholeism" alt="Wholeism Company Logo" />
            </div>

            <nav className="navbar">
                <Link to="/"> 
                    <button>Home</button>
                </Link>
                <Link to="/quizzes"> 
                    <button>Quizzes</button>
                </Link>
                <Link to="/resources"> 
                    <button>Resources</button>
                </Link>
                <Link to="/first-aid-kit"> 
                    <button>First Aid Kit</button>
                </Link>
                <Link to="/profile/${user.id}"> 
                    <button>Profile</button>
                </Link>
                <div className="log-out">
                    <a href="/registration/logout/" className="nav-link">
                        <button onClick={logout}>Logout</button>
                    </a>
                </div>
            </nav>

            <h1>Mindful Mothers</h1>

            <Outlet />

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    This website will eventually be a place for mothers to come together and share their experiences, and to learn about mindfulness and self-care in their crazy whirlwind called day-to-day life.
                </p>
            </div>


        </>
    )
}

export default App;

// spacecamp 
// mountaineer-light
// mountaineer
// apprentice
// solarized8
// parsec
// oceanic_material