import {configureStore} from "@reduxjs/toolkit";
import overlayReducer from './overlay';
import tableDataReducer from './tableData';
import filterReducer from './filter'


const store = configureStore({
    reducer: {
        overlay: overlayReducer,
        tableData: tableDataReducer,
        filter: filterReducer
    }
});

export default store;