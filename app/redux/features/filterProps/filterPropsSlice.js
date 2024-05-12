import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    //ordinary dropdowns
    marksInputValue: '',
    modelsInputValue: '',
    yearAtInputValue: '',
    yearToInputValue: '',
    priceAtInputValue: '',
    priceToInputValue: '',
    //extended search props
    bodyTypesInputValue: '',
    steeringTypesInputValue: '',
    transmissionTypesInputValue: '',
    engineTypesInputValue: '',
    driveTypesInputValue: '',
    countriesInputValue: '',
    onRoadCheckboxValue: '',
    onAuctionCheckboxValue: '',
    //ordinary checkboxes
    customsClearedCheckboxValue: '',
    installmentPaymentCheckboxValue: '',
    exchangeCheckboxValue: '',
    dillersCheckboxValue: '',
    officalDillersCheckboxValue: '',
};

export const filterPropsSlice = createSlice({
    name: "filterProps",
    initialState,
    reducers: {
        dispatchMarksInputValue(state, action) {
            state = { ...state, marksInputValue: action.payload }
            return state
        },
        dispatchModelsInputValue(state, action) {
            state = { ...state, modelsInputValue: action.payload }
            return state
        },
        dispatchYearAtInputValue(state, action) {
            state = { ...state, yearAtInputValue: action.payload }
            return state
        },
        dispatchYearToInputValue(state, action) {
            state = { ...state, yearToInputValue: action.payload }
            return state
        },
        dispatchPriceAtInputValue(state, action) {
            state = { ...state, priceAtInputValue: action.payload }
            return state
        },
        dispatchPriceToInputValue(state, action) {
            state = { ...state, priceToInputValue: action.payload }
            return state
        },
        dispatchBodyTypesInputValue(state, action) {
            state = { ...state, bodyTypesInputValue: action.payload }
            return state
        },
        dispatchSteeringTypesInputValue(state, action) {
            state = { ...state, steeringTypesInputValue: action.payload }
            return state
        },
        dispatchTransmissionTypesInputValue(state, action) {
            state = { ...state, transmissionTypesInputValue: action.payload }
            return state
        },
        dispatchEngineTypesInputValue(state, action) {
            state = { ...state, engineTypesInputValue: action.payload }
            return state
        },
        dispatchDriveTypesInputValue(state, action) {
            state = { ...state, driveTypesInputValue: action.payload }
            return state
        },
        dispatchCountriesInputValue(state, action) {
            state = { ...state, countriesInputValue: action.payload }
            return state
        },
        dispatchOnRoadCheckboxValue(state, action) {
            state = { ...state, onRoadCheckboxValue: action.payload }
            return state
        },
        dispatchOnAuctionCheckboxValue(state, action) {
            state = { ...state, onAuctionCheckboxValue: action.payload }
            return state
        },
        dispatchCustomsClearedCheckboxValue(state, action) {
            state = { ...state, customsClearedCheckboxValue: action.payload }
            return state
        },
        dispatchInstallmentPaymentCheckboxValue(state, action) {
            state = { ...state, installmentPaymentCheckboxValue: action.payload }
            return state
        },
        dispatchExchangeCheckboxValue(state, action) {
            state = { ...state, exchangeCheckboxValue: action.payload }
            return state
        },
        dispatchDillersCheckboxValue(state, action) {
            state = { ...state, dillersCheckboxValue: action.payload }
            return state
        },
        dispatchOfficalDillersCheckboxValue(state, action) {
            state = { ...state, officalDillersCheckboxValue: action.payload }
            return state
        }
    },
});

export const {

    dispatchMarksInputValue,
    dispatchModelsInputValue,
    dispatchYearAtInputValue,
    dispatchYearToInputValue,
    dispatchPriceAtInputValue,
    dispatchPriceToInputValue,
    dispatchBodyTypesInputValue,
    dispatchSteeringTypesInputValue,
    dispatchTransmissionTypesInputValue,
    dispatchEngineTypesInputValue,
    dispatchDriveTypesInputValue,
    dispatchCountriesInputValue,
    dispatchOnRoadCheckboxValue,
    dispatchOnAuctionCheckboxValue,
    dispatchCustomsClearedCheckboxValue,
    dispatchInstallmentPaymentCheckboxValue,
    dispatchExchangeCheckboxValue,
    dispatchDillersCheckboxValue,
    dispatchOfficalDillersCheckboxValue

} = filterPropsSlice.actions;

export const selectFilterProps = (state) => state.filterProps;

export default filterPropsSlice.reducer;