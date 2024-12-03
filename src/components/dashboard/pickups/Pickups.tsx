import React from 'react'

import styles from './pickups.module.scss'
import { PickupOrder } from '@/services/pickup/types'
import { getLatestPickups } from '@/services/pickup/PickupService'
import PickupGroup from '../pickup-group'


type Props = {
    pickups: PickupOrder[]
}

function Pickups({ pickups }: Props)
{

    let items = pickups.map(e =>
    {
        return (
            <PickupGroup order={e} />
        )
    })
    return (
        <table className={styles["pickups"]}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </table>
    )
}

export default Pickups