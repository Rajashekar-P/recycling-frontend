"use client";

import Button from "@/components/input/button";
import React, { useEffect, useState } from "react";

type Item = {
  id: number;
  phone: string;
  brand: string;
  clean_level: string;
  email: string;
  device_type: string;
  device_condition: string;
  service_type: string;
  contact_method: string;
  user_id: number;
  status: string; // New status property
};

const ItemsPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/items", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch items.");
        }

        const data = await response.json();
        // Add a default status for each item if not present
        const updatedItems = data.map((item: Item) => ({
          ...item,
          status: item.status || "Pending",
        }));
        setItems(updatedItems);
        setFilteredItems(updatedItems);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = items.filter((item) =>
      item.brand.toLowerCase().includes(query) || // Adjust field for search
      item.status.toLowerCase().includes(query)
    );
    setFilteredItems(filtered);
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    setFilteredItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
    alert("Item Status Updated Successfully");
  };

  if (loading) {
    return <p>Loading items...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1 className="header">Items List</h1>

      <div style={{ marginBottom: "1rem", textAlign: "center" }}>
        <input
          type="text"
          value={searchQuery}
          placeholder="Search items by Brand or Status..."
          onChange={handleSearchChange}
          style={{
            padding: "0.5rem",
            width: "40%",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <table className="striped-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Phone</th>
              <th>Brand</th>
              <th>Email</th>
              <th>Service</th>
              <th>Contact</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                <td>{item.id}</td>
                <td>{item.phone}</td>
                <td>{item.brand}</td>
                <td>{item.email}</td>
                <td>{item.service_type}</td>
                <td>{item.contact_method}</td>
                <td>{item.status}</td>
                <td>
                  <div className="button-group">
                  <Button buttonType="button" type="primary" clickCallback={() => handleStatusChange(item.id, "Pending")}>Pending</Button>
                  <Button buttonType="button" type="success" clickCallback={() => handleStatusChange(item.id, "Approved")}>Approve</Button>
                  <Button buttonType="button" type="warning" clickCallback={() => handleStatusChange(item.id, "Rejected")}>Reject</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <style jsx>{`
        .header{
        text-align: center;
        font-size: 30px;
        }

        .striped-table {
          width: 100%;
          border-collapse: collapse;
          text-align: center;
          margin-top: 1rem;
        }

        .striped-table th,
        .striped-table td {
          border: 1px solid #ddd;
          padding: 8px;
        }

        .striped-table th {
          background-color: #f4f4f4;
          font-weight: bold;
        }

        .striped-table .even-row {
          background-color: #f9f9f9;
        }

        .striped-table .odd-row {
          background-color: #ffffff;
        }

        .striped-table tr:hover {
          background-color: #f1f1f1;
        }

        .button-group {
          display: flex;
          justify-content: center; 
          gap: 10px; /* Adds equal spacing between buttons */
        }
      `}</style>
    </div>
  );
};

export default ItemsPage;
