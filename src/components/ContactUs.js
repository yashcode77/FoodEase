import React from "react";

const ContactUsPage = () => {
  return (
    <div className="container mx-auto py-8 pt-32 p-12">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Customer Support</h2>
          <p className="text-gray-700">
            If you have any queries or need assistance, our customer support team is available 24/7 to help you.
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-700">support@foodease.com</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-700">1800-123-4567</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Corporate Office</h2>
          <p className="text-gray-700">For corporate inquiries or partnership opportunities, you can reach out to our office.</p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-700">Sarjapur Main Road, Koramangala 1st Block, Bengaluru, Karnataka, India</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-700">corporate@foodease.com</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-700">+91-9876543210</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
