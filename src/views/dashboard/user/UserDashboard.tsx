import React from 'react'

import styles from './userdash.module.scss'
import { useUserContext } from '@/context/user/UserContext'
import Well from '@/components/dashboard/well';
import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt"
import { FaTruckPickup } from "@react-icons/all-files/fa/FaTruckPickup"

import { RiComputerLine } from "@react-icons/all-files/ri/RiComputerLine"


type Props = {}

function UserDashboard({ }: Props)
{
    const { getUser } = useUserContext();
    const { name, } = getUser();

    return (
        <>
            <section className={styles["welcome"]}>
                
            </section>
            <section className={styles["stats"]}>
                {/* <h2 className={styles["stats__header"]}>
                    Your Stats<br />
                    <span className={styles["stats__subtext"]}>We value your commitment to helping the planet</span>
                </h2> */}
                <div className={styles["stats__wells"]}>
                    <Well
                        styles={{
                            wellStyle: {
                                background: "#FFF9BF",
                                borderColor: "#FFF9BF",
                            }
                        }}
                    >
                        <div className={styles["stats__content"]}>
                            <div className={styles["stats__icon"]}>
                                <FaTruckPickup />
                            </div>
                            <div className={styles["stats__text"]}>
                                <span className={styles["stats__subtitle"]}>Total Pickups</span>
                                <span>10 Pickups</span> {/* Make This Dynamic */}
                            </div>
                        </div>
                    </Well>
                    <Well
                        styles={{
                            wellStyle: {
                                background: "#F0C1E1",
                                borderColor: "#F0C1E1",
                            }
                        }}
                    >
                        <div className={styles["stats__content"]}>
                            <div className={styles["stats__icon"]}>
                                <FaCalendarAlt />
                            </div>
                            <div className={styles["stats__text"]}>
                                <span className={styles["stats__subtitle"]}>Next Pickup</span>
                                <span>10th November</span> {/* Make This Dynamic */}
                            </div>
                        </div>
                    </Well>
                    <Well>
                        <div className={styles["stats__content"]}>
                            <div className={styles["stats__icon"]}>
                                <RiComputerLine />
                            </div>
                            <div className={styles["stats__text"]}>
                                <span className={styles["stats__subtitle"]}>Electronics Saved</span>
                                <span>10 Saved</span> {/* Make This Dynamic */}
                            </div>
                        </div>
                    </Well>
                </div>
            </section>
        </>
    )
}

export default UserDashboard