<template>
<div class="main-layout">
    <custom-header class="main-layout__header"/>
    <div class="main-layout__content">
        <router-view/>
    </div>
</div>
</template>

<script>
import CustomHeader from './components/Header'
export default {
  name: "MainLayout",
    components: {
        CustomHeader
    }
}
</script>

<style lang="scss">
.main-layout {

    background-color: #181D1F;
    min-height: 100vh;

    &__content{
        margin:0 20px;
        background-color: #ffffff;
        border-radius: 10px;
        min-height: 100vh;
    }
}

</style>