"use client"
import React, { PropsWithChildren, useContext, useState } from 'react'
import User, { getRandomAvatar, UserRole } from './User'
import { v4 as uuidv4 } from 'uuid';

type Props = {} & PropsWithChildren

type UserContextProps = {
  loginTime: number,
  getUser: () => User,
  getUserRole: () => UserRole,
  isLoggedIn: () => boolean,
  login: (user: User) => void
  logout: () => void
}

const initial: UserContextProps = {
  loginTime: -1,
  getUser: () => undefined,
  getUserRole: () => undefined,
  isLoggedIn: () => false,
  login: () => { },
  logout: () => false,
}

const initialUser: User = {
  avatar: getRandomAvatar(),
  email: "",
  firstName: "",
  lastName: "",
  address: "",
  phoneNumber: "",
  userRole: UserRole.NOT_LOGGED,
  uuid: uuidv4()
}

const UserContext = React.createContext(initial);

export function useUserContext()
{
  return useContext(UserContext)
}

function UserContextProvider({ children }: Props)
{
  const [user, setUser] = useState<User>(initialUser);
  const [userTime, setUserTime] = useState(-1);

  const getUser = () => user
  const getUserRole = () => user.userRole
  const isLoggedIn = () => user !== undefined || user.userRole !== UserRole.NOT_LOGGED

  const login = (user: User) =>
  {
    setUser(() => user)
    setUserTime(Date.now())
  }
  const logout = () =>
  {
    setUser(initialUser)
    setUserTime(-1)
  }

  return (
    <UserContext.Provider value={{
      loginTime: userTime,
      getUser, getUserRole, isLoggedIn, login, logout,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider