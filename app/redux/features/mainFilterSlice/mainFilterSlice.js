import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const filteredAutoshopSlice = createSlice({
    name: "filteredAutoshop",
    initialState,
    reducers: {
        filterByMark (state , action){
            const { defaultState , filterProps } = action.payload

            
            
        }
    },  
});

export const { filterByMark } = filteredAutoshopSlice.actions;

export const selectFilteredCars = (state) => state.filteredAutoshop;

export default filteredAutoshopSlice.reducer;