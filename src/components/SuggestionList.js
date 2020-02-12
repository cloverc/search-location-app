import React from 'react';
import PropTypes from 'prop-types';
import PlaceType from '../components/PlaceType';


const SuggestionList = ({ searchResults = [] }) => {
  return (
    <div className="search-results">
      <ol className="list">
        {searchResults.map(location => (
          <li key={`${location.placeKey}`} className="c-search-results__item">
            <PlaceType type={location.placeType} />
            <div className="c-fts-results__location-container">
              <div className="c-fts-results__location-name">{location.name}</div>

              {location.country && location.region ? (
                <p className="description">
                  {location.region}, {location.country}
                </p>
              ) : (
                <p className="description">{location.country}</p>
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
