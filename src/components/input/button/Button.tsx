import React, { ButtonHTMLAttributes, CSSProperties, DetailedHTMLProps, PropsWithChildren } from 'react'

import styles from './button.module.scss'
import { InputSettings } from '../types'

type Props = {
    type?: "primary" | "success" | "warning" | "error"
    outline?: boolean,
    buttonType?: "button" | "submit" | "reset",
    clickCallback?: () => void
    style?: CSSProperties
    settings?: InputSettings
} & PropsWithChildren

function Button({ children, type = "primary", outline = false, buttonType = "button", clickCallback = () => { }, style = {}, settings: { disabled = false } = {} }: Props)
{

    const onClick = (e:React.MouseEvent<HTMLButtonElement>)=>
    {
        e.currentTarget.blur()
        clickCallback();
    }

    return (
        <button type={buttonType} className={`${styles["btn"]} ${outline ? styles["btn--outline"] : ""}  ${type ? styles["btn--" + type] : ""}`}
            onClick={onClick} style={style} disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button