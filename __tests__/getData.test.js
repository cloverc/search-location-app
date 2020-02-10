import axios from 'axios';
import { renderHook, act } from '@testing-library/react-hooks';

import useFetchData from '../../../components/SearchWidget/useFetchData';

afterEach(() => {
  jest.clearAllMocks();
});

const mockData = {
  data: {
    results: { docs: [{ name: 'Manchester' }, { name: 'Liverpool' }] },
  },
};
