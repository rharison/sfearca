import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'produtos',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

export const fetchProdutos = (dateNow) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const response = await fetch(
      `https://sofalta.eu/api/v4/empreendimentos/arcaparque/produtos/ingressos/ingressos?data=${dateNow}`,
    );
    if (response.status === 200) {
      const data = await response.json();
      if (data.grupos.length) {
        dispatch(fetchSuccess(data));
      } else {
        dispatch(fetchError('Não existem produtos para a data informada'));
      }
    } else {
      const data = await response.json();
      dispatch(fetchError(data.message));
    }
  } catch (error) {
    dispatch(
      fetchError(
        `Problemas ao carregar os dados do servidor, tente recarregar a página | Código do erro:  ${error}`,
      ),
    );
  }
};

export const onlyAllGroups = (state) => state.produtos.data?.grupos;
export const onlyAllItens = (state) => state.produtos.data?.itens;
export const itensForGroups = (state) => {
  const mapGroupsForItens = new Map();
  state.produtos.data?.grupos?.forEach((grupo) => {
    mapGroupsForItens[grupo.id] = [];
    state.produtos.data?.itens?.forEach((item) => {
      if (item.grupos.includes(grupo.id))
        mapGroupsForItens[grupo.id].push(item);
    });
    mapGroupsForItens[grupo.id].sort((item1, item2) => {
      if (item1[grupo.id] < item2[grupo.id]) return 1;
      else if (item1[grupo.id] > item2[grupo.id]) return -1;
      return 0;
    });
  });
  mapGroupsForItens.maximoQtdParcelamento =
    state.produtos?.maximoQtdParcelamento;
  return mapGroupsForItens;
};

export default slice.reducer;
