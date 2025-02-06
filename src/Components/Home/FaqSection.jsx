import { Collapse } from 'antd'
import React from 'react'

export const FaqSection = () => {
    const items = [
        {
          key: "1",
          label: "What is your return policy?",
          children: (
            <p>
              Our return policy allows returns within 30 days of purchase. Items must
              be in original condition with the receipt included.
            </p>
          ),
        },
        {
          key: "2",
          label: "How do I track my order?",
          children: (
            <p>
              You can track your order by logging into your account and navigating to
              the 'My Orders' section. Tracking details will also be sent via email.
            </p>
          ),
        },
        {
          key: "3",
          label: "Do you offer international shipping?",
          children: (
            <p>
              Yes, we offer international shipping to most countries. Shipping rates
              and delivery times vary depending on your location.
            </p>
          ),
        },
        {
          key: "4",
          label: "How can I contact customer support?",
          children: (
            <p>
              You can reach our customer support team by email at support@example.com
              or by phone at 123-456-7890.
            </p>
          ),
        },
      ];
  return (
    <div className="max-w-7xl mx-auto text-white ">
      <h1 className="text-2xl font-semibold text-center lg:mt-16">Faq</h1>

      <Collapse
        defaultActiveKey={["1"]}
        ghost
        items={items}
        expandIconPosition="right"
      />
    </div>
  )
}
