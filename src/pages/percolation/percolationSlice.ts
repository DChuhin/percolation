import { getPercolation, Percolation } from './Percolation';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
  n: number;
  percolation: Percolation;
  version: number;
}

const initialState: State = {
  n: 8,
  percolation: getPercolation(8),
  version: 0,
};

const initPercolationHandler = (state: State, action: PayloadAction<number>) => {
  const n = action.payload;
  state.n = n;
  state.percolation = getPercolation(n);
  return state;
};

const openHandler = (state: State, action: PayloadAction<OpenSitePayload>) => {
  const { row, col } = action.payload;
  state.percolation.open(row, col);
  state.version++;
  return state;
};

export const percolationSlice = createSlice({
  name: 'percolation',
  initialState,
  reducers: {
    initPercolation: {
      reducer: initPercolationHandler,
      prepare: (n: number) => ({ payload: n }),
    },
    open: {
      reducer: openHandler,
      prepare: (row: number, col: number) => ({ payload: { row, col }, }),
    },
  },
});

export interface OpenSitePayload {
  row: number;
  col: number;
}

export const { initPercolation, open } = percolationSlice.actions;
export default percolationSlice.reducer;
