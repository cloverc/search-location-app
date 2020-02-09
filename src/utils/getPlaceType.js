const placeTypeMap = {
  A: 'Airport',
  C: 'City',
  T: 'Station',
  D: 'District',
  P: 'Region',
};
const getPlaceType = placeTypeLetter => placeTypeMap[placeTypeLetter] || 'Place';

export default getPlaceType;
