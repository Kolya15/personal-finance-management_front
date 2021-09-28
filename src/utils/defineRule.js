import { defineRule} from 'vee-validate';
// import {useI18n} from '../plugin/i18n';

// const i18n = useI18n()

defineRule('required', value => {
    if (!value || !value.length) {
        // return i18n.$t('validationError.required')
        return 'validationError.required'
    }
    return true;
});
