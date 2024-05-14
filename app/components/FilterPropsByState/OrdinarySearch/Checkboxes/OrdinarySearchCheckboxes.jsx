import React, {
    useState,
    useEffect,
    memo
} from 'react';
import styles from './OrdinarySearchCheckboxes.module.css'

import FILTER_CHECKBOXES from '@/app/constants/FilterDropdownsCheckboxes/Checkboxes'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { useDispatch, useSelector } from 'react-redux';

import {
    selectCars
} from '@/app/redux/features/autoshop/autoshopSlice'

import {
    setFilteredCars
} from '@/app/redux/features/mainFilterSlice/mainFilterSlice'

import {
    dispatchCustomsClearedCheckboxValue,
    dispatchInstallmentPaymentCheckboxValue,
    dispatchExchangeCheckboxValue,
    dispatchDillersCheckboxValue,
    dispatchOfficalDillersCheckboxValue,
    selectFilterProps
} from '@/app/redux/features/filterProps/filterPropsSlice'

const OridnarySearchCheckboxes = memo(() => {

    useEffect(() => {
        console.log('Component Re-rendered')
    } , )

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

        console.log("Result :::::", res)
    }, [filterProps])

    console.log('hkhjhajkhjkhkjjkk')

    const [customsClearedCheckboxValue, setCustomsClearedCheckboxValue] = useState(false)
    const [installmentPaymentCheckboxValue, setInstallmentPaymentCheckboxValue] = useState(false)
    const [exchangeCheckboxValue, setExchangeCheckboxValue] = useState(false)
    const [dillersCheckboxValue, setDillersCheckboxValue] = useState(false)
    const [officalDillersCheckboxValue, setOfficalDillersCheckboxValue] = useState(false)

    function handleCustomsClearedCheckboxValue() {
        debugger
        setCustomsClearedCheckboxValue(!customsClearedCheckboxValue)
        dispatch(dispatchCustomsClearedCheckboxValue(!customsClearedCheckboxValue))
        console.log("Customs cleared")
    }

    function handleInstallmentPaymentCheckboxValue() {
        setInstallmentPaymentCheckboxValue(!installmentPaymentCheckboxValue)
        dispatch(dispatchInstallmentPaymentCheckboxValue(!installmentPaymentCheckboxValue))
    }

    function handleExchangeCheckboxValue() {
        setExchangeCheckboxValue(!exchangeCheckboxValue)
        dispatch(dispatchExchangeCheckboxValue(!exchangeCheckboxValue))
    }

    function handleDillersCheckboxValue() {
        setDillersCheckboxValue(!dillersCheckboxValue)
        dispatch(dispatchDillersCheckboxValue(!dillersCheckboxValue))
    }

    function handleOfficalDillersCheckboxValue() {
        setOfficalDillersCheckboxValue(!officalDillersCheckboxValue)
        dispatch(dispatchOfficalDillersCheckboxValue(!officalDillersCheckboxValue))
    }

    return (
        <div className={styles.checkboxes}>
            <FormControlLabel
                control={<Checkbox />}
                label={FILTER_CHECKBOXES.CUSTOMS_CLEARED}
                checked={customsClearedCheckboxValue}
                onChange={handleCustomsClearedCheckboxValue}
            />
            <FormControlLabel
                control={<Checkbox />}
                label={FILTER_CHECKBOXES.INSTALLMENT_PAYMENT}
                checked={installmentPaymentCheckboxValue}
                onChange={handleInstallmentPaymentCheckboxValue}
            />
            <FormControlLabel
                control={<Checkbox />}
                label={FILTER_CHECKBOXES.EXCHANGE}
                checked={exchangeCheckboxValue}
                onChange={handleExchangeCheckboxValue}
            />
            <FormControlLabel
                control={<Checkbox />}
                label={FILTER_CHECKBOXES.DILLERS}
                checked={dillersCheckboxValue}
                onChange={handleDillersCheckboxValue}
            />
            <FormControlLabel
                control={<Checkbox />}
                label={FILTER_CHECKBOXES.OFFICAL_DILLERS}
                checked={officalDillersCheckboxValue}
                onChange={handleOfficalDillersCheckboxValue}
            />
        </div>
    );
})

export default OridnarySearchCheckboxes;