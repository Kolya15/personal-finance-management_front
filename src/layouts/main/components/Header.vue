<template>
    <div class="header">
        <div class="header__logo">
            <p>header__logo</p>
        </div>
        <div class="header__actions">
            <Button label="Plus" icon="pi pi-plus" />
            <Button label="Minus" icon="pi pi-minus" />
        </div>
        <div class="header__settings">
            <p>header__settings</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped lang="scss">
.header {
    color: #ffffff;
    display: flex;
    justify-content: space-between;

    width: 100%;
    background-color: #181D1F;
}
</style>