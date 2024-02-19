import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Imaginify is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, and disclose information when you use our AI image SaaS platform (&quot;Service&quot;).
      </p>

      <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Information You Provide to Us</h3>
        <ul className="list-disc list-inside">
          <li>Account Information: When you sign up for an account, we collect information such as your name, email address, and password.</li>
          <li>Payment Information: If you make purchases through our Service, we collect payment information such as your credit card number and billing address.</li>
          <li>Uploaded Content: We collect images and other content that you upload or submit to our Service.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Information We Collect Automatically</h3>
        <ul className="list-disc list-inside">
          <li>Usage Information: We collect information about your use of the Service, including the features you use, the actions you take, and the duration of your sessions.</li>
          <li>Device Information: We collect information about the devices you use to access our Service, such as device type, operating system, and browser type.</li>
        </ul>
      </div>

      <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        We may use the information we collect for various purposes, including to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide, maintain, and improve our Service.</li>
        <li>Process transactions and fulfill orders.</li>
        <li>Customize and personalize your experience.</li>
        <li>Communicate with you, including sending service-related messages and updates.</li>
        <li>Monitor and analyze trends, usage, and activities.</li>
        <li>Detect, investigate, and prevent fraud and abuse.</li>
        <li>Comply with legal obligations.</li>
      </ul>

      {/* Other sections of the Privacy Policy can be similarly structured */}

      <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or our practices, please contact us at <a href="mailto:contact@example.com" className="text-blue-500">contact@example.com</a>.
      </p>
      
      <p className="mt-4">Last Updated: [Date]</p>
    </div>
  );
}

export default PrivacyPolicy;
