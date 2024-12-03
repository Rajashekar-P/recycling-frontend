"use client"

import React, { PropsWithChildren, useEffect } from 'react'
import * as m from "framer-motion/m"
import styles from './backdrop.module.scss'

type Props = {
    shouldAllowClickClose?: boolean
    closeCallback?: () => void
} & PropsWithChildren

function Backdrop({
    children,
    shouldAllowClickClose = false,
    closeCallback = () => { }
}: Props)
{
    const onClick = () =>
    {
        if (!shouldAllowClickClose) return
        closeCallback();
    }

    useEffect(() =>
    {
        const close = (e: KeyboardEvent) =>
        {
            if (e.key === "Escape")
            {
                closeCallback();
            }
        }
        window.addEventListener("keydown", close)
        return () => window.removeEventListener("keydown", close);
    }, [])

    return (
        <m.div
            className={styles["backdrop"]}
            onClick={onClick}
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(0,0,0,.65)" }}
            exit={{ backgroundColor: "rgba(0,0,0,0)" }}
            transition={{
                type: "spring",
                duration: .5,
                delayChildren: 5
            }}
        >
            {children}

        </m.div>
    )
}

export default Backdrop