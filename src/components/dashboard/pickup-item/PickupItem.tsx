import Button from '@/components/input/button'
import NumberInput from '@/components/input/number'
import Text from '@/components/input/text'
import { PickupItem as _PickupItem } from '@/services/pickup/types'
import { IoMdClose } from '@react-icons/all-files/io/IoMdClose'

import React, { useState } from 'react'

type Props = {
    index: number
    item: _PickupItem
    updateCallback: (uuid:string, item: _PickupItem) => void
    deleteCallback: (uuid:string) => void
}

function PickupItem({ index = 0, updateCallback, deleteCallback, item }: Props)
{

    const click = () => deleteCallback(item.uuid);

    const updateQuantity = (value: number)=>{
        item.quantity = value
        updateCallback(item.uuid, item)
    }

    const updateName = (value:string) => {
        item.itemName = value
        updateCallback(item.uuid, item)
    }

    const updateWeight = (value:number) => {
        item.weight = value
        updateCallback(item.uuid, item)
    }

    return (
        <tr className="">
            <td>{index}</td>
            <td>
                <Text placeholder={item.itemName} label='' callback={updateName}/>
            </td>
            <td>
                <NumberInput label=''  placeholder={item.quantity} callback={updateQuantity}/>
            </td>
            <td><NumberInput placeholder={item.weight} label='' callback={updateWeight}/></td>
            <td>{item.quantity * item.weight}</td>
            <td>
                <Button buttonType='button' type='error' clickCallback={click}><IoMdClose /></Button>
            </td>
        </tr>
    )
}

export default PickupItem