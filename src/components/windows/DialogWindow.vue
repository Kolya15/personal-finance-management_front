<template>
    <Dialog
        :header="dialog.title"
        v-model:visible="dialog.state"
        :style="{width: dialog.width || 'auto'}"
        :modal="true"
        class="dialog"
    >
        <IncomeWindow v-if="dialog.childName === 'incomeWindow'"/>
        <ExpenseWindow v-if="dialog.childName === 'expenseWindow'"/>
    </Dialog>
</template>
<script>
import { computed } from 'vue'
import {useStore} from 'vuex'

import Dialog from 'primevue/dialog'
import IncomeWindow from '../IncomeWindow'
import ExpenseWindow from '../ExpenseWindow'
export default {
    name: 'DialogWindow',
    components: {
        Dialog,
        IncomeWindow,
        ExpenseWindow
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