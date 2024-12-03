"use client";

import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

import MainImage from "../app/images/home/mainimage.jpg";
import Panel1 from "../app/images/home/panel1.png";
import Panel2 from "../app/images/home/panel2.png";
import Panel3 from "../app/images/home/panel3.png";

import Button from "@/components/input/button";
import Link from "next/link";

type Props = {};

function Home({}: Props) {
  return (
    <div className={styles.container}>
      {/* image spans page */}
      <Image
        className={styles.mainImage}
        src={MainImage}
        alt="Electronic recycling"
      />

      {/* rule to separate bottom content - no space from the top image */}
      <hr className={styles.separator} />

      {/* split into three panes, evenly */}
      <div className={styles.panes}>
        {/* panel 1 */}
        <div className={styles.panel}>
          <Image src={Panel1} alt="Icon 1" />
          <h3>Who are we?</h3>
          <p>
            "Electronic Cleaning" is a dedicated service that brings
            high-quality refurbished electronics back into your hands with a
            like-new feel. We believe that extending the life of electronics can
            benefit everyone—whether you’re looking for a reliable device at an
            affordable price or aiming to reduce electronic waste. Our team
            combines technology expertise with a passion for sustainability,
            carefully inspecting, cleaning, and refurbishing each device to meet
            our stringent quality standards before it reaches you.
          </p>
          <div className={styles.buttoncontainer}>
            <Link href="/login">
              <Button clickCallback={() => console.log("Clicked")}>
                Login / Register
              </Button>
            </Link>
          </div>
        </div>

        {/* panel 2 */}
        <div className={styles.panel}>
          <Image src={Panel2} alt="Icon 2" />
          <h3>Services</h3>
          <p>
            Our core services include the sale of expertly refurbished
            electronics, as well as professional electronic cleaning to extend
            the life of your devices. Every product we refurbish goes through a
            detailed restoration process, ensuring that you receive
            high-performance devices at competitive prices. We also offer
            specialized cleaning services for your electronics, which are
            especially useful for removing dirt, dust, and grime buildup that
            can affect device functionality and hygiene.
          </p>
          <div className={styles.buttoncontainer}>
            <Link href="/buy-refurbished">
              <Button clickCallback={() => console.log("Clicked")}>
                Buy Refurbished
              </Button>
            </Link>
            <Link href="/electronic-cleaning">
              <Button clickCallback={() => console.log("Clicked")}>
                Electronic Cleaning
              </Button>
            </Link>
          </div>
        </div>

        {/* panel 3 */}
        <div className={styles.panel}>
          <Image src={Panel3} alt="Icon 3" />
          <h3>Contact Us</h3>
          <p>
            We’d love to hear from you! Whether you have questions about our
            products, want to learn more about our cleaning services, or need
            assistance with an order, our team is here to help. You can reach us
            via email, phone, or by visiting our location. For quick inquiries,
            feel free to send us a message through our website’s contact form,
            and we’ll get back to you as soon as possible. Let’s work together
            to give your electronics a fresh start!
          </p>
          <div className={styles.buttoncontainer}>
            <Link href="/contact-us">
              <Button clickCallback={() => console.log("Clicked")}>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
