import React, { useEffect, useState } from 'react';
import styles from './OrdinarySearchDropdowns.module.css'
import FILTER_DROPDOWNS from '../../../../constants/FilterDropdownsCheckboxes/Dropdowns'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import CARS_AND_MODELS from '../../../../constants/CarsData/CarsAndModels'
import MARKS from '../../../../constants/CarsData/Marks';
import PRICE from '../../../../constants/CarsData/Price'
import YEARS from '../../../../constants/CarsData/Years'

function OrdinarySearchDropdowns() {

    const [marksInputValue, setMarksInputValue] = useState('')
    const [modelsInputValue, setModelsInputValue] = useState('')
    const [yearAtInputValue, setYearAtInputValue] = useState('')
    const [yearToInputValue, setYearToInputValue] = useState('')
    const [priceAtInputValue, setPriceAtInputValue] = useState('')
    const [priceToInputValue, setPriceToInputValue] = useState('')

    function handleMarksInputChange(e, v) {
        console.log("Value ::: ", v)
        if (!MARKS.includes(v)) {
            setMarksInputValue('')
            setModelsInputValue('')
        } else {
            setMarksInputValue(v)
            setModelsInputValue('')
        }
    }

    function handleModelsInputChange(e, v) {
        setModelsInputValue(v)
    }

    function handleYearAtInputChange(e, v) {
        setYearAtInputValue(v)
    }

    function handleYearToInputChange(e, v) {
        setYearToInputValue(v)
    }

    function handlePriceAtInputChange(e, v) {
        setPriceAtInputValue(v)
    }

    function handlePriceToInputChange(e, v) {
        setPriceToInputValue(v)
    }

    const defaultMarks = {
        options: MARKS,
        getOptionLabel: (option) => option
    };

    const defaultModels = {
        options: CARS_AND_MODELS[marksInputValue],
        getOptionLabel: (option) => option
    };

    const defaultYears = {
        options: YEARS,
        getOptionLabel: (option) => option
    };

    const defaultPrices = {
        options: PRICE,
        getOptionLabel: (option) => option
    };

    return (
        <div className={styles.dropdowns}>
            <div className={styles.marks}>
                <Autocomplete
                    sx={{ width: 180 }}
                    value={marksInputValue}
                    onChange={handleMarksInputChange}
                    {...defaultMarks}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                        <TextField {...params} label={FILTER_DROPDOWNS.MARK} variant="standard" />
                    )}
                />
            </div>
            <div className={styles.models}>
                <Autocomplete
                    sx={{ width: 180 }}
                    value={modelsInputValue}
                    onChange={handleModelsInputChange}
                    {...defaultModels}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                        <TextField {...params} label={FILTER_DROPDOWNS.MODEL} variant="standard" />
                    )}
                />
            </div>
            <div className={styles.year}>
                <Autocomplete
                    sx={{ width: 120 }}
                    value={yearAtInputValue}
                    onChange={handleYearAtInputChange}
                    {...defaultYears}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                        <TextField {...params} label={FILTER_DROPDOWNS.YEAR_AT} variant="standard" />
                    )}
                />
                <Autocomplete
                    sx={{ width: 120 }}
                    value={yearToInputValue}
                    onChange={handleYearToInputChange}
                    {...defaultYears}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                        <TextField {...params} label={FILTER_DROPDOWNS.YEAR_TO} variant="standard" />
                    )}
                />
            </div>
            <div className={styles.price}>
                <Autocomplete
                    sx={{ width: 120 }}
                    value={priceAtInputValue}
                    onChange={handlePriceAtInputChange}
                    {...defaultPrices}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                        <TextField {...params} label={FILTER_DROPDOWNS.PRICE_AT} variant="standard" />
                    )}
                />
                <Autocomplete
                    sx={{ width: 120 }}
                    value={priceToInputValue}
                    onChange={handlePriceToInputChange}
                    {...defaultPrices}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                        <TextField {...params} label={FILTER_DROPDOWNS.PRICE_TO} variant="standard" />
                    )}
                />
            </div>
        </div>
    );
}

export default OrdinarySearchDropdowns;