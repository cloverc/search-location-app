import axios from 'axios';
import { renderHook, act } from '@testing-library/react-hooks';

import getData from '../src/components/utils/getData';

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

afterEach(() => {
  jest.clearAllMocks();
});

// const mockData = {
//   data: {
//     results: { docs: [{ name: 'Foo' }, { name: 'Bar' }] }
//   }
// }

const mockAxios = (data = mockData) => axios.get.mockResolvedValue(data);

test('should set results to an empty array when url is undefined', async () => {
  const { result } = renderHook(() => getData());

  expect(result.current).toEqual([]);
});

// const render = (props = mockData) => mount(<DropDown {...props} />);

describe('fetchData', () => {
  it('successfully fetches data from an API', () => {
    // const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() => Promise.resole(mockData));
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
  });
});

// import axios from 'axios';
// import { fetchData } from './';
// jest.mock('axios');
// describe('fetchData', () => {
//   it('fetches successfully data from an API', async () => {
//     const data = {
//       data: {
//         hits: [
//           {
//             objectID: '1',
//             title: 'a',
//           },
//           {
//             objectID: '2',
//             title: 'b',
//           },
//         ],
//       },
//     };
//     axios.get.mockImplementationOnce(() => Promise.resolve(data));
//   });
//   it('fetches erroneously data from an API', async () => {
//     const errorMessage = 'Network Error';
//     axios.get.mockImplementationOnce(() =>
//       Promise.reject(new Error(errorMessage)),
//     );
//   });
// });
