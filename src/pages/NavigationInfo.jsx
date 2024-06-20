import React from 'react';

const NavigationInfo = () => {
  return (
    
  );
}

export default NavigationInfo;



<div className="p-4 bg-background min-h-screen">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* From and To boxes */}
          <div className="flex flex-col">
            <label htmlFor="from" className="mb-2 font-bold text-primary">From:</label>
            <input id="from" type="text" className="p-2 border border-gray-300 rounded" placeholder="Enter starting point" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="to" className="mb-2 font-bold text-primary">To:</label>
            <input id="to" type="text" className="p-2 border border-gray-300 rounded" placeholder="Enter destination" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {/* Distance, Time, and View Direction boxes */}
          <div className="p-4 border border-gray-300 rounded bg-secondary text-black">
            <h2 className="font-bold">Distance</h2>
            <p>xx KM</p>
          </div>
          <div className="p-4 border border-gray-300 rounded bg-secondary text-black">
            <h2 className="font-bold">Time</h2>
            <p>xx Hours</p>
          </div>
          <div className="p-4 border border-gray-300 rounded bg-secondary text-black">
            <h2 className="font-bold">View Direction</h2>
            <p>xx Hours</p>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-4 text-primary">Best Routes</h2>
        <div className="grid grid-cols-1 gap-4">
          {/* Route boxes with dropdown details */}
          {['Route 1', 'Route 2', 'Route 3'].map((route, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded">
              <h3 className="font-bold">{route}</h3>
              <details className="mt-2">
                <summary className="cursor-pointer text-[#219c90]">Details</summary>
                <p>Name: NH-34</p>
                <p>Distance: xx KM</p>
                <p>Time: xx Hours</p>
                <p>Highlight: This route is the fastest.</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
