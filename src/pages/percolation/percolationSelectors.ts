import { RootState } from 'app/redux/store';
import { createSelector } from '@reduxjs/toolkit';

export const getPercolation = (state: RootState) => state.percolation;

export const getPercolationGrid = createSelector([getPercolation], ({ n, percolation }) => {
  const result: Site[][] = [];
  for (let i = 0; i < n; i++) {
    const line: Site[] = [];
    for (let j = 0; j < n; j++) {
      const isOpen = percolation.isOpen(i, j);
      if (isOpen) {
        if (percolation.isFull(i, j)) {
          line.push('FULL');
        } else {
          line.push('OPEN');
        }
      } else {
        line.push('CLOSED');
      }
    }
    result.push(line);
  }
  return result;
});

export type Site = 'OPEN' | 'CLOSED' | 'FULL';
