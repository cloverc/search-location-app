import React from 'react';
import SearchBox from './SearchBox';

const Form = () => {
  return (
    <div className="search-container">
      <form className="pickup-form">
        <h2>Let's find your ideal car</h2>
        <div className="search">
          <SearchBox />
        </div>
      </form>
    </div>
  );
};

export default Form;
