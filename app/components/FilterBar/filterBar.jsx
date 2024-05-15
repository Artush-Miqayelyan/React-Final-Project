import React, { Fragment, useState, useEffect } from 'react';
import styles from './filterBar.module.css'
import Button from '@mui/material/Button';
import OridnarySearchCheckboxes from '../FilterPropsByState/OrdinarySearch/Checkboxes/OrdinaryCheckboxes'
import OrdinarySearchDropdowns from '../FilterPropsByState/OrdinarySearch/Dropdowns/OrdinarySearchDropdowns'
import ExtendedSearch from '../FilterPropsByState/ExtendedSearch/ExtendedSearch';
import Link from 'next/link';

import { useSelector, useDispatch } from 'react-redux';

import {
    selectFilteredCars
} from '@/app/redux/features/mainFilterSlice/mainFilterSlice'
import {
    selectFilterProps,
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
} from '@/app/redux/features/filterProps/filterPropsSlice'

function FilterBar() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(dispatchMarksInputValue(''))
        dispatch(dispatchModelsInputValue(''))
        dispatch(dispatchYearAtInputValue(''))
        dispatch(dispatchYearToInputValue(''))
        dispatch(dispatchPriceAtInputValue(''))
        dispatch(dispatchPriceToInputValue(''))
        dispatch(dispatchBodyTypesInputValue(''))
        dispatch(dispatchSteeringTypesInputValue(''))
        dispatch(dispatchTransmissionTypesInputValue(''))
        dispatch(dispatchEngineTypesInputValue(''))
        dispatch(dispatchDriveTypesInputValue(''))
        dispatch(dispatchCountriesInputValue(''))
        dispatch(dispatchOnRoadCheckboxValue(false))
        dispatch(dispatchOnAuctionCheckboxValue(false))
        dispatch(dispatchCustomsClearedCheckboxValue(false))
        dispatch(dispatchInstallmentPaymentCheckboxValue(false))
        dispatch(dispatchExchangeCheckboxValue(false))
        dispatch(dispatchDillersCheckboxValue(false))
        dispatch(dispatchOfficalDillersCheckboxValue(false))
    }, [])

    const FilteredCars = useSelector(selectFilteredCars)
    const [IsExtendedSearchOpen, setIsExtendedSearchOpen] = useState(false)

    return (
        <div className={styles.filterBar}>
            <div className={styles.filterDropdownsAndCheckboxesContainer}>
                <OrdinarySearchDropdowns />
                {IsExtendedSearchOpen && <ExtendedSearch />}
                <div className={styles.checkboxesAndToggleBtn}>
                    <OridnarySearchCheckboxes />
                    <Button onClick={() => setIsExtendedSearchOpen(!IsExtendedSearchOpen)}>{IsExtendedSearchOpen ? 'Ordinary Search' : 'Extended Search'}</Button>
                </div>
            </div>
            <Link href="/cars/all">
                <Button className={styles.searchBtn} variant="contained" disableElevation>
                    {`All ${FilteredCars.length ? FilteredCars.length : ''} Offers`}
                </Button>
            </Link>

        </div>
    );
}

export default FilterBar;