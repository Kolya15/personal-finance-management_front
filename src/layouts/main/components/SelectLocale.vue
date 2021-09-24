<template>
    <div class="select-locale">
        <div class="select-locale__current">
            <img class="flag-language" :src="getFlag(selectedLocale)" :alt="selectedLocale"/>
            <span @click="openList = !openList">{{locales.find(locale => locale.value === selectedLocale).name}}</span>
        </div>

        <transition name="fade">
            <ul v-show="openList" class="select-locale__list">
                <li v-for="item in locales" :key="item.value" @click="setLocale(item.value)">
                    {{item.name}}
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
import {useI18n} from "../../../plugin/i18n";
import {ref} from "vue";
import {flag} from '../../../mixins/flags'

export default {
    name: 'SelectLocale',
    mixins: [flag],
    setup() {
        const i18n = useI18n();
        const locales = ref([
            {
                name: 'English',
                value: 'en'
            },
            {
                name: 'Українська',
                value: 'ua'
            }
        ])

        const openList = ref(false)

        const selectedLocale = ref( localStorage.getItem('locale') || 'en')

        const setLocale = (value) => {
            i18n.locale.value = value;
            localStorage.setItem('locale', value)
            selectedLocale.value = value
            openList.value = false
        }

        return {
            locales,
            selectedLocale,
            openList,
            setLocale
        }
    }
}
</script>

<style scoped lang="scss">

.select-locale {
    position: relative;
    cursor: pointer;
    &__current {
        display: flex;
        align-items: center;
        width: 100px;
        .flag-language {
            width: 20px;
            height: 15px;
            margin-right: 5px;
        }
    }

    &__list {
        position: absolute;
        top: 20px;
        left: 10px;
        background-color: rgba(0, 0, 0, 0.7);
        border: 3px solid #787878;
        border-radius: 10px;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>