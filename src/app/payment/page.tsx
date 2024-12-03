"use client"

import React, { useState } from 'react';

import visa from "../images/payment/visa.png"
import americanexpress from "../images/payment/american.png"
import mastercard from "../images/payment/mastercard.png"
import paypal from "../images/payment/paypal.png"

import Image from 'next/image';

const Payment = () => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment Submitted Successfully!');
    // Here you can integrate with payment APIs like Stripe, PayPal, etc.
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-300 to-pink-500 flex items-center justify-center py-12">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-2xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Payment Information</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              placeholder="card holder name"
            />
          </div>

          {/* Card Number Input */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              placeholder="1234 5678 9876 5432"
              maxLength={19}
            />
          </div>

          {/* Expiry Date and CVV */}
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-sm font-semibold text-gray-700">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 mt-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                placeholder="MM/YY"
                maxLength={5}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-semibold text-gray-700">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 mt-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                placeholder="123"
                maxLength={3}
              />
            </div>
          </div>

          {/* Payment Method Icons */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-4">
              <Image
                src={visa}
                alt="Visa"
                className="w-12 h-8"
              />
              <Image
                src={mastercard}
                alt="MasterCard"
                className="w-12 h-8"
              />
              <Image
                src={americanexpress}
                alt="American Express"
                className="w-12 h-8"
              />
              <Image
                src={paypal}
                alt="PayPal"
                className="w-12 h-8"
              />
            </div>
            <span className="text-xs text-gray-500">Accepted Cards</span>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:bg-gradient-to-l hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out"
            >
              Submit Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
