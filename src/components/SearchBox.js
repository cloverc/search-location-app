import React, { useState } from 'react';
import SuggestionList from './SuggestionList';
import useDebounce from './utils/useDebounce';
import useFetch from './utils/useFetch';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { isSearching, searchResults } = useFetch(debouncedSearchTerm)

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
