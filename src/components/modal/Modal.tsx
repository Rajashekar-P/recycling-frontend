import React, { CSSProperties, PropsWithChildren, useEffect } from 'react'
import * as m from "framer-motion/m"
import { IoMdClose } from '@react-icons/all-files/io/IoMdClose'
import styles from './modal.module.scss'
import { Variants } from 'framer-motion'

type Props = {
    settings?: {
        showCloseButton?: boolean
        showHeader?: boolean
        shouldCloseOnBackdrop?: boolean
        closeCallback?: () => void
    }
    style?: {
        modalStyle?: CSSProperties
        headerStyle?: CSSProperties
        buttonStyle?: CSSProperties
    }

} & PropsWithChildren

const animation: Variants = {
    hidden: {
        y: "5vh",
        opacity: 0,
    },
    shown: {
        y: "0",
        opacity: 1,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 100
        }
    },
    exit: {
        y: "5vh",
        opacity: 0
    }
}

function Modal({ children, settings: { showCloseButton = true, showHeader = true, closeCallback = () => { }, shouldCloseOnBackdrop = true } = {},
    style: { modalStyle = {}, buttonStyle = {}, headerStyle = {} } = {}
}: Props)
{

    const onClick = (e: React.MouseEvent<HTMLDivElement>) =>
    {
        e.stopPropagation()
    }

    const onEscape = (e: React.KeyboardEvent<HTMLDivElement>) =>
    {
        console.log(e.key)
    }

    const close = () => closeCallback()
    return (
        <m.div
            variants={animation}
            initial={"hidden"}
            animate={"shown"}
            exit={"exit"}
            onClick={onClick}
            onKeyDown={onEscape}
            className={styles["modal"]} style={modalStyle}
        >
            <div >
                {showHeader && <header className={styles["modal__header"]} style={headerStyle} />}
                {
                    showCloseButton &&
                    <button type="button" className={styles["modal__close"]} onClick={close} style={buttonStyle}><IoMdClose /></button>
                }
                <div className={styles["modal__content"]}>
                    {children}
                </div>
            </div>
        </m.div>
    )
}

export default Modal