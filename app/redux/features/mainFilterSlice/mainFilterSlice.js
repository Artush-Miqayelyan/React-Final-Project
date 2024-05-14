import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const filteredAutoshopSlice = createSlice({
    name: "filteredAutoshop",
    initialState,
    reducers: {
        setFilteredCars: (state , action) => {
            return action.payload
        }
    },  
});

export const { setFilteredCars } = filteredAutoshopSlice.actions;

export const selectFilteredCars = (state) => state.filteredAutoshop;

export default filteredAutoshopSlice.reducer;