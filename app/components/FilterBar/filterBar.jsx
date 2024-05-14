import React, { Fragment, useState } from 'react';
import styles from './filterBar.module.css'
import Button from '@mui/material/Button';
import OridnarySearchCheckboxes from '../FilterPropsByState/OrdinarySearch/Checkboxes/OrdinarySearchcheckboxes'
import OrdinarySearchDropdowns from '../FilterPropsByState/OrdinarySearch/Dropdowns/OrdinarySearchDropdowns'
import ExtendedSearch from '../FilterPropsByState/ExtendedSearch/ExtendedSearch';

import { useSelector } from 'react-redux';

import {
    selectFilteredCars
} from '@/app/redux/features/mainFilterSlice/mainFilterSlice'

function FilterBar() {

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
            <Button className={styles.searchBtn} variant="contained" disableElevation>
                {`All ${FilteredCars.length ? FilteredCars.length : ''} Offers`}
            </Button>
        </div>
    );
}

export default FilterBar;