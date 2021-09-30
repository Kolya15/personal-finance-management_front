import {createI18n} from "vue-i18n";

export function loadLocaleMessages() {
    const locales = require.context(
        '@/locales',
        true,
        /[A-Za-z0-9-_,\s]+\.json$/i
    )
    const messages = {}
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if(matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages
}


function checkDefaultLanguage() {
    const languages = Object.keys(loadLocaleMessages())
    const languagePartials = navigator.language.split('-')[0]
    if(languagePartials) {
        return languages.find(lang => lang === languagePartials)
    }
}

export const i18n = createI18n({
    locale: localStorage.getItem('locale') || checkDefaultLanguage() || 'en',
    messages: loadLocaleMessages(),
});