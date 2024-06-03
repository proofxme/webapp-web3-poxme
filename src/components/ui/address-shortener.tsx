'use client';
import React, { useState } from 'react';

const AddressShortener = ({address}: { address: string }) => {
  const [showFullAddress, setShowFullAddress] = useState(false);

  const toggleTooltip = () => {
    setShowFullAddress(!showFullAddress);
  };

  return (
    <span
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
      onClick={toggleTooltip}
      style={{cursor: 'pointer'}}
    >
      {showFullAddress ? (
        <span className="tooltip">{address}</span>
      ) : (
        <>
          {address.slice(0, 4)}
          ...
          {address.slice(-4)}
        </>
      )}
    </span>
  );
};

export default AddressShortener;
