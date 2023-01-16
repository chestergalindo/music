/* eslint-disable no-undef */

import { renderHook } from '@testing-library/react-hooks';
import { toMinutesAndSeconds } from '.';

describe('toMinutesAndSeconds', () => {
  it('should return 0:00 when given 0', () => {
    const { result } = renderHook(() => toMinutesAndSeconds(0));
    expect(result.current).toBe('0:00');
  });

  it('should return 1:00 when given 60', () => {
    const { result } = renderHook(() => toMinutesAndSeconds(60));
    expect(result.current).toBe('1:00');
  });

  it('should return 1:01 when given 61', () => {
    const { result } = renderHook(() => toMinutesAndSeconds(61));
    expect(result.current).toBe('1:01');
  });

  it('should return 1:10 when given 70', () => {
    const { result } = renderHook(() => toMinutesAndSeconds(70));
    expect(result.current).toBe('1:10');
  });

  it('should return 10:10 when given 610', () => {
    const { result } = renderHook(() => toMinutesAndSeconds(610));
    expect(result.current).toBe('10:10');
  });
}
)