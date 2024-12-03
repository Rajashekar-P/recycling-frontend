"use client"

import React, { useState } from "react";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 0, // Rating state
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // To show success or error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate a submission delay (e.g., sending data to a server)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success"); // Change this to 'error' for error simulation
      setFormData({
        name: "",
        email: "",
        message: "",
        rating: 0,
      });
    }, 2000); // Simulate a 2-second submission delay
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-purple-300 flex items-center justify-center py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 mb-6">
          We Value Your Feedback
        </h1>

        {/* Display success or error messages */}
        {submitStatus === "success" && (
          <div className="bg-green-100 text-green-800 p-4 mb-6 rounded-md">
            <strong>Thank you!</strong> Your feedback has been submitted
            successfully.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="bg-red-100 text-red-800 p-4 mb-6 rounded-md">
            <strong>Oops!</strong> Something went wrong. Please try again later.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              placeholder="your name"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              placeholder="youremail@example.com"
            />
          </div>

          {/* Rating System */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              Your Rating
            </label>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`cursor-pointer text-xl ${
                    star <= formData.rating
                      ? "text-yellow-500"
                      : "text-gray-400"
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, rating: star }))
                  }
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              Your Feedback
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              placeholder="Please share your feedback..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:bg-gradient-to-l hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
