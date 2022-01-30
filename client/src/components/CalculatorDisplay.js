import React from "react";
import FootprintChart from "./FootprintChart";
import "./CalculatorDisplay.css";
const CalculatorDisplay = ({
  electricityValue,
  carValue,
  dietValue,
  flyingValue,
  totalValue,
}) => {
  const averageAmerican = 15.2;
  const averageIndian = 1.8;
  const averageItalian = 5.4;

  const compareAverage = (total, average) => {
    let percentage = 0;
    if (total >= average) {
      const increase = total - average;
      return (percentage = ((increase / average) * 100).toFixed(2));
    } else {
      const decrease = average - total;
      return (percentage = ((decrease / average) * 100).toFixed(2));
    }
  };

  const americanComparison = compareAverage(totalValue, averageAmerican);
  const indianComparison = compareAverage(totalValue, averageIndian);
  const italianComparison = compareAverage(totalValue, averageItalian);

  return (
    <div id="calculator-display-container">
      <h2>
        {" "}
        You produce{" "}
        {totalValue.toFixed(3) < 6.125 ? (
          <span id="total-value-low">{totalValue.toFixed(3)}</span>
        ) : totalValue.toFixed(3) < 8.0 ? (
          <span id="total-value-average">{totalValue.toFixed(3)}</span>
        ) : (
          <span id="total-value-high">{totalValue.toFixed(3)}</span>
        )}{" "}
        tonnes of CO2 per year.{" "}
      </h2>
      <br />
      <p>
        Compared to the average American you create{" "}
        {totalValue >= averageAmerican ? (
          <span id="span-more">{americanComparison}% more</span>
        ) : (
          <span id="span-less">{americanComparison}% less</span>
        )}{" "}
        CO2.{" "}
      </p>
      <br />
      <p>
        Compared to the average Indian you create{" "}
        {totalValue >= averageIndian ? (
          <span id="span-more">{indianComparison}% more</span>
        ) : (
          <span id="span-less">{indianComparison}% less</span>
        )}{" "}
        CO2.{" "}
      </p>
      <br />
      <p>
        Compared to the average Italian you create{" "}
        {totalValue >= averageItalian ? (
          <span id="span-more">{italianComparison}% more</span>
        ) : (
          <span id="span-less">{italianComparison}% less</span>
        )}{" "}
        CO2.{" "}
      </p>
      <br />

      <FootprintChart
        electricityValue={electricityValue}
        carValue={carValue}
        dietValue={dietValue}
        flyingValue={flyingValue}
      />
    </div>
  );
};

export default CalculatorDisplay;
