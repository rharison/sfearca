import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'carrinho',
  initialState: {
    isExpanded: false,
    contador: 0,
  },
  reducers: {
    toggleExpanded(state) {
      state.isExpanded = !state.isExpanded;
    },
    incrementar(state) {
      state.contador++;
    },
    decrementar(state) {
      state.contador--;
    },
  },
});

export const { toggleExpanded, incrementar, decrementar } = slice.actions;
export default slice.reducer;
