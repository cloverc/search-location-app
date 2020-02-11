import axios from 'axios';
// import { renderHook, act } from '@testing-library/react-hooks';

import getData from '../src/utils/getData';

afterEach(() => {
  jest.clearAllMocks();
});

jest.mock('axios');

const mockData = {
  data: {
    results: {
      docs: [
        { name: 'Manchester Airport' },
        { name: 'Manchester' },
        { name: 'Manchester - Piccadilly Train Station' },
        { name: 'Oldham' },
        { name: 'Bolton' },
        { name: 'Stockport' },
      ],
    },
  },
};

// const mockFetchPromise = Promise.resolve({
//   json: () => mockJsonPromise
// });

const render = (props = mockData) => mount(<DropDown {...props} />);

it('successfully fetches data from an API', () => {
  // const errorMessage = 'Network Error';

  axios.get.mockImplementationOnce(() => Promise.resole(mockData));
});
