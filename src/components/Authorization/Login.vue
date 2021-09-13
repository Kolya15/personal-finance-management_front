<template>
    <div class="wrapper-form">
        <h2>Войти</h2>
        <div v-if="isLogin" class="login-form">
            <div class="login-form__input">
                <p class="label">User name</p>
                <InputText type="text" v-model="user.name"/>
            </div>
            <div class="login-form__input login-form__input_password">
                <p class="label">Password</p>
                <Password v-model="user.password" toggleMask/>
            </div>
        </div>
        <div v-else>
            <div class="login-form__input">
                <p class="label">User name</p>
                <InputText type="text" v-model="newUser.name"/>
            </div>
            <div class="login-form__input">
                <p class="label">Password</p>
                <Password v-model="newUser.password" toggleMask/>
            </div>
            <div class="login-form__input p-input-icon-left">
                <p class="label">Confirm Password</p>
                <Password v-model="newUser.confirmPassword" toggleMask/>
            </div>
        </div>
        <Button :label="isLogin ? 'Вход' : 'Регистрация'"  @click="signIn()" class="login-form__button p-button-rounded"/>
        <Button :label="isLogin ? 'Регистрация' : 'Вход'" @click="changeVisibleForm()"
                class="login-form__button p-button-secondary p-button-outlined p-button-rounded"/>
    </div>

</template>

<script>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';

import {inject, ref, reactive} from 'vue'

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

        let isLogin = ref(true)

        const apiUrls = inject('apiUrls')
        const http = inject( 'http')
        const signIn = () => {
            if(isLogin.value) {
                http.post(apiUrls.auth.login, {
                    userName: user.name,
                    password: user.password
                })
            } else {
                http.post(apiUrls.auth.registration, {
                    userName: newUser.name,
                    password: newUser.password
                })
            }
        }
        const changeVisibleForm = () => isLogin.value = !isLogin.value

        return {user, errorList, newUser, isLogin,  signIn, changeVisibleForm}
    }
}
</script>

<style lang="scss">
.wrapper-form {
    width: 500px;
    padding: 20px 40px;
    border-radius: 8px;
    box-shadow: 0 9px 40px 3px rgb(0 11 34 / 7%);
    background-color: #fff;
}

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