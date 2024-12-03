"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./profile.module.scss";
import { style } from 'framer-motion/m';

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    first_name: '',
    last_name: '',
    name: '',
    email: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Simulate fetching user data (e.g., from an API or a global state)
  useEffect(() => {
    // Fetch user data (this can be from an API or local storage)
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    if (userData && userData.first_name && userData.last_nam && userData.name && userData.email) {
      setUserDetails(userData);
    }
    setLoading(false);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleLogout = () => {
    // Clear session/local storage or API token
    localStorage.removeItem('user');
    router.push('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userDetails.name || !userDetails.email) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const userId = JSON.parse(localStorage.getItem('userId'))
      // API call to update user data
      const response = await fetch(`http://localhost:8000/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          first_name: userDetails.first_name,
          last_name: userDetails.last_name,
          name: userDetails.name,
          email: userDetails.email,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const data = await response.json();
      
      // If successful, update the user in localStorage (if you need to keep it in sync)
      localStorage.setItem('user', JSON.stringify(data));

      alert('Profile updated successfully!');
    } catch (error) {
      setError('Failed to update profile. Please try again.');
      console.error('Error updating profile:', error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.body}>
    <div className={styles.profile_container}>
      <h1 className={styles.h1}>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
      <div className={styles.form_group}>
          <label htmlFor="first_name" className={styles.label}>First Name:</label>
          <input
            className={styles.input}
            type="text"
            id="first_name"
            name="first_name"
            value={userDetails.first_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="last_name" className={styles.label}>Last Name:</label>
          <input
            className={styles.input}
            type="text"
            id="last_name"
            name="last_name"
            value={userDetails.last_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.button} onSubmit={handleSubmit}>Save Changes</button>
      </form>

      <button onClick={handleLogout} className={styles.logout_button}>
        Log Out
      </button>
    </div>
    </div>
  );
};

export default Profile;
