import { useState, useEffect } from 'react';

const useDebounce = (searchTerm, delay) => {

  const [debouncedValue, setDebouncedValue] = useState(searchTerm);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(searchTerm);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [searchTerm] 
  );

  return (debouncedValue && debouncedValue.length > 1) ? `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${debouncedValue}` : '';
}

export default useDebounce;
