import React, { useState } from "react";

function ToggleButton() {
  const [selectedOption, setSelectedOption] = useState("Monthly");

  const toggleOption = () => {
    setSelectedOption(selectedOption === "Monthly" ? "Yearly" : "Monthly");
  };

  const buttonStyle = {
    Monthly: {
      backgroundColor: selectedOption === "Monthly" ? "blue" : "black",
    },
    Yearly: {
      backgroundColor: selectedOption === "Yearly" ? "blue" : "black",
    },
  };

  return (
    <button onClick={toggleOption}>
      <span style={buttonStyle.Monthly}>Monthly</span>{" "}
      <span style={buttonStyle.Yearly}>Yearly</span>
    </button>
  );
}

export default ToggleButton;
