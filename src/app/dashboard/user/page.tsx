"use client"

import React, { CSSProperties, useEffect, useState } from 'react'

import styles from '@/styles/profile.module.scss'
import { useUserContext } from '@/context/user/UserContext'
import Image from 'next/image';
import Text from '@/components/input/text';
import TextArea from '@/components/input/text-area';
import User, { UserRole } from '@/context/user/User';
import Button from '@/components/input/button';
import Modal from '@/components/modal';
import { useModalContext } from '@/context/modal/ModalContext';
import { useRouter, useSearchParams } from 'next/navigation';
import Pickups from '@/components/dashboard/pickups';
import { getPickupsFromUser } from '@/services/pickup/PickupService';
import { getUserByID } from '@/services/user/UserService';

type Props = {}


function Profile({ }: Props)
{
    const params = useSearchParams();
    const router = useRouter();

    const [isEditing, setEditing] = useState(false);
    const { getUser } = useUserContext();
    const { open } = useModalContext();

    const [user, setUser] = useState<User>(getUser())
    const { firstName, lastName, address, phoneNumber, email, avatar, userRole } = user;

    const style: CSSProperties = { color: "black", background: "var(--inputColor)", borderColor: "var(--inputColor)" }

    const showDeletionModal = () => open(<DeleteAccountModal />)
    const enableEdit = () => setEditing(true)
    const saveProfile = () =>
    {
        /* TODO: Save Profile Logic */
        setEditing(false)
    }

    let orders = getPickupsFromUser(firstName + " " + lastName);

    useEffect(() => {
        const fetchUser = async () => {
            if (!params.get("id")) return;
    
            const uuid = params.get("id");
            try {
                const fetchedUser = await getUserByID(uuid);
                if (!fetchedUser || getUser().userRole !== UserRole.ADMIN) {
                    setUser(getUser()); // Fallback to the current user if the fetched user is invalid
                } else {
                    setUser(fetchedUser); // Update with the fetched user
                }
            } catch (error) {
                console.error("Error fetching user:", error);
                setUser(getUser()); // Fallback in case of an error
            }
        };
    
        fetchUser();
    }, [params, getUser]);
    

    const showActions = getUser().userRole === UserRole.ADMIN || user.id === getUser().id

    return (
        <>
            {
                user.userRole !== UserRole.NOT_LOGGED &&
                <>
                    <div className={`${styles["profile"]} ${userRole === UserRole.ADMIN ? styles["profile--admin"] : ""}`}>
                        <div className={styles["profile__avatar"]}>
                            <div className={styles["profile__avatar__wrapper"]}>
                                <Image
                                    src={avatar}
                                    alt='Your Profile Picture'
                                    fill
                                    style={{
                                        borderRadius: "50%",
                                        objectFit: "contain",
                                        border: "3px solid var(--badgeBorderColor)",
                                        boxShadow: "0 0 30px rgba(0,0,0,0.25)"
                                    }}
                                />
                                <span className={styles["profile__badge"]}>{userRole}</span>
                            </div>
                        </div>
                        <div className={styles["profile__information"]}>
                            <div className={styles["profile__information__content"]}>

                                <div className={styles["row"]}>
                                    <Text label='First Name' placeholder={firstName} settings={{ disabled: !isEditing }} style={{ textInputStyle: style }} />
                                    <Text label='Last Name' placeholder={lastName} settings={{ disabled: !isEditing }} style={{ textInputStyle: style }} />
                                </div>
                                <div className={styles["row"]}>
                                    <Text label='Email Address' placeholder={email} settings={{ disabled: !isEditing }} style={{ textInputStyle: style }} />
                                    <Text label='Phone Number' placeholder={phoneNumber} settings={{ disabled: !isEditing }} style={{ textInputStyle: style }} />
                                </div>
                                <div className={styles["row"]}>
                                    <TextArea
                                        label='Address'
                                        placeholder={address}
                                        settings={{ disabled: !isEditing }}
                                        style={{ textAreaStyle: style }}
                                    />
                                </div>
                            </div>
                            {
                                showActions &&
                                <div className={`${styles["profile__controls"]}`} style={{
                                    justifyContent: "flex-end",
                                    gap: "1rem"
                                }}>
                                    {
                                        isEditing ?
                                            <Button buttonType='button' type='success' clickCallback={saveProfile} >
                                                Save
                                            </Button> :
                                            <Button buttonType='button' type='warning' clickCallback={enableEdit} >
                                                Edit
                                            </Button>
                                    }
                                    {
                                        showActions &&
                                        <Button buttonType='button' type='error' clickCallback={showDeletionModal}>Delete</Button>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                    <div className={styles["pickups"]}>
                        {
                            orders.length > 0 &&
                            <>
                                <h2>Pickups</h2>
                                <Pickups pickups={orders} />
                            </>
                        }
                    </div>
                </>
            }

        </>
    )
}

function DeleteAccountModal()
{

    const { close } = useModalContext();
    const { push } = useRouter();

    const deleteAccount = () =>
    {
        /* TODO: Make delete account logic */
        close();

        push("/")
    }

    return (
        <Modal settings={{ closeCallback: close }}
            style={{
                modalStyle: {
                    width: "fit-content",
                    minWidth: "0"
                },
                headerStyle: {
                    background: "#C7253E"
                },
                buttonStyle: {
                    background: "#C7253E"
                }
            }}
        >
            <div className={styles["delete-modal"]}>

                <div className={styles["delete-modal__warning"]}>
                    <h1>Are you sure you want to delete this account?</h1>
                    <p>
                        Once an account is deleted, it is permanently gone and cannot be accessed again.<br />
                        You could lose access to your scheduled pickups and any help needed.<br />
                        We don't want to lose you!
                    </p>
                </div>
                <div className={styles["delete-modal__submission"]}>
                    <span className={styles["delete-modal__confirmation"]}>To confirm deletion, enter your email address</span>
                    <Text label='Email Address' settings={{ required: true }} />
                    <Button buttonType='button' type='error' clickCallback={deleteAccount}>Delete Account</Button>
                </div>
            </div>
        </Modal>
    )
}

export default Profile