import React from 'react';
import PropTypes from 'prop-types';
import PlaceType from '../components/PlaceType';

const SuggestionList = ({ searchResults }) =>
  searchResults ? (
    <div className="search-results">
      <ol className="list">
        {searchResults.map(result => (
          <li key={`${result.placeKey}`} className="c-search-results__item">
            <PlaceType placetype={result.placeType} />
            <div className="c-fts-results__result-container">
              <div>{result.name}</div>
              {result.country && result.region ? (
                <p className="description">
                  {result.region}, {result.country}
                </p>
              ) : (
                <p className="description">{result.country}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  ) : null;

SuggestionList.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object),
};

export default SuggestionList;
