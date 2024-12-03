"use client";

import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} Electronic Cleaning. All rights
          reserved.
        </p>
        <ul className={styles.footerLinks}>
          <li>
            <Link href="/detailed-guidelines">Detailed Guidelines</Link>
          </li>
          <li>
            <Link href="/stats">Statistics</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;