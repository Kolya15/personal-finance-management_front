<template>
    <div class="auth-layout">
        <div class="wrapper-title">
            <h1 class="wrapper-title__title">Finmap</h1>
            <p class="wrapper-title__subtitle">але ж можна просто керувати грошима свого бізнесу</p>
        </div>
        <div class="wrapper-form">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    name: "AuthLayout"
}
</script>

<style lang="scss">
.auth-layout {
    background-color: #f4f5f7;
    padding-top: 4%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .wrapper-title {
        margin-bottom: 20px;
        &__title {

        }

        &__subtitle {

        }
    }

    .wrapper-form {
        width: 500px;
        padding: 20px 40px;
        border-radius: 8px;
        box-shadow: 0 9px 40px 3px rgb(0 11 34 / 7%);
        background-color: #fff;
        .auth-form {
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
    }
}

</style>