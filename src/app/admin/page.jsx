"use client"
import React, { useState, useEffect } from 'react';
import styles from './admin.module.css'; // For styling

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [contacts, setContacts] = useState([]);
  
  // Fetch users and contacts from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Replace axios with fetch
        const response = await fetch('http://localhost:8000/api/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // Check if the response is okay (status 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Parse the JSON response
        console.log("Data", data)
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array to run once on mount

  const handleUserSelect = (userId) => {
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
    setContacts(selectedUser.contacts);
  };

  return (
    <div className="admin-dashboard">
      <h1>User List</h1>

      {/* Table to display users */}
      <table border="1" style={{ width: '100%', marginTop: '20px', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Info</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.contacts && user.contacts.length > 0 ? (
                    user.contacts.map((contact, index) => (
                      <div key={contact.id}>
                        <p><strong>Phone:</strong> {contact.phone}</p>
                        <p><strong>Address:</strong> {contact.address}</p>
                      </div>
                    ))
                  ) : (
                    <p>No contacts available</p>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
