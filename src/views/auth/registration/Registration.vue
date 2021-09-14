<template>
    <div>
        <div class="wrapper-form__header">
            <h2 class="form-header__title">Регистрация</h2>
            <router-link to="/auth/login" class="form-header__subtitle">
                Є аккаунт? Ввійти
            </router-link>
        </div>
        <div>
            <div class="auth-form__input">
                <p class="label">User name</p>
                <InputText type="text" v-model="newUser.name"/>
            </div>
            <div class="auth-form__input">
                <p class="label">Password</p>
                <Password v-model="newUser.password" toggleMask/>
            </div>
            <div class="auth-form__input p-input-icon-left">
                <p class="label">Confirm Password</p>
                <Password v-model="newUser.confirmPassword" toggleMask/>
            </div>
        </div>
        <Button label="Регистрация"  @click="registration()" class="auth-form__button p-button-rounded"/>
    </div>

</template>

<script>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';

import {inject, reactive} from 'vue'
import {useStore} from 'vuex'

export default {
    name: "Registration",
    components: {
        InputText,
        Password,
        Button
    },
    setup() {
        const store = useStore()

        const newUser = reactive({
            name: '',
            password: '',
            confirmPassword: ''
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
        const registration = () => {
            store.dispatch('loginOrRegistration', {url: apiUrls.auth.registration, user:newUser })
        }

        return { errorList, newUser,  registration}
    }
}
</script>

<style lang="scss">

</style>