import React from 'react';
import { render } from 'react-dom';

const SearchBox = () => {
  return (
    <>
      <div className="">
        <label htmlFor="pickup-location" className="ui-clyde c-form-label">
          Pick-up Location
        </label>
        <input
          className="ui-clyde"
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
