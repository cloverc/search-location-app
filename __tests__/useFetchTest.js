import axios from 'axios'
import { renderHook, act } from '@testing-library/react-hooks'

import useFetch from '../src/components/utils/useFetch'

afterEach(() => {    
  jest.clearAllMocks();
});

const mockData = {
  data: {
    results: { docs: [{ name: 'Manchester' }, { name: 'Liverpool' }] }
  }
}

const mockAxios = (data = mockData) => axios.get.mockResolvedValue(data)

test('should not make an API get request without a url', async () => {
  const spy = jest.spyOn(axios, 'get')
  renderHook(() => useFetch())

  expect(spy).not.toBeCalled()
})

test('should set results when url is present', async () => {
  jest.spyOn(axios, 'get')
  mockAxios()
  const { result } = renderHook(() => useFetch('someURL'))

  await act(async () => result.current)

  expect(result.current).toEqual({"isSearching": true, "searchResults": [{"name": "Manchester"}, {"name": "Liverpool"}]})
})

test('should make an API get request when url is present', async () => {
  const spy = jest.spyOn(axios, 'get')
  mockAxios()
  await act(async () => renderHook(() => useFetch('someURL')))

  expect(spy).toBeCalledWith('someURL')
})
