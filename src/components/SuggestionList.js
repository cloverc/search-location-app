import React from 'react';
import getPlaceType from '../utils/getPlaceType';
import getPlaceColour from '../utils/getPlaceColour';

const SuggestionList = ({ locations = [] }) => {
  return (
    <div className="search-results">
      <ol className="list">
        {locations.map((location, i) => (
          <li key={`${i}`} className="item">
            <div
              className="pill-container"
              style={{
                backgroundColor: getPlaceColour(location.placeType),
              }}
            >
              {getPlaceType(location.placeType)}
            </div>
            <div className="location-container">
              {location.name}
              {location.region && location.country && (
                <p className="description">
                  {location.region}, {location.country}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SuggestionList;
