import React, { useState, useEffect } from 'react';
import SuggestionList from './SuggestionList';
import useDebounce from './utils/useDebounce';
import getData from './utils/getData';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm.length > 1) {
      setIsSearching(true);
      getData(debouncedSearchTerm).then(res => {
        setIsSearching(true);
        setSearchResults(res.data.results.docs);
      });
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <div className="c-searchbox__container">
        <label htmlFor="pickup-location" className="ui-clyde c-form__label">
          Pick-up Location
        </label>
        <div className="c-form-field__label">
          <input
            className="ui-clyde"
            type="text"
            id="pickup-location"
            name="pickup-location"
            placeholder="city, airport, station, region, district..."
            autoComplete="off"
            onChange={handleChange}
            value={searchTerm}
          />
          {isSearching && <SuggestionList searchResults={searchResults} />}
        </div>
      </div>
    </>
  );
};

export default SearchBox;
