import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    //ordinary dropdowns
    marksInput: {
        value: '', StartFilter: function (filteredCarsData) {
            return filteredCarsData.filter(current => current.brand === this.value)
        }
    },
    modelsInput: {
        value: '', StartFilter: function (filteredCarsData) {
            return filteredCarsData.filter(current => current.model === this.value)
        }
    },
    yearAtInput: {
        value: '', StartFilter: function (filteredCarsData) {
            return filteredCarsData.filter(current => current.year >= this.value)
        }
    },
    yearToInput: {
        value: '', StartFilter: function (filteredCarsData) {
            return filteredCarsData.filter(current => current.year <= this.value)
        }
    },
    priceAtInput: {
        value: '', StartFilter: function (filteredCarsData) {
            return filteredCarsData.filter(current => current.price >= this.value)
        }
    },
    priceToInput: {
        value: '', StartFilter: function (filteredCarsData) {
            return filteredCarsData.filter(current => current.price <= this.value)
        }
    },
    //extended search props
    bodyTypesInput: {
        value: '', StartFilter: function (filteredCarsData) {
            return filteredCarsData.filter(current => current.body_type.toLowerCase() === this.value.toLowerCase())
        }
    },
    steeringTypesInput: {
        value: '', StartFilter: function (filteredCarsData) {
            return filteredCarsData.filter(current => current.steering.toLowerCase() === this.value.toLowerCase())
        }
    },
    transmissionTypesInput: {
        value: '', StartFilter: function (filteredCarsData) {
            return filteredCarsData.filter(current => current.transmission.toLowerCase() === this.value.toLowerCase())
        }
    },
    engineTypesInput: {
        value: '', StartFilter: function (filteredCarsData) {
            return filteredCarsData.filter(current => current.engine.toLowerCase() === this.value.toLowerCase())
        }
    },
    driveTypesInput: {
        value: '', StartFilter: function (filteredCarsData) {
            return filteredCarsData.filter(current => current.drive.toLowerCase() === this.value.toLowerCase())
        }
    },
    countriesInput: {
        value: '', StartFilter: function (filteredCarsData) {
            return filteredCarsData.filter(current => current.country.toLowerCase() === this.value.toLowerCase())
        }
    },
    onRoadCheckbox: {
        value: false, StartFilter: function (filteredCarsData) {
            return filteredCarsData.filter(current => current.on_road === this.value)
        }
    },
    onAuctionCheckbox: {
        value: false, StartFilter: function (filteredCarsData) {
            return filteredCarsData.filter(current => current.on_auction === this.value)
        }
    },
    //ordinary checkboxes
    customsClearedCheckbox: {
        value: false, StartFilter: function (filteredCarsData) {
            return filteredCarsData.filter(current => current.customs_cleared === this.value)
        }
    },
    installmentPaymentCheckbox: {
        value: false, StartFilter: function (filteredCarsData) {
            return filteredCarsData.filter(current => current.installment_payment === this.value)
        }
    },
    exchangeCheckbox: {
        value: false, StartFilter: function (filteredCarsData) {
            return filteredCarsData.filter(current => current.exchange === this.value)
        }
    },
    dillersCheckbox: {
        value: false, StartFilter: function (filteredCarsData) {
            return filteredCarsData.filter(current => current.isDiller === this.value)
        }
    },
    officalDillersCheckbox: {
        value: false, StartFilter: function (filteredCarsData) {
            return filteredCarsData.filter(current => current.isOfficialDiller === this.value)
        }
    },
};

export const filterPropsSlice = createSlice({
    name: "filterProps",
    initialState,
    reducers: {
        dispatchMarksInputValue(state, action) {
            return {
                ...state,
                marksInput: {
                    ...state.marksInput,
                    value: action.payload
                }
            }
        },
        dispatchModelsInputValue(state, action) {
            return {
                ...state,
                modelsInput: {
                    ...state.modelsInput,
                    value: action.payload
                }
            }
        },
        dispatchYearAtInputValue(state, action) {
            return {
                ...state,
                yearAtInput: {
                    ...state.yearAtInput,
                    value: action.payload
                }
            }
        },
        dispatchYearToInputValue(state, action) {
            return {
                ...state,
                yearToInput: {
                    ...state.yearToInput,
                    value: action.payload
                }
            }
        },
        dispatchPriceAtInputValue(state, action) {
            return {
                ...state,
                priceAtInput: {
                    ...state.priceAtInput,
                    value: action.payload
                }
            }
        },
        dispatchPriceToInputValue(state, action) {
            return {
                ...state,
                priceToInput: {
                    ...state.priceToInput,
                    value: action.payload
                }
            }
        },
        dispatchBodyTypesInputValue(state, action) {
            return {
                ...state,
                bodyTypesInput: {
                    ...state.bodyTypesInput,
                    value: action.payload
                }
            }
        },
        dispatchSteeringTypesInputValue(state, action) {
            return {
                ...state,
                steeringTypesInput: {
                    ...state.steeringTypesInput,
                    value: action.payload
                }
            }
        },
        dispatchTransmissionTypesInputValue(state, action) {
            return {
                ...state,
                transmissionTypesInput: {
                    ...state.transmissionTypesInput,
                    value: action.payload
                }
            }
        },
        dispatchEngineTypesInputValue(state, action) {
            return {
                ...state,
                engineTypesInput: {
                    ...state.engineTypesInput,
                    value: action.payload
                }
            }
        },
        dispatchDriveTypesInputValue(state, action) {
            return {
                ...state,
                driveTypesInput: {
                    ...state.driveTypesInput,
                    value: action.payload
                }
            }
        },
        dispatchCountriesInputValue(state, action) {
            return {
                ...state,
                countriesInput: {
                    ...state.countriesInput,
                    value: action.payload
                }
            }
        },
        dispatchOnRoadCheckboxValue(state, action) {
            return {
                ...state,
                onRoadCheckbox: {
                    ...state.onRoadCheckbox,
                    value: action.payload
                }
            }
        },
        dispatchOnAuctionCheckboxValue(state, action) {
            return {
                ...state,
                onAuctionCheckbox: {
                    ...state.onAuctionCheckbox,
                    value: action.payload
                }
            }
        },
        dispatchCustomsClearedCheckboxValue(state, action) {
            return {
                ...state,
                customsClearedCheckbox: {
                    ...state.customsClearedCheckbox,
                    value: action.payload
                }
            }
        },
        dispatchInstallmentPaymentCheckboxValue(state, action) {
            return {
                ...state,
                installmentPaymentCheckbox: {
                    ...state.installmentPaymentCheckbox,
                    value: action.payload
                }
            }
        },
        dispatchExchangeCheckboxValue(state, action) {
            return {
                ...state,
                exchangeCheckbox: {
                    ...state.exchangeCheckbox,
                    value: action.payload
                }
            }
        },
        dispatchDillersCheckboxValue(state, action) {
            return {
                ...state,
                dillersCheckbox: {
                    ...state.dillersCheckbox,
                    value: action.payload
                }
            }
        },
        dispatchOfficalDillersCheckboxValue(state, action) {
            return {
                ...state,
                officalDillersCheckbox: {
                    ...state.officalDillersCheckbox,
                    value: action.payload
                }
            }
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