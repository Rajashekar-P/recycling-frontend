import React, { CSSProperties, PropsWithChildren } from 'react'

import styles from './well.module.scss'

type Props = {
    styles?:{
        wellStyle?:CSSProperties
    }
} &PropsWithChildren

function Well({ styles: {wellStyle = {}} = {}, children}: Props) {
  return (
    <div className={styles["well"]} style={wellStyle}>
        {children}
    </div>
  )
}

export default Well