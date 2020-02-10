const placeTypeMap = {
  A: 'Airport',
  C: 'City',
  T: 'Station',
  D: 'District',
  I: 'Region',
};
const getPlaceType = placeTypeLetter => placeTypeMap[placeTypeLetter] || '';

export default getPlaceType;
