import i18n, { selectedLocale } from '../../plugin/i18n'


export default {
    state: {
        locale: selectedLocale
    },

    mutations: {
        updateLocale(state, newLocale) {
            i18n.locale = newLocale
            state.locale = newLocale
            localStorage.setItem('locale', newLocale)
        }
    },

    getters: {
        getLocale: state => state.locale
    }
}
