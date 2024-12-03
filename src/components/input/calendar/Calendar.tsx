import React, { useId } from 'react'

import styles from './calendar.module.scss'
import { InputSettings } from '../types'

type Props = {
    label: string
    placeholder?: string
    callback?: (millis: number) => void
    settings?: InputSettings
}

function Calendar({ label, placeholder, callback = () => { }, settings: { disabled = false, required = false } = {} }: Props)
{
    const id = useId();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        let date = new Date(e.target.value);
        callback(date.getTime());
    }

    return (
        <div className={styles["calendar__wrapper"]}>
            <label htmlFor={id} className={styles["calendar__label"]}>{label}</label>
            <input id={id} className={styles["calendar"]}
                type='date' disabled={disabled} value={placeholder}
                min={new Date().toISOString().split("T")[0]}
                onChange={onChange}
            />
        </div>
    )
}

export default Calendar