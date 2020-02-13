import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (searchURL) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(true);
  useEffect(() => {
    const fetchData = async function() {
      try {
        setIsSearching(true);
        const response = await axios.get(searchURL);
        if (response.status === 200) {
            setSearchResults(response.data.results.docs);
        }
      } catch (error) {
        throw error;
      } finally {
        setIsSearching(true);
      }
    };
    fetchData();
  }, [searchURL]);
  return { isSearching, searchResults };
};

export default useFetch;
