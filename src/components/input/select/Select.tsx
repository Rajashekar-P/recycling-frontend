import React, { CSSProperties, useId, useState } from 'react'

import styles from './select.module.scss'
import { InputSettings } from '../types'

type Props = {
    label?: string
    placeholder?: string
    defaultValue?: string
    settings?: InputSettings
    options: SelectOption[]
    callback?: (value: string) => void
    style?: {
        labelStyle?: CSSProperties,
        selectStyle?: CSSProperties
    }
}

export type SelectOption = {
    name: string,
    value: string
}

function Select({ label = "", placeholder = "", defaultValue = "", options = [], settings: { disabled = false, required = false } = {}, callback = () => { },
    style: { labelStyle = {}, selectStyle = {} } = {}
}: Props)
{
    const [option, setOption] = useState(defaultValue);
    let id = useId();

    let optionNodes = options.map(({ name, value }, index) =>
    {
        return (
            <option className={styles["select__option"]}
                value={value}
            >
                {name}
            </option>
        )
    })


    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    {
        setOption(() => e.target.value)

        callback(e.target.value)
    }

    let showRequired = required && (option.length === 0 || option === "default")

    return (
        <div className={styles["select__container"]}>
            <label htmlFor={id} className={styles["select__label"]} style={labelStyle}>{label}{required && <span className='required'>*</span>}</label>
            <select id={id} className={`${styles["select"]} ${showRequired ? styles["select--required"] : ""}`}
                onChange={onChange} disabled={disabled} style={selectStyle}
            >
                {
                    required &&
                    <option value="default">{placeholder}</option>
                }
                {optionNodes}
            </select>
        </div>
    )
}

export default Select