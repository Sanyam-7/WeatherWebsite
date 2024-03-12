import React from 'react';

const Zip = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter Zipcode"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Zip;
