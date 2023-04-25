import {createSlice} from '@reduxjs/toolkit';

const initialFilterState = {
    filterData: {
        filter: false,
        incomeLessThan : '',
        carBrands: [],
        gender : '',
        phonePriceGreaterThan: '',
        lastNameStartWith : '',
        quoteLengthGreaterThan : '',
        emailIncludeDigits : 'False',
    }
};

const FilterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        saveFilterData(state, action) {
            state.filterData = action.payload;
        },

    }
});

export const FilterActions = FilterSlice.actions;
export default FilterSlice.reducer;