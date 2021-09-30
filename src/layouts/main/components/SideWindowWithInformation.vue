<template>
    <div class="window-with-information">
        <div class="current-balance">
            <h5 class="current-balance__title">Поточний баланс</h5>
            <h3 class="current-balance__balance">₴ {{user.currentBalance}}</h3>
        </div>
        <div class="latest-salaries">
            <h5 class="current-balance__title">Поточний баланс</h5>
            <h3 class="current-balance__balance">₴ 1 189 879.52</h3>
            <span>останні зарплати</span>
        </div>
        <div class="latest-costs">
            <span>останні найбільші витрати за цей місяць</span>
        </div>
    </div>

</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
    name: 'SideWindowWithInformation',
    setup() {
        const store = useStore()
        return {
            user: computed(() => store.getters.user)
        }
    }
}
</script>

<style scoped lang="scss">
.window-with-information {
    width: 30%;
    max-width: 400px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: #EDF4F7;
}
</style>