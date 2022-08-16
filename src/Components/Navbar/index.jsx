import { Link } from "wouter";

export function Navbar() {
    return <nav
        className="navbar is-black"
        role="navigation"
        aria-label="main navigation"
    >
        <div className="navbar-brand ">
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
                role="button"
                className="navbar-burger navbar-item"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <Link href="/">
                <a className="link navbar-item">Home</a>
            </Link>

            <a className="navbar-item">
                Maquinas
            </a>
        </div>
    </nav >
}