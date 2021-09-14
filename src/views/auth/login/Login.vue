<template>
    <div>
        <div class="wrapper-form__header">
            <h2 class="form-header__title">Войти</h2>
            <router-link to="/auth/registration" class="form-header__subtitle">
                Немає акаунту? Зареєструйтесь
            </router-link>
        </div>

        <div class="auth-form">
            <div class="auth-form__input">
                <p class="label">User name</p>
                <InputText type="text" v-model="user.name"/>
            </div>
            <div class="auth-form__input auth-form__input_password">
                <p class="label">Password</p>
                <Password v-model="user.password" toggleMask :feedback="false"/>
            </div>
        </div>
        <Button label="Вход"  @click="signIn()" class="auth-form__button p-button-rounded"/>
    </div>

</template>

<script>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';

import {inject, reactive} from 'vue'
import {useStore} from 'vuex'
export default {
    name: "Login",
    components: {
        InputText,
        Password
    },
    setup() {
        const store = useStore()
        const user = reactive({
            name: '',
            password: ''
        })


        const errorList = {
            email: {
                show: false,
                emailAlreadyTaken: 'Email already taken',
            },
            password: {
                show: false,
                passwordBeLessThan8: 'Password must be at least 8 characters',
                passwordMismatch: 'Password mismatch'
            }

        }

        const apiUrls = inject('apiUrls')

        const signIn = () => {
            store.dispatch('loginOrRegistration', {url: apiUrls.auth.login, user: user })
        }

        return {user, errorList,  signIn}
    }
}
</script>

<style lang="scss">
</style>