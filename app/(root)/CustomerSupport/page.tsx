import React from 'react';

function CustomerSupport() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Customer Support</h1>

      <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
      <p className="mb-4">
        If you need assistance or have any questions, you can reach out to our customer support team using the following contact information:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Email: <a href="mailto:support@example.com" className="text-blue-500">boostengine001@gmail.com</a></li>
        <li>Phone: +91 7300054285</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h2>
      <p className="mb-4">
        Below are answers to some commonly asked questions:
      </p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">How do I reset my password?</h3>
        <p>
          To reset your password, click on the &quot;Forgot Password&quot; link on the login page and follow the instructions provided.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">How can I upgrade my subscription?</h3>
        <p>
          To upgrade your subscription, log in to your account and visit the subscription page. From there, you can choose the plan you wish to upgrade to and follow the prompts to complete the upgrade process.
        </p>
      </div>

      {/* Additional FAQs can be added similarly */}

      <h2 className="text-xl font-semibold mb-2">Contact Form</h2>
      <p className="mb-4">
        You can also send us a message using the contact form below:
      </p>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message:</label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message"></textarea>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Send Message
        </button>
      </form>

      <p className="mt-4">We strive to respond to all inquiries within 24 hours.</p>
    </div>
  );
}

export default CustomerSupport;
