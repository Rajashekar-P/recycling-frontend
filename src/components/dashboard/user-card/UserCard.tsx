import User from '@/context/user/User'
import React from 'react'

import styles from "./user-card.module.scss"
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    user: User
}

function UserCard({ user: { id, firstName, lastName, email, avatar } }: Props)
{
    return (
        <Link href={`/dashboard/user?id=${id}`} style={{textDecoration: "none"}}>
            <div className={styles["user-card"]}>
                <div className={styles["user-card__avatar"]}>
                    <Image
                        src={avatar}
                        alt={`${email} profile picture`}
                        style={{
                            borderRadius: "50%",
                            overflow: "hidden",
                            boxShadow: "0 0 15px rgba(0,0,0,0.25)",
                            border: "2px solid var(--inputColorDisabled)",
                            backgroundColor: "var(--inputColorDisabled)"
                        }}
                        fill
                    />
                </div>
                <div className={styles["user-card__info"]}>
                    <span className={styles["user-card__name"]}>{firstName} {lastName}</span>
                    <span className={styles["user-card__email"]}>{email}</span>
                </div>
            </div>
        </Link>
    )
}

export default UserCard