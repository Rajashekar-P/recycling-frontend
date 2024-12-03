"use client";

import React, { useState, useEffect } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../app/images/logo/logo.png";
import Button from "../input/button";
import { useRouter } from "next/navigation";

type Props = {};

function Navbar({}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const router = useRouter()

  // Check login status and user role when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const role = localStorage.getItem("role"); // Assuming user role is stored in localStorage

    if (token) {
      setIsLoggedIn(true);
      if (role) {
        setUserRole(role);
      }
    } else {
      setIsLoggedIn(false);
      setUserRole(null);
    }
  }, []); // Runs once on mount

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle logout
  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to log out?");
    if (isConfirmed) {
      localStorage.removeItem("access_token"); // Remove the token
      localStorage.removeItem("role"); // Remove the role
      setIsLoggedIn(false); // Update state to logged out
      setUserRole(null); // Clear the role
      alert("You have been logged out successfully.");
    }
    router.push('/login')
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo on the left of the nav */}
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logoImage} alt="logo" />
        </Link>
      </div>

      {/* Links in the center of the nav */}
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>

        {/* Render "Dashboard" link only if the user is an Admin */}
        {userRole === "admin" && <li><Link href="/dashboard">Dashboard</Link></li>}

        <li className={styles.dropdown} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span className={styles.dropdownToggle}>Services</span>
          {isDropdownOpen && (
            <ul className={styles.dropdownMenu}>
              <li><Link href="/buy-refurbished">Buy Refurbished</Link></li>
              <li><Link href="/electronic-cleaning">Electronic Cleaning</Link></li>
            </ul>
          )}
        </li>
        <li><Link href="/items">Items</Link></li>

        <li><Link href="/contact-us">Contact Us</Link></li>
      </ul>

      {/* Display login or profile links depending on whether the user is logged in */}
      {isLoggedIn ? (
        <div>
          <ul className={styles.navLinks}>
            <li><Link href="/profile">Profile</Link></li>
            <li onClick={handleLogout}><Link href="/logout">Logout</Link></li>
          </ul>
        </div>
      ) : (
        <div>
          <ul className={styles.navLinks}>
            <li><Link href="/user-registration">Register</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
