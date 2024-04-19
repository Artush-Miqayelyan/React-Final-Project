import React, { useState, Fragment } from 'react';
import styles from './ExtendedSearch.module.css'
import FILTER_DROPDOWNS from '../../../constants/FilterDropdownsCheckboxes/Dropdowns'
import FILTER_CHECKBOXES from '../../../constants/FilterDropdownsCheckboxes/Checkboxes'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import BODY_TYPES from '../../../constants/CarsData/BodyTypes'
import COUNTRIES from '../../../constants/CarsData/Countries'
import DRIVE_TYPES from '../../../constants/CarsData/DriveTypes'
import ENGINE_TYPES from '../../../constants/CarsData/EngineTypes'
import STEERINGS from '../../../constants/CarsData/Steering'
import TRANSMISSION_TYPES from '../../../constants/CarsData/TransmissionTypes'

function ExtendedSearch() {

    const [bodyTypesInputValue, setBodyTypesInputValue] = useState('')
    const [steeringTypesInputValue, setSteeringTypesInputValue] = useState('')
    const [transmissionTypesInputValue, setTransmissionTypesInputValue] = useState('')
    const [engineTypesInputValue, setEngineTypesInputValue] = useState('')
    const [driveTypesInputValue, setDriveTypesInputValue] = useState('')
    const [countriesInputValue, setCountriesInputValue] = useState('')

    const [ onRoadCheckboxValue , setOnRoadCheckboxValue] = useState(false)
    const [ onAuctionCheckboxValue , setOnAuctionCheckboxValue] = useState(false)

    function handleBodyTypesInputValue(e, v) {
        setBodyTypesInputValue(v)
    }

    function handleSteeringTypesInputChange(e, v) {
        setSteeringTypesInputValue(v)
    }

    function handleTransmissionTypesInputChange(e, v) {
        setTransmissionTypesInputValue(v)
    }

    function handleEngineTypesInputChange(e, v) {
        setEngineTypesInputValue(v)
    }

    function handleDriveTypesInputChange(e, v) {
        setDriveTypesInputValue(v)
    }

    function handleCountriesInputChange(e, v) {
        setCountriesInputValue(v)
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
                    control={<Checkbox />}
                    label={FILTER_CHECKBOXES.ON_ROAD}
                    value={onRoadCheckboxValue}
                    onClick={() => setOnRoadCheckboxValue(!onRoadCheckboxValue)}
                />
                <FormControlLabel
                    control={<Checkbox />}
                    label={FILTER_CHECKBOXES.ON_AUCTION}
                    value={onAuctionCheckboxValue}
                    onClick={() => setOnAuctionCheckboxValue(!onAuctionCheckboxValue)}
                />
            </div>
        </div>
    );
}

export default ExtendedSearch;