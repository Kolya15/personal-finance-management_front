<template>
    <div class="wrapper-form">
        <div class="wrapper-form__header">
            <h2 class="form-header__title">Регистрация</h2>
            <router-link to="/auth/login" class="form-header__subtitle">
                Є аккаунт? Ввійти
            </router-link>
        </div>
        <div>
            <div class="registration-form__input">
                <p class="label">User name</p>
                <InputText type="text" v-model="newUser.name"/>
            </div>
            <div class="registration-form__input">
                <p class="label">Password</p>
                <Password v-model="newUser.password" toggleMask/>
            </div>
            <div class="registration-form__input p-input-icon-left">
                <p class="label">Confirm Password</p>
                <Password v-model="newUser.confirmPassword" toggleMask/>
            </div>
        </div>
        <Button label="Регистрация"  @click="registration()" class="login-form__button p-button-rounded"/>
    </div>

</template>

<script>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';

import {inject, reactive} from 'vue'

export default {
    name: "Registration",
    components: {
        InputText,
        Password,
        Button
    },
    setup() {
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
        const http = inject( 'http')
        const registration = () => {
            http.post(apiUrls.auth.registration, {
                userName: newUser.name,
                password: newUser.password,
            }).then((response) => {
                console.log(response)
            })
        }

        return { errorList, newUser,  registration}
    }
}
</script>

<style lang="scss">

.registration-form {
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