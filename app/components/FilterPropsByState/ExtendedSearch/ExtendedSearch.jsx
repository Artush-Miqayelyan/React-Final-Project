import React, { useState, Fragment, useEffect } from 'react';
import styles from './ExtendedSearch.module.css'

import FILTER_DROPDOWNS from '../../../constants/FilterDropdownsCheckboxes/Dropdowns'
import FILTER_CHECKBOXES from '../../../constants/FilterDropdownsCheckboxes/Checkboxes'

import BODY_TYPES from '../../../constants/CarsData/BodyTypes'
import COUNTRIES from '../../../constants/CarsData/Countries'
import DRIVE_TYPES from '../../../constants/CarsData/DriveTypes'
import ENGINE_TYPES from '../../../constants/CarsData/EngineTypes'
import STEERINGS from '../../../constants/CarsData/Steering'
import TRANSMISSION_TYPES from '../../../constants/CarsData/TransmissionTypes'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { useSelector, useDispatch } from 'react-redux';

import {
    selectCars
} from '@/app/redux/features/autoshop/autoshopSlice';

import {
    dispatchBodyTypesInputValue,
    dispatchSteeringTypesInputValue,
    dispatchTransmissionTypesInputValue,
    dispatchEngineTypesInputValue,
    dispatchDriveTypesInputValue,
    dispatchCountriesInputValue,
    dispatchOnRoadCheckboxValue,
    dispatchOnAuctionCheckboxValue,
    selectFilterProps
} from '@/app/redux/features/filterProps/filterPropsSlice'

import {
    setFilteredCars
} from '@/app/redux/features/mainFilterSlice/mainFilterSlice'

function ExtendedSearch() {

    const dispatch = useDispatch()
    const filterProps = useSelector(selectFilterProps)
    const initialCarsData = useSelector(selectCars)

    useEffect(() => {
        const props = Object.keys(filterProps)

        const filtered = initialCarsData

        const res = props.reduce((accumulator, currentProp) => {
            if (filterProps[currentProp].value) {
                return filterProps[currentProp].StartFilter(accumulator)
                // console.log("Filter Result :::::: " , result)
            }
            return accumulator
        }, filtered)
        dispatch(setFilteredCars(res))
    }, [filterProps])

    const [bodyTypesInputValue, setBodyTypesInputValue] = useState('')
    const [steeringTypesInputValue, setSteeringTypesInputValue] = useState('')
    const [transmissionTypesInputValue, setTransmissionTypesInputValue] = useState('')
    const [engineTypesInputValue, setEngineTypesInputValue] = useState('')
    const [driveTypesInputValue, setDriveTypesInputValue] = useState('')
    const [countriesInputValue, setCountriesInputValue] = useState('')

    const [onRoadCheckboxValue, setOnRoadCheckboxValue] = useState(false)
    const [onAuctionCheckboxValue, setOnAuctionCheckboxValue] = useState(false)

    function handleBodyTypesInputValue(e, v) {
        setBodyTypesInputValue(v)
        dispatch(dispatchBodyTypesInputValue(v))
    }

    function handleSteeringTypesInputChange(e, v) {
        setSteeringTypesInputValue(v)
        dispatch(dispatchSteeringTypesInputValue(v))
    }

    function handleTransmissionTypesInputChange(e, v) {
        setTransmissionTypesInputValue(v)
        dispatch(dispatchTransmissionTypesInputValue(v))
    }

    function handleEngineTypesInputChange(e, v) {
        setEngineTypesInputValue(v)
        dispatch(dispatchEngineTypesInputValue(v))
    }

    function handleDriveTypesInputChange(e, v) {
        setDriveTypesInputValue(v)
        dispatch(dispatchDriveTypesInputValue(v))
    }

    function handleCountriesInputChange(e, v) {
        setCountriesInputValue(v)
        dispatch(dispatchCountriesInputValue(v))
    }

    function handleOnRoadCheckboxValue() {
        setOnRoadCheckboxValue(!onRoadCheckboxValue)
        dispatch(dispatchOnRoadCheckboxValue(!onRoadCheckboxValue))
    }

    function handleOnAuctionCheckboxValue() {
        setOnAuctionCheckboxValue(!onAuctionCheckboxValue)
        dispatch(dispatchOnAuctionCheckboxValue(!onAuctionCheckboxValue))
    }

    const defaultBodyTypes = {
        options: BODY_TYPES,
        getOptionLabel: (option) => option
    };

    const defaultSteeringTypes = {
        options: STEERINGS,
        getOptionLabel: (option) => option
    };

    const defaultTransmissonTypes = {
        options: TRANSMISSION_TYPES,
        getOptionLabel: (option) => option
    };

    const defaultEngineTypes = {
        options: ENGINE_TYPES,
        getOptionLabel: (option) => option
    };

    const defaultDriveTypes = {
        options: DRIVE_TYPES,
        getOptionLabel: (option) => option
    };

    const defaultCountries = {
        options: COUNTRIES,
        getOptionLabel: (option) => option
    };

    return (
        <div className={styles.extended}>
            <div className={styles.dropdowns}>
                <Autocomplete
                    sx={{ width: 180 }}
                    value={bodyTypesInputValue}
                    onChange={handleBodyTypesInputValue}
                    {...defaultBodyTypes}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                        <TextField {...params} label={FILTER_DROPDOWNS.BODY_TYPE} variant="standard" />
                    )}
                />
                <Autocomplete
                    sx={{ width: 180 }}
                    value={steeringTypesInputValue}
                    onChange={handleSteeringTypesInputChange}
                    {...defaultSteeringTypes}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                        <TextField {...params} label={FILTER_DROPDOWNS.STEERING} variant="standard" />
                    )}
                />
                <Autocomplete
                    sx={{ width: 180 }}
                    value={transmissionTypesInputValue}
                    onChange={handleTransmissionTypesInputChange}
                    {...defaultTransmissonTypes}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                        <TextField {...params} label={FILTER_DROPDOWNS.TRANSMISSION} variant="standard" />
                    )}
                />
                <Autocomplete
                    sx={{ width: 180 }}
                    value={engineTypesInputValue}
                    onChange={handleEngineTypesInputChange}
                    {...defaultEngineTypes}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                        <TextField {...params} label={FILTER_DROPDOWNS.ENGINE} variant="standard" />
                    )}
                />
                <Autocomplete
                    sx={{ width: 180 }}
                    value={driveTypesInputValue}
                    onChange={handleDriveTypesInputChange}
                    {...defaultDriveTypes}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                        <TextField {...params} label={FILTER_DROPDOWNS.DRIVE} variant="standard" />
                    )}
                />
                <Autocomplete
                    sx={{ width: 180 }}
                    value={countriesInputValue}
                    onChange={handleCountriesInputChange}
                    {...defaultCountries}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                        <TextField {...params} label={FILTER_DROPDOWNS.COUNTRY} variant="standard" />
                    )}
                />
            </div>
            <div className={styles.checkboxes}>
                <FormControlLabel
                    value={onRoadCheckboxValue}
                    onChange={handleOnRoadCheckboxValue}
                    control={<Checkbox />}
                    label={FILTER_CHECKBOXES.ON_ROAD}
                />
                <FormControlLabel
                    value={onAuctionCheckboxValue}
                    onChange={handleOnAuctionCheckboxValue}
                    control={<Checkbox />}
                    label={FILTER_CHECKBOXES.ON_AUCTION}
                />
            </div>
        </div>
    );
}

export default ExtendedSearch;