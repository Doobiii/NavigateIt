import React, { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";

const NavigationInfo = () => {
  const { navigationData } = useContext(NavigationContext);
  console.log(navigationData);
  return (
    <div className="text-center">
      {navigationData ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Navigation Information</h2>
          <p>
            <strong>Directions Link:</strong>{" "}
            <a
              href={navigationData.directions_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Directions
            </a>
          </p>
        </div>
      ) : (
        <p>No navigation data available</p>
      )}
    </div>
  );
};

export default NavigationInfo;
