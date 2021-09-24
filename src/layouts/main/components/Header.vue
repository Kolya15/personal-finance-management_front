<template>
    <div class="header">
        <div class="header__user">
            <div class="header__user_logo">
                <i class="pi pi-user"/>
            </div>
            <div>
                <p class="header__user_name">Kolyan</p>
                <SelectLocale/>
            </div>
        </div>
        <div class="header__actions">
            <Button :label="i18n.$t('global.income')" icon="pi pi-plus" class="header__actions_income"
                    @click="addIncome()"/>
            <Button :label="i18n.$t('global.expense')" icon="pi pi-minus"
                    class="header__actions_expenses p-button-danger"
                    @click="addExpense()"/>
        </div>
        <div class="header__settings">
            <p>settings</p>
        </div>
    </div>
</template>

<script>
import {useI18n} from "../../../plugin/i18n";
import {useStore} from 'vuex'

import SelectLocale from './SelectLocale';

export default {
    name: 'Header',
    components: {
        SelectLocale
    },
    setup() {
        const i18n = useI18n();
        const store = useStore()

        const addIncome = () => {
            store.commit('setDialog', {
                title: i18n.$t('income.newIncome'),
                childName: 'incomeWindow'
            })
        }
        const addExpense = () => {
            store.commit('setDialog', {
                title: i18n.$t('expenses.newExpense'),
                childName: 'expenseWindow'
            })
        }

        return {
            i18n,
            addIncome,
            addExpense
        }
    }
}
</script>

<style scoped lang="scss">
.header {
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    background-color: #181D1F;

    &__user {
        display: flex;

        &_logo {
            border-radius: 50%;
            background-color: #ffffff;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #000000;
        }

        &_name {
            margin-left: 10px;
        }
    }

    &__actions {
        display: grid;
        grid-column-gap: 20px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;

        //&_income {
        //    background-color: rgba(8, 146, 86, .8);
        //    &:focus {
        //        outline: 0 none;
        //        outline-offset: 0;
        //        box-shadow: 0 0 0 0.2rem #15e38a;
        //    }
        //    &:enabled:active {
        //        background: #15e38a;
        //        color: #ffffff;
        //        border-color: #15e38a;
        //    }
        //}

        //&_expenses {
        //
        //}
    }
}
</style>