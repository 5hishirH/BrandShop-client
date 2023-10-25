import React from "react";

const FrequentQ = () => {
  return (
    <div className="w-11/12 mx-auto mt-28 p-6 rounded-xl border-2 border-some_green">
      <h2 className="text-4xl text-center font-bold">
        Frequently Asked Questions
      </h2>
      <div className="pl-4 mt-6">
        <ol className="list-decimal">
          <li>
            <h3 className="text-xl font-bold mt-4">
              How can I track the status of my order?
            </h3>
            <p>
              To track your order, visit our website and log in to your account.
              You can view the order status, estimated delivery date, and
              shipping details in the "Order History" section. Additionally, you
              will receive email updates with tracking information as your order
              progresses.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-bold  mt-4">
              What is your return and exchange policy?
            </h3>
            <p>
              We offer a hassle-free return and exchange policy. If you are not
              satisfied with your purchase, you can return or exchange items
              within 30 days of delivery. Please ensure the items are in their
              original condition with tags attached. For detailed instructions,
              visit our "Returns and Exchanges" page.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-bold  mt-4">
              Do you offer international shipping?
            </h3>
            <p>
              Yes, we offer international shipping to many countries. During the
              checkout process, you can select your location to view the
              available shipping options and costs. Please note that
              international shipping may take longer and additional customs fees
              may apply.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-bold  mt-4">
              How can I find the right size for my clothing?
            </h3>
            <p>
              To find the perfect size, refer to our detailed size chart
              provided on each product page. It includes measurements for
              various sizes to help you choose the one that fits you best. If
              you're still unsure, feel free to contact our customer support
              team for personalized sizing advice.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-bold mt-4">
              What payment methods do you accept?
            </h3>
            <p>
              We accept a variety of payment methods, including credit and debit
              cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.
              Your payment information is securely processed, and we do not
              store any card details for your security.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default FrequentQ;
