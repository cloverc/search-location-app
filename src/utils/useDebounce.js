import { useState, useEffect } from 'react';

export default function useDebounce(searchTerm, delay) {

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

  return debouncedValue;
}
