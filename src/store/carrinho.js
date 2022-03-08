import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'carrinho',
  initialState: {
    isExpanded: false,
    contador: 0,
    listItens: null,
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
    addInListItens(state, action) {
      if (!state.listItens) state.listItens = {};
      state.listItens = Object.assign({ ...state.listItens }, action.payload);
      window.localStorage.setItem('listItens', JSON.stringify(state.listItens));
    },
    deleteItemList(state, action) {
      if (state.listItens) {
        const tempObj = { ...state.listItens };
        delete tempObj[action.payload];
        state.listItens = tempObj;
        window.localStorage.setItem(
          'listItens',
          JSON.stringify(state.listItens),
        );
      }
    },
  },
});

export const {
  toggleExpanded,
  incrementar,
  decrementar,
  addInListItens,
  deleteItemList,
} = slice.actions;
export default slice.reducer;
