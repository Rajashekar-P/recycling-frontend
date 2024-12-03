import React, { useEffect } from "react";
import styles from "./alert.module.scss";

interface AlertModalProps {
  isOpen: boolean;
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({ isOpen, message, type, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Optionally, close the modal after a timeout (e.g., 3 seconds)
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer); // Clean up the timer if modal closes before timeout
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={`${styles.modal} ${type === "success" ? styles.success : styles.error}`}>
        <div className={styles.icon}>
          {type === "success" ? "✔️" : "❌"}
        </div>
        <p className={styles.message}>{message}</p>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
