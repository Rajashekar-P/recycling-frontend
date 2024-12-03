"use client"

import React, { CSSProperties, useId, useState } from 'react'

import styles from "./number-input.module.scss"
import { InputSettings } from '../types'

type Props = {
    label: string,
    placeholder?: number
    callback?: (val: number) => void
    numberSettings?: {
        min?: number,
        max?: number,
        increment?: number
    }
    settings?: InputSettings

    style?: {
        labelStyle?: CSSProperties
        inputStyle?: CSSProperties
    }
}

function NumberInput({ label = "", placeholder = 0, numberSettings: { min = 0, max = 100, increment = 1 } = {},
    settings: { disabled = false, required = false } = {}, callback = () => { },
    style: { labelStyle = {}, inputStyle = {} } = {}
}: Props)
{
    const [value, setValue] = useState<number>(placeholder)

    let id = useId();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setValue(() => e.target.valueAsNumber)
        callback(e.target.valueAsNumber)
    }

    let showRequired = required && (value === placeholder || Number.isNaN(value));
    return (
        <div className={styles["number__container"]}>
            <label htmlFor={id} className={styles["number__label"]} style={labelStyle}>{label}{required && <span className='required'>*</span>}</label>
            <input id={id} type="number" className={`${styles["number"]} ${showRequired ? styles["number--required"] : ""}`}
                onChange={onChange} min={min} max={max} step={increment} value={Number.isNaN(value) ? "" : value}
                disabled={disabled} style={inputStyle}
            />
        </div>
    )
}

export default NumberInput