import { useRef } from "react"
import { Link } from "wouter"
import { burger, items, anchor, profile } from './navbar.module.css'
import { Profile } from '../Profile'

export function Navbar() {
    const refBurger = useRef()

    function handleClick() {
        const target = refBurger.current.dataset.target
        const $target = document.getElementById(target)
        refBurger.current.classList.toggle('is-active')
        $target.classList.toggle('is-active')
    }

    return <nav
        className="navbar is-black container is-fullhd"
        role="navigation"
        aria-label="main navigation"
    >
        <div className="navbar-brand">
            <Link href='/'>
                <a className="navbar-item link">
                    <img
                        src="https://bulma.io/images/bulma-logo.png"
                        width="112"
                        height="28"
                        alt="Bulma"
                    />
                </a>
            </Link>
            <a
                onClick={handleClick}
                ref={refBurger}
                role="button"
                className={`navbar-burger navbar-item ${burger}`}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${items}`}>
            <Link href="/">
                <a className={`link navbar-item ${anchor}`}>Home</a>
            </Link>
            <Link href="/agua/Agua">
                <a className={`link navbar-item ${anchor}`}>Agua</a>
            </Link>
            <div className='navbar-item'>
                <Profile />
            </div>
        </div>
    </nav >
}