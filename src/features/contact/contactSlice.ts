import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

interface ContactState {
  status: SubmitStatus;
  error: string | null;
  lastSubmittedAt: string | null;
}

const initialState: ContactState = {
  status: 'idle',
  error: null,
  lastSubmittedAt: null,
};

// Simulated API call — replace with real endpoint
export const submitContactForm = createAsyncThunk<
  void,
  ContactFormData,
  { rejectValue: string }
>('contact/submit', async (data, { rejectWithValue }) => {
  try {
    // In production, call your API here
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.info('Contact form submitted:', data);
  } catch {
    return rejectWithValue('Failed to send message. Please try again.');
  }
});

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    resetContactStatus(state) {
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.status = 'success';
        state.lastSubmittedAt = new Date().toISOString();
      })
      .addCase(submitContactForm.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'error';
        state.error = action.payload ?? 'Unknown error';
      });
  },
});

export const { resetContactStatus } = contactSlice.actions;
export default contactSlice.reducer;
