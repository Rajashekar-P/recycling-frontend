"use client"
import Navbar from "@/components/dashboard/navbar/Navbar"
import { getRandomAvatar, UserRole } from "@/context/user/User";
import { useUserContext } from "@/context/user/UserContext";
import { getUserByID, getUserByName } from "@/services/user/UserService";

import styles from '@/styles/dashboard.module.scss'
import { useEffect } from "react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
})
{
    const { login } = useUserContext();

    useEffect(() => {
        const fetchUserAndLogin = async () => {
            const user = await getUserByID("1");
            if (user) {
                login(user);
            } else {
                console.error('User not found or an error occurred');
            }
        };
    
        fetchUserAndLogin();
    }, []);
    
    return (
        <div className={styles["wrapper"]}>
            <Navbar />
            <main className={styles["content"]}>
                {children}
            </main>
        </div>
    )
}