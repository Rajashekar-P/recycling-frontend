"use client";

import React, { useState } from "react";
import styles from "./electroniccleaning.module.scss";

import Image from "next/image";

import cleaning1 from "../images/electronic-cleaning/cleaning1.webp";
import cleaning2 from "../images/electronic-cleaning/cleaning2.webp";
import Button from "@/components/input/button";
import { useModalContext } from "@/context/modal/ModalContext";
import Modal from "@/components/modal";

import Text from "@/components/input/text";
import Select, { SelectOption } from "@/components/input/select/Select";
import TextArea from "@/components/input/text-area";

type Props = {
  close: () => void;
};

function ElectronicCleaning({}: Props) {
  let modalController = useModalContext();

  const openModal = () => {
    modalController.open(<TestModal close={modalController.close} />);
  };

  return (
    <div className={styles.container}>
      {/* Section 1: Left Text, Right Image */}
      <div className={styles.section}>
        <div className={styles.text}>
          <h2>Professional Electronic Cleaning</h2>
          <p>
            Our electronic cleaning service goes beyond just wiping down
            surfaces; we provide deep, meticulous cleaning tailored to sensitive
            technology. Dust, dirt, and grime that accumulate in devices over
            time can impair performance, causing overheating and even hardware
            damage. Our specialized cleaning techniques remove these
            contaminants from every crevice, protecting your equipment and
            extending its lifespan. With our expert service, you can expect your
            devices to look rejuvenated, feel fresh, and perform optimally, just
            like new. Whether it's a computer, smartphone, or audio device, we
            handle your tech with care and precision.
          </p>
        </div>
        <div className={styles.image}>
          <Image src={cleaning1} alt="Electronic Cleaning" />
        </div>
      </div>

      {/* Section 2: Left Image, Right Text */}
      <div className={styles.section}>
        <div className={styles.image}>
          <Image src={cleaning2} alt="Electronic Cleaning" />
        </div>
        <div className={styles.text}>
          <h2>Refurbishment and Restoration</h2>
          <p>
            Our refurbishment and restoration service is dedicated to breathing
            new life into your electronics. We begin with a detailed inspection
            to identify wear, replace or repair components, and ensure
            everything functions smoothly. Our eco-friendly approach reduces
            waste by repurposing functional parts and using sustainable
            materials, making your device look and operate as if it's straight
            out of the box. Through our attention to detail and commitment to
            quality, we offer a reliable solution that not only enhances the
            appearance of your device but also ensures it can withstand daily
            use for years to come.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className={styles.section}>
        <div className={styles.text}>
          <h2>Why Choose Us for Your Electronic Cleaning?</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              gap: "1.5rem",
            }}
          >
            <p>
              When you choose our services, you're opting for quality,
              sustainability, and expertise. We ensure that your electronics are
              not only cleaned and refurbished to their best condition but also
              responsibly handled to reduce waste. With our trusted,
              eco-conscious process, your devices get a second life, and you
              contribute to a cleaner, greener future.
            </p>
            <Button clickCallback={openModal}>Clean my electronics</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Honestly, all of the below deserves its own file.
// womp womp.

const deviceTypeOptions: SelectOption[] = [
  { name: "Laptop", value: "laptop" },
  { name: "Phone", value: "phone" },
  { name: "Tablet", value: "tablet" },
];

const deviceConditionOptions: SelectOption[] = [
  { name: "Good", value: "good" },
  { name: "Moderate", value: "moderate" },
  { name: "Heavy Wear", value: "heavyWear" },
];

const serviceTypeOptions: SelectOption[] = [
  { name: "Cleaning", value: "cleaning" },
  { name: "Refurbishing", value: "refurbishing" },
  { name: "Repair", value: "repair" },
  { name: "Selling", value: "selling" },
];

const contactMethodOptions: SelectOption[] = [
  { name: "Email", value: "email" },
  { name: "Phone", value: "phone" },
  { name: "Text", value: "text" },
];

function TestModal({ close }: Props) {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (fieldName: string, value: string) => {
    setState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form submitted", state); // Debugging log
    setError(null);

    // Validation: Check required fields
    if (!state["Email"]) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      if (!response.ok) {
        throw new Error("Failed to create item. Please try again.");
      }

      const data = await response.json();
      console.log("API Response:", data); // Debugging log

      alert("Item submitted successfully!");
      close(); // Close the modal on success
    } catch (err) {
      console.error(err); // Debugging log
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal settings={{ closeCallback: close }}>
      <h1>Electronic Cleaning Quote Form</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <Text
          label="Name"
          placeholder="Enter your full name"
          callback={(e) => handleInputChange("Name", e)}
          settings={{ required: true }}
        />

        <Text
          label="Email Address"
          placeholder="Enter your email"
          callback={(e) => handleInputChange("Email", e)}
          settings={{ required: true }}
        />

        <Text
          label="Phone Number"
          placeholder="Enter your phone number"
          callback={(e) => handleInputChange("PhoneNumber", e)}
        />

        <Select
          label="Device Type"
          options={deviceTypeOptions}
          callback={(e) => handleInputChange("DeviceType", e)}
          settings={{ required: true }}
        />

       <Text
          label="Brand and Model"
          placeholder="Enter device brand and model"
          callback={(e) => handleInputChange("BrandAndModel", e)}
          settings={{ required: true }}
        />

        <Select
          label="Device Condition"
          options={deviceConditionOptions}
          callback={(e) => handleInputChange("DeviceCondition", e)}
          settings={{ required: true }}
        />

        <TextArea
          label="Issues to Address"
          placeholder="Describe any issues with your device"
          callback={(e) => handleInputChange("IssuesToAddress", e)}
        />

        <Select
          label="Service Type"
          options={serviceTypeOptions}
          callback={(e) => handleInputChange("ServiceType", e)}
          settings={{ required: true }}
        />

        <Select
          label="Preferred Cleaning Level"
          options={[
            { name: "Basic", value: "basic" },
            { name: "Deep Cleaning", value: "deepCleaning" },
          ]}
          callback={(e) => handleInputChange("PreferredCleaningLevel", e)}
        />

        <Select
          label="Preferred Contact Method"
          options={contactMethodOptions}
          callback={(e) => handleInputChange("PreferredContactMethod", e)}
        />

        <TextArea
          label="Additional Comments or Special Requests"
          placeholder="Enter any additional information"
          callback={(e) => handleInputChange("AdditionalComments", e)}
        />

        <div className={styles["buttons"]}>
          <Button buttonType="submit">
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}


export default ElectronicCleaning;
