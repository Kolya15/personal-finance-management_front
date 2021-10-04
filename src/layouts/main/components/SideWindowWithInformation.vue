<template>
    <div class="window-with-information">
        <div class="current-balance">
            <h5 class="current-balance__title">{{$t('user.currentBalance')}}</h5>
            <h3 class="current-balance__balance">₴ {{user.currentBalance}}</h3>
        </div>
        <LastIncomesOrExpenses
            :title="$t('income.recentIncome')"
            :data="user.lastIncomes"
            :categories="categoriesIncome"
        />
        <LastIncomesOrExpenses
            :title="$t('expenses.recentExpense')"
            :data="user.lastExpenses"
            :categories="categoriesExpense"
        />
    </div>

</template>

<script>
import {useStore} from 'vuex'
import {computed, inject} from 'vue'
import LastIncomesOrExpenses from "./LastIncomesOrExpenses";

export default {
    name: 'SideWindowWithInformation',
    components: {
        LastIncomesOrExpenses
    },
    async setup() {
        const store = useStore()
        const apiUrls = inject('apiUrls')
        const categoriesIncome = await store.dispatch('get', apiUrls.categories.income.get)
        const categoriesExpense = await store.dispatch('get', apiUrls.categories.expense.get)

        return {
            user: computed(() => store.getters.user),
            categoriesIncome,
            categoriesExpense
        }
    }
}
</script>

<style lang="scss">
.window-with-information {
    width: 30%;
    max-width: 400px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 20px;
    background-color: #EDF4F7;

    .current-balance {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        &__title {
            color: $normalTextColor;
        }

        &__balance {
            font-size: 20px;
        }
    }
}
</style>