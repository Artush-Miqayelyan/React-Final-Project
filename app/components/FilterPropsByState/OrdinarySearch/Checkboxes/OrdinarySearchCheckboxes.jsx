import React, { useState , memo} from 'react';
import styles from './OrdinarySearchCheckboxes.module.css'
import FILTER_CHECKBOXES from '../../../../constants/FilterDropdownsCheckboxes/Checkboxes'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const OridnarySearchCheckboxes = memo(() => {

    const [customsClearedCheckboxValue, setCustomsClearedCheckboxValue] = useState(false)
    const [installmentPaymentCheckboxValue, setInstallmentPaymentCheckboxValue] = useState(false)
    const [exchangeCheckboxValue, setExchangeCheckboxValue] = useState(false)
    const [dillersCheckboxValue, setDillersCheckboxValue] = useState(false)
    const [officalDillersCheckboxValue, setOfficalDillersCheckboxValue] = useState(false)

    function handleCustomsClearedCheckboxValue(){
        setCustomsClearedCheckboxValue(!customsClearedCheckboxValue)
    }

    function handleInstallmentPaymentCheckboxValue(){
        setInstallmentPaymentCheckboxValue(!installmentPaymentCheckboxValue)
    }

    function handleExchangeCheckboxValue(){
        setExchangeCheckboxValue(!exchangeCheckboxValue)
    }

    function handleDillersCheckboxValue(){
        setDillersCheckboxValue(!dillersCheckboxValue)
    }

    function handleOfficalDillersCheckboxValue(){
        setOfficalDillersCheckboxValue(!officalDillersCheckboxValue)
    }

    return (
        <div className={styles.checkboxes}>
            <FormControlLabel
                control={<Checkbox />}
                label={FILTER_CHECKBOXES.CUSTOMS_CLEARED}
                value={customsClearedCheckboxValue}
                onClick={handleCustomsClearedCheckboxValue}
            />
            <FormControlLabel
                control={<Checkbox />}
                label={FILTER_CHECKBOXES.INSTALLMENT_PAYMENT}
                value={installmentPaymentCheckboxValue}
                onClick={handleInstallmentPaymentCheckboxValue}
            />
            <FormControlLabel
                control={<Checkbox />}
                label={FILTER_CHECKBOXES.EXCHANGE}
                value={exchangeCheckboxValue}
                onClick={handleExchangeCheckboxValue}
            />
            <FormControlLabel
                control={<Checkbox />}
                label={FILTER_CHECKBOXES.DILLERS}
                value={dillersCheckboxValue}
                onClick={handleDillersCheckboxValue}
            />
            <FormControlLabel
                control={<Checkbox />}
                label={FILTER_CHECKBOXES.OFFICAL_DILLERS}
                value={officalDillersCheckboxValue}
                onClick={handleOfficalDillersCheckboxValue}
            />
        </div>
    );
})

export default OridnarySearchCheckboxes;