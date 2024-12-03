"use client"
import React, {useState, useEffect} from "react";
import styles from "./logout.module.scss";
import { useRouter } from "next/navigation";

function logoutPage (){
  const router = useRouter();

return(
  <div className={styles.centeredContainer}>
    <h1>Logout screen</h1>
  </div>
)
}

export default logoutPage;