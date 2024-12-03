export type PickupItem = {
    uuid:string,
    itemName: string,
    weight: number,
    quantity: number
}

export type PickupOrder = {
    uuid: string,
    contact: PickupContact
    cost: number,
    pickupTime: number,
    items: PickupItem[]
}

export type PickupContact = {
    firstName: string,
    lastName: string,
    address: string,
    phoneNumber: string,
}