import {createSlice} from '@reduxjs/toolkit';

const initialOverlayState = {
    showOverlay: false,
    showFilter: false
};

const OverlaySlice = createSlice({
    name: 'overlay',
    initialState: initialOverlayState,
    reducers: {
        closeOverlayHandler(state) {
            state.showOverlay = false;
            state.showFilter = false

        },
        showFilterHandler(state) {
            state.showOverlay = true;
            state.showFilter = true;
        },
    }
});

export const OverlayActions = OverlaySlice.actions;
export default OverlaySlice.reducer;