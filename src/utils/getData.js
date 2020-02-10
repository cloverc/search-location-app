import axios from 'axios';

const getData = searchTerm => {
  return(
  axios
    .get(
      `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${searchTerm}`,
    )
    .then(res => {
      // console.log(res.data.results.docs);
      return res;
    })
    .catch(err => {
      return Promise.reject(err);
    })
  );
};

export default getData;
