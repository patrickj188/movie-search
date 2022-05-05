import { useState } from "react"
import Link from 'next/link'
import style from "./Layout.module.css"
import movies from "../pages/movies"

export default function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false)

    const openMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <header className={style.header}>

                <nav className={style.navbar}>
                    <Link href='/'>
                        <a className={style.navlogso}>Movie Site</a>
                    </Link>
                    <ul className={isOpen === false ? style.navmenu : `${style.navmenu} ${style.active}`}>
                        <li className={style.navitem}>
                            <Link href={'/'}>
                                <a className={style.navlink}>Home</a>
                            </Link>
                        </li>
                        <li className={style.navitem}>

                            <Link href='/movies'>

                            <a className={style.navlink}>Movies</a>
                        </Link>

                    </li>
                    <li className={style.navitem}>

                        <Link href='/random'>

                        <a className={style.navlink}>Random</a>
                        </Link>

                    </li>
                </ul>
                <button className={isOpen === false ? style.hamburger : `${style.hamburger} ${style.active}`}
                    onClick={openMenu}>
                    <span className={style.bar}></span>
                    <span className={style.bar}></span>
                    <span className={style.bar}></span>
                </button>
            </nav>
        </header>
            { children }

        </>

    )
}