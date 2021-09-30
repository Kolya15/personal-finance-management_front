<template>
    <Dialog
        :header="dialog.title"
        v-model:visible="dialog.state"
        :style="{width: dialog.width || 'auto'}"
        :modal="true"
        class="dialog"
    >
        <IncomeOrExpenseWindow v-if="dialog.childName === 'income' ||  dialog.childName === 'expense'"/>
    </Dialog>
</template>
<script>
import { computed } from 'vue'
import {useStore} from 'vuex'

import Dialog from 'primevue/dialog'
import IncomeOrExpenseWindow from '../../views/incomeOrExpense/IncomeOrExpenseWindow'
export default {
    name: 'DialogWindow',
    components: {
        Dialog,
        IncomeOrExpenseWindow
    },
    setup() {
        const store = useStore()

        return {
            dialog: computed(() => store.getters.getDialog)
        }
    }
}
</script>

<style lang="scss">
.dialog {
    min-width: 350px;
}
</style>