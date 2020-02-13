import React from 'react';
import { shallow } from 'enzyme';

import SuggestionList from '../src/components/SuggestionList';

describe('SearchBox', () => {
  it('does not display search result items if no search results are found', () => {
    const searchResults = [];

    const wrapper = shallow(<SuggestionList searchResults={searchResults} />);
    expect(wrapper.find('li').length).toEqual(0);
  });

  it('displays correct number of search result items if search results are found', () => {
    const searchResults = [{ name: 'result 1' }, { name: 'result 2' }, { name: 'result 3' }];

    const wrapper = shallow(<SuggestionList searchResults={searchResults} />);
    expect(wrapper.find('li').length).toEqual(3);
  });
});
