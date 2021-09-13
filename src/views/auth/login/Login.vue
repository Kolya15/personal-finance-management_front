<template>
    <div class="wrapper-form">
        <div class="wrapper-form__header">
            <h2 class="form-header__title">Войти</h2>
            <router-link to="/auth/registration" class="form-header__subtitle">
                Немає акаунту? Зареєструйтесь
            </router-link>
        </div>

        <div class="login-form">
            <div class="login-form__input">
                <p class="label">User name</p>
                <InputText type="text" v-model="user.name"/>
            </div>
            <div class="login-form__input login-form__input_password">
                <p class="label">Password</p>
                <Password v-model="user.password" toggleMask :feedback="false"/>
            </div>
        </div>
        <Button label="Вход"  @click="signIn()" class="login-form__button p-button-rounded"/>
    </div>

</template>

<script>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';

import {inject, reactive} from 'vue'

export default {
    name: "Login",
    components: {
        InputText,
        Password,
        Button
    },
    setup() {
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
        const http = inject( 'http')
        const signIn = () => {
            http.post(apiUrls.auth.login, {
                userName: user.name,
                password: user.password,
            }).then((response) => {
                console.log(response)
            })
        }

        return {user, errorList,  signIn}
    }
}
</script>

<style lang="scss">

.login-form {
    &__input {
        width: 100%;
        margin-bottom: 30px;

        .label{
            display: flex;
            margin-bottom: 5px;
            font-size: 0.8em;
            color: #787878;
        }

        input {
            width: 100%;
        }

        .p-password {
            width: 100% ;
            input{
                width: 100% ;
            }
        }
    }

    &__button {
        margin-top: 20px;
        width: 100%;

    }
}

</style>