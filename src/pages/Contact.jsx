import React from "react-dom";
export default function Contact() {
  return (
    <div className="contact-area">
      <div className="first-contact">
        <div className="contact-first">
          <h2>
            How can <span className="cfispan">ESSA</span> customer support help
            you today
          </h2>
          <p>
            {" "}
            We value your inquiries and feedback. If you have any questions,
            concerns, or if there's anything specific you'd like to know about
            Essa's services, please don't hesitate to get in touch. Our
            dedicated support team is here to assist you.
          </p>
          <div>
            <img src="/images/Frame 6429.png" />
          </div>
        </div>
        <div className="frame-image">
          <img src="/images/Group 26 (1).png" />
        </div>
      </div>
      <div className="empty2"></div>

      <div className="contact-flex">
        <div className="contact-support">
          <h3 className="class1">Customer Support</h3>
          <p>
            For technical assistance, account-related inquiries, or any issues
            you might be facing, our customer support team is available 24/7.
            You can reach them via email, phone, or live chat for prompt and
            efficient assistance.
          </p>
          <h4>Email: support@essa.com </h4>
          <h5>Phone: +1-123-456-7890</h5>
        </div>{" "}
        <div className="contact-support">
          <h3 className="class2">Sales and Partnerships</h3>
          <p>
            If you are interested in learning more about Essa's services,
            discussing partnership opportunities, or getting a customized
            solution for your business, our sales team is ready to assist you.
          </p>
          <h4>Email: sales@essa.com </h4>
          <h5>Phone:+1-234-567-8901</h5>
        </div>
        <div className="contact-support">
          <h3 className="class3">General Inquiries</h3>
          <p>
            If you are interested in learning more about Essa's services,
            discussing partnership opportunities, or getting a customized
            solution for your business, our sales team is ready to assist you.
          </p>
          <h4>
            Email: <span> info@essa.com </span>{" "}
          </h4>
          <h5>Address: 123 Main Street, Cityville, Country.</h5>
        </div>
      </div>
      <div className="text-contact">
        <h3>
          Feel free to reach out through any of these channels, and we'll be
          delighted to assist you. We look forward to hearing from you and
          assisting you with all your e-commerce needs.
        </h3>
      </div>
    </div>
  );
}
