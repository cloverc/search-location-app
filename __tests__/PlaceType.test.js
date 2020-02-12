import React from 'react';
import { mount } from 'enzyme';

import PlaceType from '../src/components/PlaceType';

const mockProps = {
    placeType: 'Airport'
}

it('displays correct place type name', () => { 
    const wrapper = mount(<PlaceType {...mockProps} />);
    expect(wrapper.find('.c-fts-results__pill-container').text).toEqual('Airport');
});
