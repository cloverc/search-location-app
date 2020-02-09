const placeColourMap = {
  A: 'rgb(150, 20, 18)',
  C: 'rgb(10, 99, 176)',
  T: 'rgb(91, 91, 91)',
  D: 'rgb(1, 124, 68)',
  P: 'rgb(241, 199, 76)',
};
const getPlaceColour = placeTypeLetter => placeColourMap[placeTypeLetter] || 'rgb(241, 199, 76);';

export default getPlaceColour;
