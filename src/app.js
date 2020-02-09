import React from 'react';
import { render } from 'react-dom';
import Form from './components/Form';

const App = () => {
  return (
    <div className="App">
      <Form />
    </div>
  );
};

render(<App />, document.getElementById('root'));
