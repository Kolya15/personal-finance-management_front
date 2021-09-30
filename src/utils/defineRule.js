import { defineRule} from 'vee-validate'
import {i18n} from '../plugin/i18n'
const {t} = i18n.global
//
// const getValueInObject = (value) => {
//     return value && typeof value === 'object' ? value.value : value
// }

defineRule('required',  (value) => {
    if (!value || !value.length) {
        return t('validationError.required')
    }
    return true;
});
