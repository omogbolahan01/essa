import React, { useState } from "react";
import Swiper from "../../swiper";
export default function Home() {
  const headers = [
    "What is Essa?",
    "How can Essa benefit my business?",
    "Is Essa suitable for small businesses?",
    "Is my data secure with Essa?",
    "Can I integrate Essa with other tools?",
    "How is customer support handled with Essa?",
  ];
  const paragraphs = [
    "Essa is a powerful e-commerce SaaS platform designed to streamline online store management. It offers features like CRM, inventory management, order processing, and customer support tools, empowering businesses to thrive in the digital marketplace.",
    "Essa is a powerful e-commerce SaaS platform designed to streamline online store management. It offers features like CRM, inventory management, order processing, and customer support tools, empowering businesses to thrive in the digital marketplace.",
    "Essa is a powerful e-commerce SaaS platform designed to streamline online store management. It offers features like CRM, inventory management, order processing, and customer support tools, empowering businesses to thrive in the digital marketplace.",
    "Essa is a powerful e-commerce SaaS platform designed to streamline online store management. It offers features like CRM, inventory management, order processing, and customer support tools, empowering businesses to thrive in the digital marketplace.",
    "Essa is a powerful e-commerce SaaS platform designed to streamline online store management. It offers features like CRM, inventory management, order processing, and customer support tools, empowering businesses to thrive in the digital marketplace.",
    "Essa is a powerful e-commerce SaaS platform designed to streamline online store management. It offers features like CRM, inventory management, order processing, and customer support tools, empowering businesses to thrive in the digital marketplace.",
  ];
  const [activeParagraph, setActiveParagraph] = useState(
    Array(headers.length).fill(false)
  );

  const toggleParagraph = (index) => {
    if (activeParagraph === index) {
      setActiveParagraph(null); // Close the currently open paragraph
    } else {
      setActiveParagraph(index); // Open the clicked paragraph
    }
  };
  return (
    <div className="home-page">
      <div className="top-first">
        <div className="top-image">
          <img src="/images/image 1.png" className="top-img1" />
          <img src="/images/image 3.png" className="top-img2" />
        </div>
        <h2>
          Take Your <span>E-Commerce </span>Business Online With Essa
        </h2>
        <p>
          We provide the ultimate SaaS platform to help you manage, grow and
          optimize your online store
        </p>
        <div className="try-button">
          <button className="three">Try for free</button>
          <button className="four">Contact sales</button>
        </div>
      </div>
      <div className="home-image">
        <img src="/images/Frame 6301.png" />
      </div>
      <div className="partner">
        <h3>The platform fuelling today’s high-growth revenue teams</h3>
        <div className="partner-flex">
          <img src="/images/Frame 6312.png" />
          {/* <img src="/images/image 5.png" />
          <img src="/images/image 4.png" />
          <img src="/images/image 8.png" />
          <img src="/images/image 9.png" />
          <img src="/images/image 6.png" />
          <img src="/images/image 7.png" /> */}
        </div>
      </div>
      <div className="robust-area">
        <div className="robuss">
          <h2>Robust Tools to Run Your Store</h2>
          <p>
            Centralize operations, gain insights, and scale your ecommerce
            business with our powerful features.
          </p>
        </div>
        <div className="robust-flex">
          <div className="robust-flex1">
            <div className="robust-block">
              <img src="/images/shape-2-fill.png" />
              <h3>Order Management</h3>
              <p>
                Manage and fulfill orders efficiently with our automated
                workflow.
              </p>
            </div>
            <div className="robust-block">
              <img src="/images/equalizer-fill.png" />
              <h3>Inventory Control</h3>
              <p>
                Stay on top of inventory with real-time tracking and low stock
                alerts.
              </p>
            </div>
            <div className="robust-block">
              <img src="/images/bank-card-line.png" />
              <h3>Payment Processing</h3>
              <p>Seamlessly process transactions and accept payments online.</p>
            </div>
          </div>
          <div className="flex-2">
            <div className="robust-block">
              <img src="/images/shopping-basket-line.png" />
              <h3>Shipping Integration</h3>
              <p>
                Connect with all major carriers to calculate real-time shipping
                rates.
              </p>
            </div>
            <div className="robust-block">
              <img src="/images/wallet-2-line.png" />
              <h3>POS Integration</h3>
              <p>
                Sync your brick-and-mortar and online store with unified data.
              </p>
            </div>
            <div className="robust-block">
              <img src="/images/line-chart-line.png" />
              <h3>Analytics Dashboard</h3>
              <p>
                Gain insights with custom reports and metrics on sales, traffic,
                conversions and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="online-store">
        <h2>Revolutionize Your Online Store Management</h2>
        <p>
          "Experience a Paradigm Shift in E-Commerce: Revolutionize Your Online
          Store Management with Our Cutting-Edge Solutions for Streamlined
          Operations, Enhanced Customer Experiences, and Unmatched Business
          Growth."
        </p>
      </div>
      <div className="imagess">
        <div className="image-1">
          <img src="/images/Frame 6331.png" className="image1" />
          <img src="/images/Frame 6332.png" className="image2" />
        </div>
        <div className="image-2">
          <img src="/images/Frame 6333.png" className="image3" />
          <img src="/images/Frame 6334.png" className="image4" />
        </div>
      </div>
      <div className="security-area">
        <div className="security-side">
          <img src="/images/Frame 6354.png" />
        </div>
        <div className="security-details">
          <img src="/images/Frame 6355.png" />
          {/* <div className="security-flex">
            <div className="security1">
              <div className="security-block">
                <h3>State-of-the-Art Encryption</h3>
                <p>
                  "Experience a Paradigm Shift in E-Commerce: Revolutionize Your
                  Online Store Management with Our Cutting-Edge Solutions for
                  Streamlined Operations, Enhanced Customer Experiences, and
                  Unmatched Business Growth."
                </p>
              </div>
              <div className="security-block">
                <h3>Secure Payment Gateways</h3>
                <p>
                  Our integrated payment gateways are highly secure, ensuring
                  that all transactions are processed with the utmost
                  confidentiality. We partner with trusted payment service
                  providers to guarantee the safety of your financial data,
                  allowing you to focus on your business while we handle the
                  transactions securely.
                </p>
              </div>
              <div className="security-block">
                <h3>Data Access Control</h3>
                <p>
                  We implement strict access control measures to ensure that
                  only authorized personnel within your organization can access
                  specific data. Role-based access allows you to define who can
                  view or modify sensitive information, providing an additional
                  layer of security for your data.
                </p>
              </div>
            </div>

            <div className="security2">
              <div className="security-block">
                <h3>Regular Security Updates</h3>
                <p>
                  Our dedicated team of security experts conducts regular
                  security audits and assessments to identify and address
                  potential vulnerabilities. We stay up-to-date with the latest
                  security protocols and technologies, ensuring that your data
                  remains protected against evolving threats.
                </p>
              </div>
              <div className="security-block">
                <h3>Compliance with Data Protection </h3>
                <p>
                  Our integrated payment gateways are highly secure, ensuring
                  that all transactions are processed with the utmost
                  confidentiality. We partner with trusted payment service
                  providers to guarantee the safety of your financial data,
                  allowing you to focus on your business while we handle the
                  transactions securely.
                </p>
              </div>
              <div className="security-block">
                <h3>24/7 Monitoring and Response </h3>
                <p>
                  Our systems are continuously monitored for any suspicious
                  activities. In the rare event of a security breach, we have a
                  robust incident response plan in place to minimize damage and
                  swiftly address the situation, keeping your data and
                  operations secure.
                </p>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
      <div className="build-areas">
        <div className="build-area">
          <h2>Break Free and Unleash Your Potential</h2>
          <p>
            Experience Ultimate Flexibility – Work Seamlessly Across Desktops,
            Tablets, and Mobile Devices. With our innovative solutions, you can
            now unleash your creativity and productivity anytime, anywhere.
            Seamlessly transition between your desktop, tablet, and mobile
            devices, allowing your work to move with you effortlessly.{" "}
          </p>
        </div>

        <div className="build-diagram">
          <img src="/images/Group 4 (1).png" alt="" />
        </div>
      </div>
      <div className="faq-area">
        <div className="faq-1">
          <h3>Frequently Asked Questions (FAQ)</h3>
          <p>
            Welcome to our FAQ section! Here, we've compiled answers to common
            queries about Essa to provide you with quick and comprehensive
            information. If you have a question that isn't listed here, please
            feel free to contact our support team.
          </p>
        </div>
        <div className="faq-2">
          <div className="faq-3">
            {headers.map((header, index) => (
              <div
                className="faq-area3"
                key={index}
                onClick={() => toggleParagraph(index)}
              >
                <div className="faq-area2">
                  <div className="faq-header">
                    {" "}
                    <h3
                      onClick={() => toggleParagraph(index)}
                      style={{
                        cursor: "pointer",
                      }}
                      className="faq-header"
                    >
                      {header}
                    </h3>
                  </div>
                  <div>
                    {" "}
                    <button
                      className="faq-button"
                      onClick={() => toggleParagraph(index)}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <img src="/images/arrow-right-line.png" />
                    </button>
                  </div>
                </div>

                {activeParagraph === index && (
                  <p className="arrow-para">{paragraphs[index]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="client-area">
        <div className="client-text">
          <h3>Client Success Stories</h3>
          <p>
            Discover how businesses similar to yours soared to new heights of
            success with [Your Company Name], showcasing the unparalleled
            potential of our innovative solutions and unwavering support.
          </p>
        </div>
        <div className="swipers">
          <div>
            <Swiper />
          </div>
        </div>
      </div>
    </div>
  );
}
