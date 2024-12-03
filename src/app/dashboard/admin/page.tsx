"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

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