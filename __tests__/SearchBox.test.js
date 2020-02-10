import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from '../src/components/SearchBox';
import useDebounce from '../src/utils/useDebounce';
import getData from '../src/utils/getData';

const render = () => shallow(<SearchBox />);

// test('should render the snapshot of the SearchWidget component', () => {
//   expect(render()).toMatchSnapshot();
// })

it('should render the SearchBox container', () => {
  expect(
    render()
      .find('.c-searchbox__container')
      .exists(),
  ).toEqual(true);
});
