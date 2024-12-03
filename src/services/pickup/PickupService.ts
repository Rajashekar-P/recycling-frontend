import { PickupOrder } from "./types";

import { v4 as uuidv4 } from 'uuid';


const SAMPLE_DATA: PickupOrder[] = [
    {
        uuid: "test",
        contact: {
            address: "124 Fleet Street",
            firstName: "Dylan",
            lastName: "Mullen",
            phoneNumber: "+44 7545647778"
        },
        cost: 10,
        items: [
            {
                itemName: "Motherboard",
                quantity: 1,
                uuid: "",
                weight: .5
            }
        ],
        pickupTime: new Date(2024, 10, 10).getTime()
    },
    {
        uuid: "test1",
        contact: {
            address: "64 Zoo Lane",
            firstName: "Lucy",
            lastName: "Zoo",
            phoneNumber: "+44 75456221134"
        },
        cost: 10,
        items: [
            {
                itemName: "CPU",
                quantity: 1,
                uuid: "",
                weight: .5
            }
        ],
        pickupTime: new Date(2024, 10, 11).getTime()
    },
    {
        uuid: "test2",
        contact: {
            address: "123 Fleet Street",
            firstName: "Dylan",
            lastName: "Mullen",
            phoneNumber: "+44 7545642228"
        },
        cost: 10,
        items: [
            {
                itemName: "Fan",
                quantity: 5,
                uuid: "",
                weight: 1
            }
        ],
        pickupTime: new Date(2024, 11, 10).getTime()
    },
    {
        uuid: "test3",
        contact: {
            address: "1 Balamory Street",
            firstName: "Archie",
            lastName: "the Painter",
            phoneNumber: "+44 75451233278"
        },
        cost: 10,
        items: [
            {
                itemName: "GPU",
                quantity: 1,
                uuid: "",
                weight: .5
            },
            {
                itemName: "CPU",
                quantity: 1,
                uuid: "",
                weight: .5
            }
        ],
        pickupTime: new Date(2024, 11, 15).getTime()
    }

]


export function getLatestPickups()
{
    return SAMPLE_DATA
}

export function getPickupsFromUser(name: string)
{
    /* During backend implementation, change this to a UUID/Email of a user */
    /* Using a name alone can lead to inaccurate data. Acceptable for sample data though */

    return SAMPLE_DATA.filter(e =>
    {
        let temp = e.contact.firstName + " " + e.contact.lastName
        return temp === name
    }).map(e => e)
}

export function getPickupById(uuid: string)
{
    for (let index = 0; index < SAMPLE_DATA.length; index++)
    {
        const element = SAMPLE_DATA[index];
        if (element.uuid === uuid)
            return element
    }
    return undefined;
}