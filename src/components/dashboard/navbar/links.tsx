import { ReactNode } from "react"

import { IoMdSettings } from "@react-icons/all-files/io/IoMdSettings"
import { FaTruckPickup } from "@react-icons/all-files/fa/FaTruckPickup"
import { FaUser } from "@react-icons/all-files/fa/FaUser"
import {FaHome} from "@react-icons/all-files/fa/FaHome"
import { User, UserRole } from "@/context/user/User"

import styles from './navbar.module.scss'
import Image from "next/image"

export type NavigationLink = {
    icon: ReactNode
    name: string
    link: string
    disabled?: boolean
}

const getUserLinks = (username: string, profilePicture: ReactNode): NavigationLink[] =>
{
    const x = <IoMdSettings />
    return [
        {
            icon: profilePicture,
            name: username,
            link: "/dashboard/user"
        },
        {
            icon: <FaTruckPickup />,
            name: "Schedule Pickup",
            link: "/dashboard/pickup"
        },
    ]
}
const getAdminLinks = (profilePicture: ReactNode, username: string): NavigationLink[] =>
{
    return [
        {
            icon: profilePicture,
            name: username,
            link: "/dashboard/user"
        },
        {
            icon: <FaTruckPickup />,
            name: "Pickups",
            link: "/dashboard/admin/pickups"
        },
        {
            icon: <FaUser />,
            name: "Users",
            link: "/dashboard/admin/users"
        }
    ]
}

function getAvatarNode(profilePicture: string)
{
    return (
        <div className={styles["navlink__avatar"]}>
            <Image
                src={profilePicture}
                alt="Profile Picture"
                fill
                style={{
                    borderRadius: "50%",
                    overflow: "hidden"
                }}
            />
        </div>
    )
}

export function getLinks(user: User)
{
    return user.userRole === UserRole.USER ? getUserLinks(user.firstName, getAvatarNode(user.avatar)) :
        getAdminLinks(getAvatarNode(user.avatar), user.firstName)
}