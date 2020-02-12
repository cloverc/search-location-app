import React from 'react';
import PropTypes from 'prop-types';
import PlaceType from '../components/PlaceType';


const SuggestionList = ({ searchResults }) => searchResults ? (
    <div className="search-results">
      <ol className="list">
        {searchResults.map(location => (
          <li key={`${location.placeKey}`} className="c-search-results__item">
            <PlaceType type={location.placeType} />
            <div className="c-fts-results__location-container">
              <div>{location.name}</div>
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
  ) : null 

SuggestionList.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object)
};

export default SuggestionList;
