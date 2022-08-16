import styles from './navbar.module.css'

export function Navbar() {
    return <nav
        className="navbar is-black"
        role="navigation"
        aria-label="main navigation"
    >
        <div className="navbar-brand ">
            <a class="navbar-item">
                <img
                    src="https://bulma.io/images/bulma-logo.png"
                    width="112"
                    height="28"
                    alt="Bulma" />
            </a>
            <a role="button" className="navbar-burger navbar-item" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
    </nav >
}