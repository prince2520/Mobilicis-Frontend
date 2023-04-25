import {createSlice} from '@reduxjs/toolkit';

const initialTableDataState = {
    data: [],
    pageCount : 0,
    selectedPage : 0
};

const TableDataSlice = createSlice({
    name: 'tableData',
    initialState: initialTableDataState,
    reducers: {
        saveData(state, action) {
            state.data = action.payload;
        },
        pageCountHandler(state, action){
            state.pageCount = action.payload;
        },
        selectedPageHandler(state, action){
            state.selectedPage = action.payload;
        }
    },

});

export const TableDataActions = TableDataSlice.actions;
export default TableDataSlice.reducer;