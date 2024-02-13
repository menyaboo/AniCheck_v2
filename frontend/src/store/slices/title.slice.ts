import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITitle } from '../../types/ITitle';

export interface TitleState {
  title: ITitle | null;
}

const initialState: TitleState = {
  title: null,
};

const titleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<ITitle>) => {
      state.title = action.payload;
    },
  },
});

export const { setTitle } = titleSlice.actions;
export default titleSlice.reducer;