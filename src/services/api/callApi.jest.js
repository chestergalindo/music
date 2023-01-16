/* eslint-disable no-undef */
import {callApi} from './callApi';

describe('callApi', () => {
  it('should call fetch with the correct URL', () => {
    const endpoint = 'artists';
    return callApi(endpoint).then(data => {
      expect(data).toBeDefined()
      expect(data.id).toEqual(1)
    })
  });
})