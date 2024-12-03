import React, { CSSProperties, useId } from 'react'

import styles from './progress-input.module.scss'

type Props = {
    label?: string,
    value?: number
    style?: {
        labelStyle?: CSSProperties,
        progressStyle?: CSSProperties,
        barStyle?: CSSProperties
    }
}

function ProgressBar({ label = "", value = 0, style: { labelStyle = {}, progressStyle = {}, barStyle = {} } = {} }: Props)
{
    let id = useId();

    let progress = `calc(${value}% - .5rem)`

    return (
        <div className={styles["progress-bar__container"]}>
            <label className={styles["progress-bar__label"]} htmlFor={id} style={labelStyle}>{label}</label>
            <div className={styles["progress-bar"]} style={progressStyle}>
                <span className={styles["progress-bar__bar"]} style={{ ...barStyle, width: progress }} />
            </div>
        </div>
    )
}

export default ProgressBar