import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import i18n, { type Language } from '@/i18n';

interface LangState {
  current: Language;
}

const initialState: LangState = {
  current: (localStorage.getItem('portfolio-lang') as Language) ?? 'en',
};

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<Language>) {
      state.current = action.payload;
      localStorage.setItem('portfolio-lang', action.payload);
      i18n.changeLanguage(action.payload);
    },
  },
});

export const { setLanguage } = langSlice.actions;
export default langSlice.reducer;
