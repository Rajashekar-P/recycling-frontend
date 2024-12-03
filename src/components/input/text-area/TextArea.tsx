"use client"

import React, { CSSProperties, useId, useState } from 'react'
import { InputSettings } from '../types'
import styles from './textarea-input.module.scss'

type Props = {
  label: string
  placeholder?: string
  callback?: (x: string) => void
  settings?: InputSettings
  style?: {
    labelStyle?: CSSProperties,
    textAreaStyle?: CSSProperties
  }
}

function TextArea({ label = "", placeholder = "", callback = () => { }, settings: { disabled = false, required = false } = {},
  style: { labelStyle = {}, textAreaStyle = {} } = {}
}: Props)
{

  const [value, setValue] = useState("");
  let id = useId();

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
  {
    setValue(() => e.target.value)
    callback(e.target.value)
  }

  let showInputRequired = required && value.length == 0
  return (
    <div className={`${styles["textarea"]} ${disabled ? styles["textarea--disabled"] : ""}`}>
      <label htmlFor={id} className={styles["textarea__label"]} style={labelStyle}>{label}{required ? <span className='required'>*</span> : ""}</label>
      <textarea id={id} className={`${styles["textarea__input"]} ${showInputRequired ? styles["textarea__input--required"] : ""}`}
        value={value} placeholder={placeholder} onChange={onChange} disabled={disabled} style={textAreaStyle}
      />
    </div>
  )
}

export default TextArea