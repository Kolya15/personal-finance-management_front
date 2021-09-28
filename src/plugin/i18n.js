import { ref, provide, inject } from "vue";

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
    let matched = null
    const languages = Object.getOwnPropertyNames(loadLocaleMessages())
    languages.forEach(lang => {
        if(lang === navigator.language) {
            matched = lang
        }
    })
    if(!matched) {
        languages.forEach(lang => {
            const languagePartials = navigator.language.split('-')[0]
            if(lang === languagePartials) {
                matched = lang
            }
        })
    }
    return matched
}

const createI18n = () => ({
    locale: ref(localStorage.getItem('locale') || checkDefaultLanguage() || 'en'),
    messages: loadLocaleMessages(),
    $t(key) {
        const [one, two] = key.split('.')
        return this.messages[this.locale.value][one][two];
    }
});

const i18nSymbol = Symbol();

export function provideI18n() {
    const i18n = createI18n();
    provide(i18nSymbol, i18n);
}

export function useI18n() {
    const i18n = inject(i18nSymbol);
    console.log(i18n)
    if (!i18n) throw new Error("No i18n provided!!!");

    return i18n;
}