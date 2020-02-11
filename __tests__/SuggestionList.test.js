import React from 'react';
import { mount, shallow } from 'enzyme';

import SuggestionList from '../src/components/SuggestionList';

// const mockData = {
//   data: {
//     results: {
//       docs: [
//         { name: 'Manchester Airport' },
//         { name: 'Manchester' },
//         { name: 'Manchester - Piccadilly Train Station' },
//         { name: 'Oldham' },
//         { name: 'Bolton' },
//         { name: 'Stockport' },
//       ],
//     },
//   },
// };

// it('displays a no results message if no search results are found', () => {
//   const searchResults = [];

//   const wrapper = mount(<SuggestionList searchResults={searchResults} />);
//   expect(wrapper.find('.c-fts-results__location-name').to.equal('No results found'));
// });

// it('does not display a no results message if search results are found', () => {
//   const searchResults = [{ name: 'result 1' }, { name: 'result 2' }];

//   const wrapper = shallow(<SuggestionList searchResults={searchResults} />);
//   expect(wrapper.contains('No results found')).to.equal(false);
// });

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
