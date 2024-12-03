import React, { CSSProperties, useId, useState } from 'react'

import styles from './switch-input.module.scss'
import { InputSettings } from '../types'
type Props = {
    label?: string
    defaultValue?: boolean
    callback?: (x: boolean) => void
    settings?: InputSettings
}

function Switch({ label = "", defaultValue = false, callback = () => { },
    settings: { disabled = false, required = false } = {} }: Props)
{
    let id = useId();
    const [value, setValue] = useState<boolean>(defaultValue);

    const onChange = (e: React.MouseEvent<HTMLSpanElement>) =>
    {
        if (disabled) return;
        setValue(prev => !prev)
        callback(!value)
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>
    {
        if (e.key !== "Enter") return;
        setValue(prev => !prev)
        callback(!value)
    }

    return (
        <div className={`${styles["switch"]} ${disabled ? styles["switch--disabled"] : ""}`}>
            <label className={styles["switch__label"]} htmlFor={id}>{label}{required ? <span className='required'>*</span> : ""}</label>
            <div className={styles["switch__container"]}>
                <input id={id} type="checkbox" className={styles["switch__input"]} onChange={() => { }} checked={value} disabled={disabled}
                    onKeyDown={onKeyDown}
                />
                <span className={styles["switch__slider"]} onClick={onChange} />
            </div>
        </div>
    )
}

export default Switch