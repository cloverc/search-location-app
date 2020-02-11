import React from 'react';
import PropTypes from 'prop-types';
import getPlaceType from '../utils/getPlaceType';
import getPlaceColour from '../utils/getPlaceColour';

const SuggestionList = ({ searchResults = [] }) => {
  return (
    <div className="search-results">
      <ol className="list">
        {searchResults.map(location => (
          <li key={`${location.placeKey}`} className="c-search-results__item">
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

SuggestionList.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object),
  noResults: PropTypes.bool,
};

export default SuggestionList;
