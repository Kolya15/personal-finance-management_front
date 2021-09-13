<template>
    <div class="auth-layout">
        <div class="wrapper-title">
            <h1 class="wrapper-title__title">Finmap</h1>
            <p class="wrapper-title__subtitle">але ж можна просто керувати грошима свого бізнесу</p>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "AuthLayout"
}
</script>

<style scoped lang="scss">
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
}

</style>