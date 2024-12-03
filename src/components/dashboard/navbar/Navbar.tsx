import React, { ReactNode } from 'react'

import styles from './navbar.module.scss'
import { useUserContext } from '@/context/user/UserContext'
import Image from 'next/image'
import { getLinks, NavigationLink } from './links'
import Link from 'next/link'
import { FaUser } from "@react-icons/all-files/fa/FaUser"

type Props = {
}

type LinkProps = {
    link: NavigationLink
}

function Navbar({ }: Props)
{
    const { getUser } = useUserContext()

    let links = getLinks(getUser()).map(e=>{
        return (
            <NavLink link={e}/>
        )
    })

    return (
        <nav className={styles["navbar"]}>
            <ul className={styles["navbar__links"]}>
                {links}
            </ul>
        </nav>
    )
}

function NavLink({ link: { icon, link, name, disabled } }: LinkProps)
{
    return (
        <Link href={link} style={{textDecoration: "none"}}>
            <li className={styles["navlink"]}>
                <div className={styles["navlink__icon"]}>
                    {icon}
                </div>
                <span className={styles["navlink__name"]}>{name}</span>
            </li>
        </Link>
    )
}


export default Navbar