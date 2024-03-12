import React from 'react';

const Temperature = ({ results }) => {
  return (
    <div>
      <h2>Search Results</h2>
      {results.map((result, index) => (
        <div key={index}>
          {result.city}: {result.temperature.toFixed(1)}°C
        </div>
      ))}
    </div>
  );
};

export default Temperature;
