import React from 'react';
import { render } from 'react-dom';
import SearchBox from './components/SearchBox';

const App = () => {
  return (
    <div className="App">
      <h2>Let&apos;s find your ideal car</h2>
      <SearchBox />
    </div>
  );
};

render(<App />, document.getElementById('root'));
