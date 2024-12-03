"use client"

import React, { CSSProperties, useEffect, useState } from 'react'

import styles from '@/styles/dashboard/pickup.module.scss'
import Text from '@/components/input/text'
import TextArea from '@/components/input/text-area'
import Button from '@/components/input/button'
import { PickupItem as _PickupItem, PickupOrder } from '@/services/pickup/types'
import User from '@/context/user/User'

import { v4 as uuidv4 } from 'uuid';
import { useUserContext } from '@/context/user/UserContext'

import { FaPlus } from "@react-icons/all-files/fa/FaPlus"
import PickupItem from '@/components/dashboard/pickup-item'
import { useRouter, useSearchParams } from 'next/navigation'
import { getPickupById } from '@/services/pickup/PickupService'
import Calendar from '@/components/input/calendar/Calendar'

type Props = {}

function getInitialOrder(user: User): PickupOrder
{
  return {
    uuid: uuidv4(),
    contact: {
      address: user.address,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
    },
    cost: 0,
    pickupTime: Date.now(),
    items: [],
  }
}

function Pickup({ }: Props)
{
  const params = useSearchParams();

  const router = useRouter();
  const { getUser } = useUserContext();
  const [isEditing, setEditing] = useState(false);
  const [isViewing, setViewing] = useState(false);
  const [pickupOrder, setOrder] = useState<PickupOrder>(getInitialOrder(getUser()));

  const style: CSSProperties = { color: "black", background: "var(--inputColor)", borderColor: "var(--inputColor)" }

  const updateItem = (uuid: string, item: _PickupItem) =>
  {
    setOrder(prev =>
    {
      let index = 0;
      for (index = 0; index < prev.items.length; index++)
      {
        const element = prev.items[index];
        if (element.uuid === uuid)
          break;
      }
      let items = prev.items;
      items[index] = item

      return {
        ...prev,
        items: items
      }
    })
  }

  const deleteItem = (uuid: string) =>
  {
    setOrder(prev =>
    {
      let index = 0;
      for (index = 0; index < prev.items.length; index++)
      {
        const element = prev.items[index];
        if (element.uuid === uuid)
          break;
      }

      let items = prev.items;
      items.splice(index, 1)
      return {
        ...prev,
        items: items
      }
    })
  }

  const addItem = () =>
  {
    setOrder(prev =>
    {
      return {
        ...prev,
        items: [
          ...prev.items,
          {
            uuid: uuidv4(),
            itemName: "",
            quantity: 0,
            weight: 0
          }
        ]
      }
    })
  }

  const items = pickupOrder.items.map((e, index) =>
  {
    return (
      <PickupItem index={index} item={e} updateCallback={updateItem} deleteCallback={deleteItem}
      />
    )
  })

  const updateFirstName = (name: string) =>
  {
    setOrder(prev =>
    {
      return {
        ...prev,
        contact: {
          ...prev.contact,
          firstName: name
        }
      }
    })
  }
  const updateLastName = (name: string) =>
  {
    setOrder(prev =>
    {
      return {
        ...prev,
        contact: {
          ...prev.contact,
          lastName: name
        }
      }
    })
  }

  const updatePhoneNumber = (phone: string) =>
  {
    setOrder(prev =>
    {
      return {
        ...prev,
        contact: {
          ...prev.contact,
          phoneNumber: phone
        }
      }
    })
  }

  const updateAddress = (address: string) =>
  {
    setOrder(prev =>
    {
      return {
        ...prev,
        contact: {
          ...prev.contact,
          address: address
        }
      }
    })
  }

  const updateDate = (millis: number) =>
  {
    setOrder(prev =>
    {
      return {
        ...prev,
        pickupTime: millis
      }
    })
  }

  useEffect(() =>
  {
    if (params.get("uuid") === null)
    {
      setOrder(() => getInitialOrder(getUser()))
      return;
    }

    let order = getPickupById(params.get("uuid"));
    if (order === undefined)
    {
      setOrder(() => getInitialOrder(getUser()))
      return;
    }

    setOrder(() => order);
    setViewing(() => true)

  }, [params, getUser()])

  return (
    <div className={styles["pickup"]}>
      <h1 className="pickup__header">Your Pickup</h1>
      <div className={styles["pickup__information"]}>
        <div className={styles["row"]}>
          <Text label='First Name'
            placeholder={pickupOrder.contact.firstName}
            style={{ textInputStyle: style }}
            settings={{ disabled: !isEditing, required: isEditing }}
            callback={updateFirstName}

          />
          <Text label='Last Name'
            placeholder={pickupOrder.contact.lastName}
            style={{ textInputStyle: style }}
            settings={{ disabled: !isEditing, required: isEditing }}
            callback={updateLastName}

          />
        </div>
        <div className={styles["row"]}>
          <Text label='Contact Number'
            placeholder={pickupOrder.contact.phoneNumber}
            style={{ textInputStyle: style }}
            settings={{ disabled: !isEditing, required: isEditing }}
            callback={updatePhoneNumber}
          />
          <Calendar label='Pickup Date' placeholder={new Date(pickupOrder.pickupTime).toISOString().split("T")[0]} callback={updateDate} settings={{
            disabled: !isEditing, required: isEditing
          }} />
        </div>
        <div className={styles["row"]}>
          <TextArea
            label='Pickup Address'
            placeholder={pickupOrder.contact.address}
            style={{ textAreaStyle: style }}
            settings={{ disabled: !isEditing, required: isEditing }}
            callback={updateAddress}
          />
        </div>
      </div>
      <div className={styles["pickup__buttons"]}>
        {
          isEditing ?
            <Button buttonType='button' type='success' outline clickCallback={() => setEditing(false)}>Save Contact</Button> :
            <Button buttonType='button' type='warning' outline clickCallback={() => setEditing(true)}>Edit Contact</Button>

        }
        <Button buttonType='button' type='success' outline clickCallback={() => router.push("/dashboard")}
          settings={{ disabled: pickupOrder.items.length === 0 }}
        >
          Submit Order
        </Button>
        <Button buttonType='button' type='error' outline clickCallback={() => router.push("/dashboard")}>Cancel Order</Button>
      </div>
      <div className={styles["pickup__items"]}>
        {
          !isViewing &&
          <button className={styles["pickup__new-item"]} onClick={addItem}>
            <div className={styles["pickup__new-item__icon"]}>
              <FaPlus />
            </div>
          </button>
        }
        {
          items.length > 0 &&
          <table className={styles["pickup-list"]}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Weight (KG)</th>
                <th>Total Weight (KG)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
          </table>
        }

      </div>
    </div>
  )
}

export default Pickup