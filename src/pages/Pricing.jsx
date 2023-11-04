import React, { useState } from "react";
// import ToggleButton from "../components/toggle";
export default function Pricing() {
  const headers = [
    "What's included in the Essential Plan?",
    "What additional features come with the Pro Plan?",
    "Can I upgrade or downgrade my plan at any time?",
    "Are there any hidden fees or long-term contracts?",
    "What payment methods do you accept?",
    "Is there a free trial available before committing to a plan?",
  ];
  const paragraphs = [
    "The Essential Plan includes fundamental features such as order management, inventory tracking, and basic customer support tools. It's designed for startups and small businesses looking to establish their online presence efficiently.",
    "The Essential Plan includes fundamental features such as order management, inventory tracking, and basic customer support tools. It's designed for startups and small businesses looking to establish their online presence efficiently.",
    "The Essential Plan includes fundamental features such as order management, inventory tracking, and basic customer support tools. It's designed for startups and small businesses looking to establish their online presence efficiently.",
    "The Essential Plan includes fundamental features such as order management, inventory tracking, and basic customer support tools. It's designed for startups and small businesses looking to establish their online presence efficiently.",
    "The Essential Plan includes fundamental features such as order management, inventory tracking, and basic customer support tools. It's designed for startups and small businesses looking to establish their online presence efficiently.",
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
  const [selectedOption, setSelectedOption] = useState("Monthly");

  const toggleOption = () => {
    setSelectedOption(selectedOption === "Monthly" ? "Yearly" : "Monthly");
  };

  const buttonStyle = {
    Monthly: {
      backgroundColor: selectedOption === "Monthly" ? "blue" : "#fff",
      borderRadius: "10px",
      padding: "7px",
      cursor: "pointer",
      color: selectedOption === "Monthly" ? "#FFFFFF" : "#53545C",
    },
    Yearly: {
      backgroundColor: selectedOption === "Yearly" ? "blue" : "#fff",
      borderRadius: "10px",
      padding: "7px",
      cursor: "pointer",
      fontSize: "0.8rem",
    },
  };

  return (
    <div>
      <div className="price-top">
        <div className="price-first">
          <h3>Pricing Plans Tailored to Your Success</h3>
          <p>
            Welcome to Essa's Pricing Page, where your e-commerce success story
            begins. We offer flexible and affordable pricing plans designed to
            cater to businesses of all sizes. Whether you're a startup, a
            growing enterprise, or an established brand
          </p>
          <button className="month-year" onClick={toggleOption}>
            <span style={buttonStyle.Monthly}>Monthly</span>{" "}
            <span style={buttonStyle.Yearly}>Yearly</span>
          </button>
        </div>
        <div className="save">
          <p className="save">Save up to 25% with an Annual Plan</p>
        </div>
      </div>
      <div className="price-list">
        <div className="list-price">
          <h3>Personal</h3>
          <h4>
            $5 <span>p/month</span>{" "}
          </h4>
          <div className="list-flex">
            {" "}
            <div>
              <img src="/images/Vector (7).png" />
            </div>
            <p>1 integration</p>
          </div>
          <div className="list-flex">
            {" "}
            <div>
              <img src="/images/Vector (7).png" />
            </div>
            <p>Analytics</p>
          </div>
          <div className="list-flex">
            {" "}
            <div>
              <img src="/images/Vector (7).png" />
            </div>
            <p>Insight</p>
          </div>
          <div className="list-flex">
            {" "}
            <div>
              <img src="/images/Vector (7).png" />
            </div>
            <p>Insight</p>
          </div>
          <div className="list-flex">
            {" "}
            <div>
              <img src="/images/Vector (8).png" />
            </div>
            <p>Shared features </p>
          </div>
          <div className="list-flex">
            {" "}
            <div>
              <img src="/images/Vector (8).png" />
            </div>
            <p>No custom setting</p>
          </div>
          <div className="button-get">
            {" "}
            <button className="button-get">Get Started</button>
          </div>
        </div>
        <div className="list-price">
          <h3>Professional</h3>
          <h4>
            $10 <span>p/month</span>{" "}
          </h4>
          <div className="list-flex">
            {" "}
            <div>
              <img src="/images/Vector (7).png" />
            </div>
            <p>1 integration</p>
          </div>
          <div className="list-flex">
            {" "}
            <div>
              <img src="/images/Vector (7).png" />
            </div>
            <p>Analytics</p>
          </div>
          <div className="list-flex">
            {" "}
            <div>
              <img src="/images/Vector (7).png" />
            </div>
            <p>Insight</p>
          </div>
          <div className="list-flex">
            {" "}
            <div>
              <img src="/images/Vector (7).png" />
            </div>
            <p>Insight</p>
          </div>
          <div className="list-flex">
            {" "}
            <div>
              <img src="/images/Vector (7).png" />
            </div>
            <p>Shared features </p>
          </div>
          <div className="list-flex">
            {" "}
            <div>
              <img src="/images/Vector (8).png" />
            </div>
            <p>No custom setting</p>
          </div>
          <div className="button-get2">
            <button className="button-get2">Get Started</button>
          </div>
        </div>
        <div className="try">
          <div className="list-price">
            <h3>Business</h3>
            <h4>
              $15 <span>p/month</span>{" "}
            </h4>
            <div className="list-flex">
              {" "}
              <div>
                <img src="/images/Vector (7).png" />
              </div>
              <p>1 integration</p>
            </div>
            <div className="list-flex">
              {" "}
              <div>
                <img src="/images/Vector (7).png" />
              </div>
              <p>Analytics</p>
            </div>
            <div className="list-flex">
              {" "}
              <div>
                <img src="/images/Vector (7).png" />
              </div>
              <p>Insight</p>
            </div>
            <div className="list-flex">
              {" "}
              <div>
                <img src="/images/Vector (7).png" />
              </div>
              <p>Insight</p>
            </div>
            <div className="list-flex">
              {" "}
              <div>
                <img src="/images/Vector (7).png" />
              </div>
              <p>Shared features </p>
            </div>
            <div className="list-flex">
              {" "}
              <div>
                <img src="/images/Vector (7).png" />
              </div>
              <p>No custom setting</p>
            </div>
            <div className="button-get">
              <button className="button-get">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="high-partners">
        <div high-top>
          <h3>High-growth partnership member</h3>
          <p>
            We recognise the extraordinary dedication and commitment of our
            elite partners. As High-Growth Partnership Members.
          </p>
        </div>
        <div className="flex-partners">
          {/* <div className="one-flex">
            <img src="/images/image 5 (1).png" className="one-img" />
            <img src="/images/image 4 (1).png" className="one-img" />
            <img src="/images/image 8 (1).png" className="one-img" />
            <img src="/images/image 9 (2).png" className="one-img" />
            <img src="/images/image 6 (1).png" className="one-img" />
          </div>
          <div className="two-flex">
            <img src="/images/image 7 (1).png" className="two-img" />
            <img src="/images/image 16.png" className="two-img" />
            <img src="/images/image 17.png" className="two-img" />
            <img src="/images/image 18.png" className="two-img" />
            <img src="/images/image 19.png" className="two-img" />
          </div> */}
          <img src="/images/Frame 6312 (1).png" />
        </div>
      </div>

      <div className="faq-area11">
        <div className="faq-11">
          <h3>Frequently Asked Questions (FAQ)</h3>
          <p>
            Welcome to our Pricing FAQs, where we address your questions about
            Essa's pricing plans to help you make an informed decision for your
            e-commerce business.
          </p>
        </div>
        <div className="faq-21">
          <div className="faq-31">
            {headers.map((header, index) => (
              <div
                className="faq-area31"
                key={index}
                onClick={() => toggleParagraph(index)}
              >
                <div className="faq-area21">
                  <div className="faq-header11">
                    {" "}
                    <h3
                      onClick={() => toggleParagraph(index)}
                      style={{
                        cursor: "pointer",
                      }}
                      className="faq-header11"
                    >
                      {header}
                    </h3>
                  </div>
                  <div>
                    {" "}
                    <button
                      className="faq-button11"
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
                  <p className="arrow-para11">{paragraphs[index]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
