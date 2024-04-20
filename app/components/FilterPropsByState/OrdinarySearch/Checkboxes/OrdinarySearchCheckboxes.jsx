import React, { useState } from 'react';
import styles from './OrdinarySearchCheckboxes.module.css'
import FILTER_CHECKBOXES from '../../../../constants/FilterDropdownsCheckboxes/Checkboxes'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const OridnarySearchCheckboxes = React.memo(() => {

    const [customsClearedCheckboxValue, setCustomsClearedCheckboxValue] = useState(false)
    const [installmentPaymentCheckboxValue, setInstallmentPaymentCheckboxValue] = useState(false)
    const [exchangeCheckboxValue, setExchangeCheckboxValue] = useState(false)
    const [dillersCheckboxValue, setDillersCheckboxValue] = useState(false)
    const [officalDillersCheckboxValue, setOfficalDillersCheckboxValue] = useState(false)

    return (
        <div className={styles.checkboxes}>
            <FormControlLabel
                control={<Checkbox />}
                label={FILTER_CHECKBOXES.CUSTOMS_CLEARED}
                value={customsClearedCheckboxValue}
                onClick={() => setCustomsClearedCheckboxValue(!customsClearedCheckboxValue)}
            />
            <FormControlLabel
                control={<Checkbox />}
                label={FILTER_CHECKBOXES.INSTALLMENT_PAYMENT}
                value={installmentPaymentCheckboxValue}
                onClick={() => setInstallmentPaymentCheckboxValue(!installmentPaymentCheckboxValue)}
            />
            <FormControlLabel
                control={<Checkbox />}
                label={FILTER_CHECKBOXES.EXCHANGE}
                value={exchangeCheckboxValue}
                onClick={() => setExchangeCheckboxValue(!exchangeCheckboxValue)}
            />
            <FormControlLabel
                control={<Checkbox />}
                label={FILTER_CHECKBOXES.DILLERS}
                value={dillersCheckboxValue}
                onClick={() => setDillersCheckboxValue(!dillersCheckboxValue)}
            />
            <FormControlLabel
                control={<Checkbox />}
                label={FILTER_CHECKBOXES.OFFICAL_DILLERS}
                value={officalDillersCheckboxValue}
                onClick={() => setOfficalDillersCheckboxValue(!officalDillersCheckboxValue)}
            />
        </div>
    );
})

export default OridnarySearchCheckboxes;