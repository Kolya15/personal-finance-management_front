<template>
    <Dialog
        :header="dialog.title"
        v-model:visible="dialog.state"
        :style="{width: dialog.width || 'auto'}"
        :modal="true"
        class="dialog"
    >
        <IncomeWindow v-if="dialog.childName === 'incomeWindow'"/>
    </Dialog>
</template>
<script>
import { computed } from 'vue'
import {useStore} from 'vuex'

import Dialog from 'primevue/dialog'
import IncomeWindow from '../../layouts/main/components/IncomeWindow'
export default {
    name: 'DialogWindow',
    components: {
        Dialog,
        IncomeWindow
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