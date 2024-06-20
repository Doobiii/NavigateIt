import React, { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";
import { Link } from "react-router-dom";

const NavigationInfo = () => {
  const { navigationData } = useContext(NavigationContext);
  console.log(navigationData);
  return (
    <div className="text-center">
      {navigationData ? (
        <div className="p-4 bg-background min-h-screen">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* From and To boxes */}
              <div className="flex flex-col">
                <label htmlFor="from" className="mb-2 font-bold text-primary">
                  From:
                </label>
                <input
                  id="from"
                  type="text"
                  className="p-2 border border-gray-300 rounded"
                  placeholder={navigationData.origin.full_address}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="to" className="mb-2 font-bold text-primary">
                  To:
                </label>
                <input
                  id="to"
                  type="text"
                  className="p-2 border border-gray-300 rounded"
                  placeholder={navigationData.destination.full_address}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {/* Distance, Time, and View Direction boxes */}
              <div className="p-4 border border-gray-300 rounded bg-secondary text-black">
                <h2 className="font-bold">Distance</h2>
                <p>{navigationData.best_routes[0].distance_label}</p>
              </div>
              <div className="p-4 border border-gray-300 rounded bg-secondary text-black">
                <h2 className="font-bold">Time</h2>
                <p>{navigationData.best_routes[0].duration_label}</p>
              </div>
              <div className="p-4 border border-gray-300 rounded bg-secondary text-black">
                <h2 className="font-bold">View Direction</h2>
                <p>
                  <Link to={navigationData.directions_link}>Click here</Link>
                </p>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-4 text-primary">Best Routes</h2>
            <div className="grid grid-cols-1 gap-4">
              {/* Route boxes with dropdown details */}
              {navigationData.best_routes.map((route, index) => (
                <div key={index} className="p-4 border border-gray-300 rounded">
                  <h3 className="font-bold">{route.route_name}</h3>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-[#219c90]">
                      Details
                    </summary>
                    <p>Name: NH-34</p>
                    <p>Distance: {route.distance_label}</p>
                    <p>Time: {route.duration_label}</p>
                    <>
                      Highlight:{" "}
                      {route.highlights && route.highlights.length > 0 ? (
                        <ul>
                          {route.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                      ) : (
                        "Best possible route now"
                      )}
                    </>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>No navigation data available</p>
      )}
    </div>
  );
};

export default NavigationInfo;

// import React, { useContext } from "react";
// import { NavigationContext } from "../context/NavigationContext";

// const NavigationInfo = () => {
//   const { navigationData } = useContext(NavigationContext);
//   console.log(navigationData);
//   return (
//     <div className="text-center">
//       {navigationData ? (
//         <div>
//           <h2 className="text-2xl font-bold mb-4">Navigation Information</h2>
//           <p>
//             <strong>Directions Link:</strong>{" "}
//             <a
//               href={navigationData.directions_link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 underline"
//             >
//               View Directions
//             </a>
//           </p>
//         </div>
//       ) : (
//         <p>No navigation data available</p>
//       )}
//     </div>
//   );
// };

// export default NavigationInfo;
