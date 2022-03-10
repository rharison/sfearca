import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'carrinho',
  initialState: {
    isExpanded: false,
    contador: 0,
    valorCarrinho: 0,
    listItens: {},
  },
  reducers: {
    toggleExpanded(state) {
      state.isExpanded = !state.isExpanded;
    },
    incrementar(state, action) {
      if (typeof action.payload === 'object') {
        state.contador += action.payload.quantidadeItem;
        state.valorCarrinho += action.payload.valorTotal;
      } else {
        state.contador++;
        state.valorCarrinho += action.payload;
      }
    },
    decrementar(state, action) {
      if (typeof action.payload === 'object') {
        state.contador -= action.payload.quantidade;
        state.valorCarrinho -= action.payload.valorTotal;
      } else {
        state.contador--;
        state.valorCarrinho -= action.payload;
      }
    },
    updateItenslist(state, action) {
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
  updateItenslist,
  deleteItemList,
} = slice.actions;
export default slice.reducer;
