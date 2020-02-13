import React from 'react';
import PropTypes from 'prop-types';

const getPlaceType = value => {
  const placeTypeMap = {
    A: 'Airport',
    C: 'City',
    T: 'Station',
    D: 'District',
    I: 'Region',
    F: 'Region',
    G: 'Place',
  };
  return placeTypeMap[value] || '';
};

const PlaceType = ({ placetype }) => (
  <div className="c-fts-results__pill-container">{getPlaceType(placetype)}</div>
);

PlaceType.propTypes = {
  placetype: PropTypes.string,
};

export default PlaceType;
