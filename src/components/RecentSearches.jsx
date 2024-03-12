import React from "react";

const RecentSearches = ({ recentSearches }) => {
  return (
    <div>
      <h2>Recent Searches</h2>
      <ul>
        {recentSearches.map((search, index) => (
          <li key={index}>
            {search.city}: {search.temperature.toFixed(1)}°C
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
