<template>
    <router-view/>
</template>

<script>
export default {
    name: "Auth"
}
</script>

<style  lang="scss">

.wrapper-form {
    width: 500px;
    padding: 20px 40px;
    border-radius: 8px;
    box-shadow: 0 9px 40px 3px rgb(0 11 34 / 7%);
    background-color: #fff;

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1em;
        .form-header__title {

        }

        .form-header__subtitle {

        }
    }
}
</style>