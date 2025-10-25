import React from 'react';
// You can import your social icons as SVG/components or use emoji for placeholder

export default function Footer() {
  return (
    <footer className="bg-[#060606] w-full pt-14 pb-2 px-6 flex flex-col">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between gap-8 border-b border-[#232347] pb-9">
        {/* Brand + About */}
        <div className="flex-1 min-w-[210px]">
          <div className="font-bold text-white text-[18px] mb-2">UzOPay</div>
          <p className="text-[#bcbccb] text-sm leading-relaxed mb-3">
            Our payment gateway simplifies transactions for e-commerce businesses, delivering fast and secure processing. With smooth integration, we enhance your store’s payment capabilities. Optimize your checkout process and boost customer satisfaction easily.
          </p>
          <div className="flex gap-3 mt-4">
            <button className="w-8 h-8 flex items-center justify-center bg-[#191e33] text-[#bcbccb] rounded-full hover:bg-[#26294b]">
              {/* Replace below with your icon */}
              <span>🔗</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-[#191e33] text-[#bcbccb] rounded-full hover:bg-[#26294b]">
              <span>✖</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-[#191e33] text-[#bcbccb] rounded-full hover:bg-[#26294b]">
              <span>📷</span>
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-white font-medium mb-2">Payment</div>
            <ul className="text-[#bcbccb] text-[15px] space-y-2">
              <li>Payment Gateway</li>
              <li>Payment Links</li>
              <li>Payment Methods</li>
              <li>Bulk Payment</li>
              <li>Invoice</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-2">AI Banking</div>
            <ul className="text-[#bcbccb] text-[15px] space-y-2">
              <li>Current Account</li>
              <li>Accounting</li>
              <li>API Banking</li>
              <li>UPI Autopay</li>
              <li>Tax Payment</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-2 invisible">Layout</div>
            <ul className="text-[#bcbccb] text-[15px] space-y-2">
              <li>Cards</li>
              <li>CMS</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-2">Company</div>
            <ul className="text-[#bcbccb] text-[15px] space-y-2">
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright & Policies */}
      <div className="flex flex-col md:flex-row justify-between items-center text-[#888b9f] text-xs py-2 max-w-7xl w-full mx-auto">
        <div className="mb-1 md:mb-0">&copy; 2025 UzOPay</div>
        <div className="flex items-center text-[14px] gap-6">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <button className="ml-4 w-8 h-8 rounded-full bg-[#292c3f] flex items-center justify-center text-white hover:bg-[#464a6d]">
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
