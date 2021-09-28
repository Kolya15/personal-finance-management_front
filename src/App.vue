<template>
    <div id="app">
        <Toast position="bottom-right"/>
<!--        <button @click="test()">CLICK</button>-->
        <component :is="layout">
            <router-view/>
        </component>
    </div>
</template>

<script>
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/main/MainLayout";
import apiUrls from './api/apiUrls';
import http from './api';
import './style/reset.scss'
import './style/global.scss'
import {useStore} from 'vuex'
import {watchEffect} from "vue";
import {provideI18n} from "./plugin/i18n";
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast'

export default {
    computed: {
        layout() {
            return (this.$route.meta.layout || 'AuthLayout')
        }
    },
    setup() {
        provideI18n();
        const store = useStore()
        const toast = useToast();
        watchEffect(() => {
            const message = {...store.getters.getNotification}
            if (message.state) {
                toast.add(message);
                setTimeout(() => {
                    store.commit('hideNotification')
                }, message.life)
            }

        })
    },
    provide() {
        return {
            apiUrls,
            http
        }
    },
    components: {
        AuthLayout,
        MainLayout,
        Toast
    }
}

</script>

<style lang="scss">
body, p {
    margin: 0;
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
