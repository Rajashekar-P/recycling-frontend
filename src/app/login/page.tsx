"use client";

import React, {useState, useEffect} from "react";
import styles from "./login.module.scss";
import Text from "@/components/input/text";
import Button from "@/components/input/button";
import Switch from "@/components/input/switch";
import { useRouter } from "next/navigation";
import AlertModal from "@/components/input/alert/AlertModal";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"success" | "error">("success");
  
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setError("");

    if (!email || !password) {
      setError("Please fill both email and password.");
      setModalType("error");
      setTimeout(() => {
        setIsModalOpen(true);  // Delay showing the modal
      }, 300); 
      return;
    }

    try {
      // Make API request to login (replace with actual API endpoint)
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed, please check your credentials.");
      }

      // Get the access token from the response
      const data = await response.json();


      // Store the access_token in localStorage
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('role', data.user.role);

      setIsLoggedIn(true);
     

      // Show success message
      setSuccessMessage("Login successful!");
      setModalType("success");
      window.location.href = "/"
    } catch (error) {
      setError(error.message);
      setModalType("error");
      setTimeout(() => {
        setIsModalOpen(true);  // Delay showing the modal
      }, 300);
    }

  }

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user")
    setIsLoggedIn(false);
    router.push("/"); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className={styles.centeredContainer}>
      <div className={styles.loginContainer}>
        {/* Error and Success messages */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <h2>{isLoggedIn ? "Welcome!" : "Login"}</h2>
        {!isLoggedIn ? (
          <form className={styles.form} onSubmit={handleLogin}>
            <Text
              label="Email"
              placeholder="Enter your Email"
              callback={(value) => setEmail(value)} // Correct way to set state
              settings={{ required: true }}
            />

            <Text
              label="Password"
              placeholder="Enter your password"
              password={true}
              callback={(value) => setPassword(value)} // Correct way to set state
              settings={{ required: true }}
            />

            {/* Login Button */}
            <div>
              <Button buttonType="submit">Login</Button>
            </div>


            {/* Register link */}
            <p className={styles.registerLink}>
              Don't have an account?{" "}
              <a href="/user-registration">Register here</a>
            </p>
          </form>
        ) : (
          <div>
            <p style={{color: "lightgreen", margin: "10px"}}>Hey, You are already Logged In. Please click if logout button if you want</p>
            <Button buttonType="button" clickCallback={handleLogout}>Logout</Button>
          </div>
        )}
      </div>

      <AlertModal
        message={successMessage || error}
        isOpen={isModalOpen}
        type={modalType}
        onClose={closeModal}
      />
    </div>
  );
}

export default LoginPage;
