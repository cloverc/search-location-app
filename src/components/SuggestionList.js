import React from 'react';

const SuggestionList = ({ locations = [] }) => {
  return (
    <ol className="Search-results">
      {locations.map((location, i) => (
        <li key={`${i}`}>
          <div>{location.name}</div>
        </li>
      ))}
    </ol>
  );
};

export default SuggestionList;
