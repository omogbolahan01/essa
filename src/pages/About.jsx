import React from "react-dom";
export default function About() {
  return (
    <div>
      <div className="about-top">
        <div className="about-text">
          <h3>
            Empowering <span> E-commerce</span> Excellence
          </h3>
          <p>
            Our passion for innovation meets the ambition of businesses
            worldwide. We take immense pride in being the architects behind
            thriving e-commerce ventures.
          </p>
        </div>
        <div className="about-image1">
          <img src="/images/Group 22.png" className="image111" />
        </div>
      </div>
      <div className="about-next">
        <div className="about-image2">
          <img src="/images/Group 23.png" />
        </div>
      </div>
      <div className="about-two">
        <h3>Media has their take</h3>
        <div className="about-image3">
          <div className="essa-width">
            <h3>Essa Redefines E-commerce Standards</h3>
            <p>
              Techcrunch raves about Essa's groundbreaking approach to
              e-commerce. In a recent review, they highlighted our platform's
              seamless user experience, robust features, and innovative
              solutions. According to their experts, Essa is reshaping the
              industry landscape, setting new standards for user-friendly
              interfaces and unparalleled support.
            </p>
            <div>
              {" "}
              <img src="/images/image 25 (1).png" alt="" />
            </div>
          </div>
          <div className="essa-width">
            <h3>Essa's Vision for the Future of Online Retail</h3>
            <p>
              Yahoo news dives deep into Essa's vision for the future of online
              retail. They explored our cutting-edge technology, including
              AI-driven customer engagement and predictive analytics. The
              article emphasizes how Essa is not just adapting to the digital
              revolution but actively driving it, making waves in the global
              e-commerce community.
            </p>
            <div>
              {" "}
              <img src="/images/image 25 (3).png" alt="" />
            </div>
          </div>
          <div className="essa-width">
            <h3>Essa's Customer-Centric Approach Garners Praise</h3>
            <p>
              Yahoo news dives deep into Essa's vision for the future of online
              retail. They explored our cutting-edge technology, including
              AI-driven customer engagement and predictive analytics. The
              article emphasizes how Essa is not just adapting to the digital
              revolution but actively driving it, making waves in the global
              e-commerce community.
            </p>
            <div>
              {" "}
              <img src="/images/image 25 (4).png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
