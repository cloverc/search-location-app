import React from 'react';
import PropTypes from 'prop-types';

const getPlaceType = (value) => {
    const placeTypeMap = {
        A: 'Airport',
        C: 'City',
        T: 'Station',
        D: 'District',
        I: 'Region',
      }; 
    return placeTypeMap[value] || '';
};
  
const PlaceType = ({type})  => (
    <div className="c-fts-results__pill-container">
      {getPlaceType(type)}
    </div>
);

PlaceType.propTypes = {
    type: PropTypes.string
}

export default PlaceType;
