import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type SectionId = 'hero' | 'about' | 'skills' | 'experience' | 'projects' | 'contact';

interface UiState {
  activeSection: SectionId;
  isMobileMenuOpen: boolean;
  isContactModalOpen: boolean;
  selectedProjectId: string | null;
}

const initialState: UiState = {
  activeSection: 'hero',
  isMobileMenuOpen: false,
  isContactModalOpen: false,
  selectedProjectId: null,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveSection(state, action: PayloadAction<SectionId>) {
      state.activeSection = action.payload;
    },
    toggleMobileMenu(state) {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu(state) {
      state.isMobileMenuOpen = false;
    },
    openContactModal(state) {
      state.isContactModalOpen = true;
    },
    closeContactModal(state) {
      state.isContactModalOpen = false;
    },
    setSelectedProject(state, action: PayloadAction<string | null>) {
      state.selectedProjectId = action.payload;
    },
  },
});

export const {
  setActiveSection,
  toggleMobileMenu,
  closeMobileMenu,
  openContactModal,
  closeContactModal,
  setSelectedProject,
} = uiSlice.actions;

export default uiSlice.reducer;
