<template>
    <div id="app">
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
import { provideI18n} from "./plugin/i18n";
export default {
    computed: {
        layout() {
            return (this.$route.meta.layout || 'AuthLayout')
        }
    },
    setup() {
        provideI18n();
    },
    provide() {
        return {
            apiUrls,
            http
        }
    },
    components: {
        AuthLayout,
        MainLayout
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
