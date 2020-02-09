import React from 'react';
import SearchBox from './SearchBox';

const Form = () => {
  return (
    <div className="c-searchbox">
      <form>
        <h1>Let's find your ideal car</h1>
        <SearchBox />
      </form>
    </div>
  );
};

export default Form;
