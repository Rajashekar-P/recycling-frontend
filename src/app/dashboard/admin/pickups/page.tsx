"use client"

import React, { useEffect } from 'react'

import Pickups from '@/components/dashboard/pickups'
import styles from "@/styles/dashboard/pickups.module.scss"
import { getLatestPickups } from '@/services/pickup/PickupService'
import { useRouter } from 'next/navigation'
import { useUserContext } from '@/context/user/UserContext'
import { UserRole } from '@/context/user/User'

type Props =
    {}

function PickupsPage({ }: Props)
{
    const router = useRouter();
    const { getUserRole } = useUserContext();

    useEffect(() =>
    {
        if (getUserRole() === UserRole.USER)
            router.push("/")
    }, [getUserRole])

    return (
        <section className={styles["pickups"]}>
            <h1 className={styles["pickups__header"]}>Latest Pickups</h1>
            <Pickups pickups={getLatestPickups()} />
        </section>
    )
}

export default PickupsPage