import { v4 as uuidv4 } from 'uuid';

export type User = {
    id: string,
    firstName: string,
    lastName:string,
    email: string,
    avatar: string,
    address: string,
    phoneNumber: string,
    userRole: UserRole
}

export enum UserRole
{
    NOT_LOGGED = "UNDEFINED",
    USER = "User",
    ADMIN = "Admin"

}

/* Avatars randomly created by Dicebear. Documentation: https://www.dicebear.com/introduction/ */
const API_URL = "https://api.dicebear.com/9.x"
const VARIANTS = ["thumbs", "dylan", "initials", "personas"]

export function getRandomAvatar(): string
{
    return `${API_URL}/${VARIANTS[Math.floor(Math.random() * VARIANTS.length)]}/png?seed=${uuidv4()}&size=256`
}

export default User