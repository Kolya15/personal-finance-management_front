<template>
    <div>
        <div class="p-grid">
            <div class="p-col-12">
                <p class="label">{{i18n.$t('global.amount')}}</p>
                <InputNumber type="text" v-model="expense.amount" class="width-full"/>
            </div>
            <div class="p-col-12">
                <p class="label">{{i18n.$t('global.category')}}</p>
                <Dropdown v-model="expense.categoryId" :options="listCategory" optionLabel="name" optionValue="_id" placeholder="Select a category" class="width-full"/>
            </div>
            <div class="p-col-12">
                <p class="label">{{i18n.$t('global.date')}}</p>
                <Calendar id="basic" v-model="expense.date" class="width-full" :max-date="new Date()" dateFormat="mm-dd-yy"/>
            </div>
            <div class="p-col-12">
                <p class="label">{{i18n.$t('global.description')}}</p>
                <Textarea v-model="expense.description" autoResize rows="5" cols="30" class="width-full"/>
            </div>
            <Button :label="i18n.$t('expenses.addExpense')" icon="pi pi-minus"  class="header__actions_expenses p-button-danger" @click="submit()"/>
        </div>
    </div>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import Calendar from 'primevue/calendar';
import {inject, reactive, ref} from 'vue'
import {useI18n} from '../plugin/i18n'

export default {
    name: 'ExpenseWindow',
    components: {
        Dropdown,
        Textarea,
        Calendar
    },
    setup() {

        const i18n = useI18n()

        const expense = reactive({
            amount: null,
            categoryId: '',
            date: new Date(),
        })

        const listCategory = ref([])

        const http = inject('http')
        const apiUrls = inject('apiUrls')
        const submit = () => {
            http.post(apiUrls.expense.addExpense, expense).then(response => {
                console.log(response)
            })
        }

        http.get(apiUrls.categories.expense.get).then(response => {
            listCategory.value = response.data.category
        })

        return {
            i18n,
            expense,
            listCategory,
            submit
        }
    }
}
</script>

<style scoped>

</style>