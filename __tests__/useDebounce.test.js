import { renderHook, act } from '@testing-library/react-hooks'

import useDebounce from '../src/components/utils/useDebounce'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {    
  jest.clearAllMocks()
})

const advanceTimer = (delay = 500) => act(() => jest.advanceTimersByTime(delay))

it('should return the expected search term after timeout', async () => {
  let searchTerm = 'Man'
  let delay = 500;
  const { result, rerender } = renderHook(() => useDebounce(searchTerm, delay))
  
  advanceTimer()

  expect(result.current).toEqual('https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=Man')
  
  searchTerm = 'Manchester'
  
  rerender()
  
  advanceTimer()

  expect(result.current).toEqual('Manchester')
})

it('should return expected search term before timeout', async () => {
  let searchTerm = 'Man'
  let delay = 500;
  const { result, rerender } = renderHook(() => useDebounce(searchTerm, delay))
  
  advanceTimer(300)

  expect(result.current).toEqual('https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=Man')
  
  searchTerm = 'Manchester'
  
  rerender()
  
  advanceTimer(300)

  expect(result.current).toEqual('https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=Man')
})

it('should call the setTimeout function', async () => {
  await act(async () => renderHook(() => useDebounce('Manchester', 500)))

  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500)
})
