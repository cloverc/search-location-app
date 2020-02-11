import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from '../src/components/SearchBox';
import useDebounce from '../src/utils/useDebounce';
import getData from '../src/utils/getData';

const wrapper = shallow(<SearchBox />);

describe('SearchBox', () => {
  it('should render the SearchBox container', () => {
    expect(
      wrapper.find('.c-searchbox__container')
        .exists(),
    ).toEqual(true);
  });

  it('should have a text input field', () => {
    expect(wrapper.find('input[type="text"]').length).toEqual(1);
  });

  it('should have proper props for input field', () => {
    expect(wrapper.find('input[type="text"]').prop('placeholder')).toEqual(
      "city, airport, station, region, district..."
      );
  });

  it('should set the input value on change event', () => {
    wrapper.find('input').simulate('change', {
      target: {
        value: 'Manchester',
      },
    });
    expect(wrapper.find('input').prop('value')).toEqual(
      'Manchester',
    );
  });
})


describe('SearchBox Accessibility', () => {
  it('label and input element should be associated', () => {
    expect(wrapper.find('.c-form__label').prop('htmlFor')).toEqual('pickup-location')
    expect(wrapper.find('input').prop('id')).toEqual('pickup-location')
  })  
})
