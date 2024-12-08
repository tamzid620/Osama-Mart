import React from "react";
import { Kanit } from "next/font/google";
import { Mulish } from "next/font/google";

const kanit = Kanit({
  weight: ["400", "700"],
  style: ["normal"],
});
const mulish = Mulish({
  weight: ["300", "700"],
  style: ["normal"],
});

const FrequentlyAskedQuestions = () => {
  return (
    <div className="my-20 lg:px-0 md:px-5 sm: px-3 mx-auto">
      <h1
        className={`${kanit.className} text-4xl text-center mb-10 text-[#F26626]`}
      >
        Frequently Asked Questions
      </h1>
      {/* ---------------------------- Information section ----------------------------  */}
      <div className={`${mulish.className} grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 gap-8 `}>
        
        {/* accordion 1  */}
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border-[#F26626] border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium text-orange-500">
              What is the estimated delivery time for orders?
              </div>
              <div className="collapse-content">
                <p>We aim to deliver your order within 3–7 business days, depending on your location. You'll receive a tracking number to monitor your shipment's progress.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-[#F26626] border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-orange-500">
              What payment methods do you accept?
              </div>
              <div className="collapse-content">
                <p>We accept major credit cards, debit cards, PayPal, and other secure payment gateways to ensure a seamless checkout experience.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-[#F26626] border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-orange-500">
              Can I return or exchange a toy if I'm not satisfied?
              </div>
              <div className="collapse-content">
                <p>Yes, we offer a hassle-free return and exchange policy. Items can be returned or exchanged within 14 days of delivery, provided they are unused and in their original packaging.</p>
              </div>
            </div>
          </div>
        {/* accordion 2  */}
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border-[#F26626] border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium text-orange-500">
              Do you offer gift-wrapping services?
              </div>
              <div className="collapse-content">
                <p>Absolutely! We offer a gift-wrapping option at checkout to make your purchase extra special.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-[#F26626] border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-orange-500">
              Are the toys on your website safe for children?
              </div>
              <div className="collapse-content">
                <p>Yes, all our toys comply with international safety standards and are made from child-friendly materials. Please check product descriptions for recommended age ranges.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-[#F26626] border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-orange-500">
              How can I contact customer support?
              </div>
              <div className="collapse-content">
                <p>You can reach our customer support team via email at [your support email] or through our live chat, available 9 AM–6 PM (local time) on weekdays</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
