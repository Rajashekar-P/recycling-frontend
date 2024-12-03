"use client"
import Navbar from '@/components/dashboard/navbar/Navbar'
import { getRandomAvatar, UserRole } from '@/context/user/User'
import { useUserContext } from '@/context/user/UserContext'
import React, { useEffect } from 'react'

import styles from "@/styles/dashboard.module.scss"
import Well from '@/components/dashboard/well'
import UserDashboard from '@/views/dashboard/user'
import { useRouter } from 'next/navigation'

type Props = {}

function Dashboard({ }: Props)
{
    const router = useRouter();

    useEffect(()=>{
        router.push("/dashboard/user")
    }, [])

    return (
        <>
        </>
    )
}

export default Dashboard