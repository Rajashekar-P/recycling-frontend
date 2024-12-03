"use client"

import React, { useState } from 'react'

import { PickupOrder } from '@/services/pickup/types'
import { useRouter } from 'next/navigation'

type Props = {
  order: PickupOrder
}

function PickupGroup({ order: { uuid, pickupTime, contact } }: Props)
{
  const router = useRouter();
  let date = new Date(pickupTime);
  let dateString = date.toLocaleString('default', { dateStyle: 'medium' })

  const click = () => router.push(`/dashboard/pickup?uuid=${uuid}`)

  return (
    <tr onClick={click}>
      <td>{contact.firstName} {contact.lastName}</td>
      <td>{contact.address}</td>
      <td>{dateString}</td>
    </tr>
  )
}

export default PickupGroup