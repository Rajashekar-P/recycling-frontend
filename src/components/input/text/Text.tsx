"use client"

import React, { CSSProperties, useId, useState } from 'react'
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose"
import styles from './text-input.module.scss'
import { InputSettings } from '../types'


type Props = {
  label: string
  placeholder?: string
  password?: boolean
  callback?: (text: string) => void
  settings?: InputSettings
  style?: {
    labelStyle?: CSSProperties,
    textInputStyle?: CSSProperties,
    clearTextStyle?: CSSProperties
  }
}

function Text({ label = "", password = false, placeholder = "", callback = () => { }, settings: { disabled = false, required = false } = {},
  style: { labelStyle = {}, textInputStyle = {}, clearTextStyle = {} } = {}
}: Props)
{

  const [text, setText] = useState("");
  const id = useId();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  {
    setText(() =>
    {
      return e.target.value
    })
    callback(e.target.value);
  }

  const deleteText = (e: React.MouseEvent<HTMLButtonElement>) =>
  {
    e.stopPropagation();
    setText(() => "")
    callback("")
  }

  let showInputRequired = required && text.length == 0

  return (
    <>
      <div className={`${styles["text"]} ${disabled ? styles["text--disabled"] : ""}`}>
        {
          label !== "" &&
          <label htmlFor={id} className={styles["text__label"]} style={labelStyle}>
            {label}{required ? <span className="required">*</span> : ""}
          </label>
        }
        <div className={styles["text__container"]}>
          <input className={`${styles["text__input"]} ${showInputRequired ? styles["text__input--required"] : ""}`}
            id={id} type={password ? "password" : "text"} onChange={onChange}
            placeholder={placeholder} value={text} disabled={disabled} style={textInputStyle}
          />
          {
            text.length > 0 &&
            <button type="button" className={styles["text__cancel"]} onClick={deleteText} style={clearTextStyle}>{<IoMdClose />}</button>
          }
        </div>
      </div>
    </>
  )
}

export default Text