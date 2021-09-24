import country from 'country-flags-svg'

export const flag = {
    methods: {
        getFlag(iso2) {
            return country.findFlagUrlByIso2Code(iso2 === 'en' ? 'gb' : iso2)
        }
    }
}