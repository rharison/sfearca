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
      dispatch(fetchSuccess(data));
    } else {
      const data = await response.json();
      dispatch(fetchError(data.message));
    }
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export default slice.reducer;
