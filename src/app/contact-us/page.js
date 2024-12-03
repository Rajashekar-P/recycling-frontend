import React from "react";

const ContactUs = () => {
  return (
    <div className="p-8">
      <div className="flex flex-col items-center p-8 bg-white max-w-md mx-auto rounded-lg shadow-lg">
        <h1 className="text-blue-600 text-sm font-semibold text">Contact Us</h1>
        <p className="text-gray-500 text-center mb-8">Electronic Recycling</p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gray-100 rounded-full">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.85 0-3.58-.63-4.95-1.69l1.45-1.45c1.04.81 2.36 1.29 3.5 1.29 2.76 0 5-2.24 5-5 0-1.14-.48-2.46-1.29-3.5l1.45-1.45C17.37 8.42 18 10.15 18 12c0 3.31-2.69 6-6 6zm1-9h-2V7h2v4zm0 2h-2v2h2v-2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Our Location</p>
              <p className="text-gray-500 text-sm">Manchester,United Kingdom</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gray-100 rounded-full">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 15.5c-1.25 0-2.45-.2-3.55-.6-.2-.1-.42-.02-.53.15l-2.2 3.4c-3.28-1.34-5.94-4.01-7.28-7.28l3.4-2.2c.17-.11.25-.33.15-.53-.4-1.1-.6-2.3-.6-3.55 0-.28-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5C3 16.15 7.85 21 14 21h3c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Phone Number</p>
              <p className="text-gray-500 text-sm">(+44)81 414 257 9980</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gray-100 rounded-full">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2 12H6v-1h12v1zm0-3H6v-1h12v1zm0-3H6V9h12v1z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Email Address</p>
              <p className="text-gray-500 text-sm">
                info@electronicrecycling.com
              </p>
            </div>
          </div>
        </div>

        <form className="w-full space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
