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
              className="ui-clyde c-fts-results__pill-container"
              style={{
                backgroundColor: getPlaceColour(location.placeType),
              }}
            >
              {getPlaceType(location.placeType)}
            </div>
            <div className="c-fts-results__location-container">
              <div className="ui-clyde c-fts-results__location-name">{location.name}</div>

              {location.country && location.region ? (
                <p className="ui-clyde description">
                  {location.region}, {location.country}
                </p>
              ) : (
                <p className="ui-clyde description">{location.country}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SuggestionList;
