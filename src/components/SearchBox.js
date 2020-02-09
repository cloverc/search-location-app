import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SuggestionList from './SuggestionList';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${searchTerm}`,
      )
      .then(res => {
        // console.log(res.data.results.docs);
        setLocations(res.data.results.docs);
      })
      .catch(() => {
        setLocations([]);
      });
  }, [searchTerm]);

  return (
    <>
      <div className="">
        <label htmlFor="pickup-location" className="ui-clyde c-form-label">
          Pick-up Location
        </label>
        <input
          className="ui-clyde"
          type="text"
          id="pickup-location"
          name="pickup-location"
          placeholder="city, airport, station, region, district..."
          autoComplete="off"
          onChange={e => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        {!!locations.length && <SuggestionList locations={locations} />}
      </div>
    </>
  );
};

export default SearchBox;
