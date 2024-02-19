import React from 'react';

function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

      <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using our AI image SaaS platform ("Service"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing the Service.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Use License</h2>
      <p className="mb-4">
        Permission is granted to temporarily download one copy of the materials (information or software) on our Service for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. User Content</h2>
      <p className="mb-4">
        Our Service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material ("User Content"). You are responsible for the User Content that you post on or through the Service.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Intellectual Property Rights</h2>
      <p className="mb-4">
        Our Service and its original content (excluding User Content) are and will remain the exclusive property of [Your Company Name] and its licensors. The Service is protected by copyright, trademark, and other laws of both the [Country] and foreign countries.
      </p>

      {/* Additional sections of the Terms of Service can be similarly structured */}

      <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
      <p>
        If you have any questions or concerns about these Terms of Service, please contact us at <a href="mailto:contact@example.com" className="text-blue-500">contact@example.com</a>.
      </p>

      <p className="mt-4">Last Updated: [Date]</p>
    </div>
  );
}

export default TermsOfService;
