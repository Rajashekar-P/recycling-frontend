"use client";

import React, { useState, useEffect } from 'react';
import styles from './userregistration.module.scss';
import { useRouter } from 'next/navigation'

interface UserFormData {
  first_name: string,
  last_name: string,
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const UserRegistration = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [formData, setFormData] = useState<UserFormData>({
    first_name: '',
    last_name: '',
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.password_confirmation) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      console.log('Registration successful');
      if (isMounted) {
        router.push('/login');
      }
    } catch (err) {
      setError('Failed to register. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <div className={styles.header}>
          <h2>Create Your Account</h2>
          <p>Join our e-recycling community today</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              required
              placeholder="John"
              onChange={handleChange}
              value={formData.first_name}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              required
              placeholder="Doe"
              onChange={handleChange}
              value={formData.last_name}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="John Doe"
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="••••••••"
              onChange={handleChange}
              value={formData.password}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              required
              placeholder="••••••••"
              onChange={handleChange}
              value={formData.password_confirmation}
            />
          </div>


          {error && (
            <div className={styles.error}>{error}</div>
          )}

          <button type="submit" className={styles.submitButton}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;