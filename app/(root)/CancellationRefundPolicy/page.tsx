import React from 'react';

function CancellationRefundPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Cancellation & Refund Policy</h1>

      <h2 className="text-xl font-semibold mb-2">Cancellation</h2>
      <p className="mb-4">
        You can cancel your subscription at any time by contacting our customer support team or through your account settings. Upon cancellation, you will continue to have access to the service until the end of your current billing cycle.
      </p>

      <h2 className="text-xl font-semibold mb-2">Refunds</h2>
      <p className="mb-4">
        We offer refunds within 30 days of your initial purchase or renewal date. To request a refund, please contact our customer support team with your purchase details. Refunds will be issued to the original payment method used for the purchase.
      </p>

      <p className="mb-4">
        Please note that certain restrictions may apply to refunds:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Refunds are not available for partial months of service.</li>
        <li>Refunds are not available for services that have been used or accessed during the refund period.</li>
        <li>Refunds are subject to approval and may be denied if the request does not meet our refund criteria.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
      <p>
        If you have any questions or concerns about our Cancellation & Refund Policy, please contact us at <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>.
      </p>

      <p className="mt-4">Last Updated: [Date]</p>
    </div>
  );
}

export default CancellationRefundPolicy;
