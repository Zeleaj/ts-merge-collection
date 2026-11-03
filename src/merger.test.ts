import { describe, it, expect } from 'vitest';
import { merge } from './merger';

describe('merge function', () => {
    it('should merge three sorted arrays correctly with standard input', () => {
        const col1 = [1, 3, 5];
        const col2 = [2, 4, 6];
        const col3 = [9, 7, 5]; 
        const result = merge(col1, col2, col3);
        expect(result).toEqual([1, 2, 3, 4, 5, 5, 6, 7, 9]);
    });

    it('should handle empty arrays correctly', () => {
        const col1: number[] = [];
        const col2 = [1, 2, 3];
        const col3 = [6, 4, 2];
        const result = merge(col1, col2, col3);
        expect(result).toEqual([1, 2, 2, 3, 4, 6]);
    });

    it('should handle all empty arrays', () => {
        expect(merge([], [], [])).toEqual([]);
    });

    it('should handle negative numbers and duplicate values', () => {
        const col1 = [-5, 0, 3];
        const col2 = [-2, 3, 5];
        const col3 = [8, 4, 0, -3]; 
        const result = merge(col1, col2, col3);
        expect(result).toEqual([-5, -3, -2, 0, 0, 3, 3, 4, 5, 8]);
    });
});