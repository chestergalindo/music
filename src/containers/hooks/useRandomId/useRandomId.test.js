/* eslint-disable no-undef */

import { renderHook } from '@testing-library/react-hooks';
import { useRandomId } from '.';

describe('useRandomId', () => {
  it('should return a random id', () => {
    const { result } = renderHook(() => useRandomId());
    expect(result.current).not.toBeNull();
  });
})
