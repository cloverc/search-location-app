import React from 'react';
import { render } from 'react-dom';

const SearchBox = () => {
  return (
    <>
      <div className="c-searchbox">
        <label htmlFor="pickup-location">Pick-up Location</label>
        <input
          type="text"
          id="pickup-location"
          name="pickup-location"
          placeholder="city, airport, station, region, district..."
          autoComplete="off"
        />
      </div>
    </>
  );
};

export default SearchBox;
