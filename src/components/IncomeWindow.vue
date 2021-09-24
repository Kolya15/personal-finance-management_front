<template>
    <div>
        <div class="p-grid">
            <div class="p-col-12">
                <p class="label">{{test.$t('global.amount')}}</p>
                <InputNumber type="text" v-model="income.amount" class="width-full"/>
            </div>
            <div class="p-col-12">
                <p class="label">{{test.$t('global.category')}}</p>
                <Dropdown v-model="income.categoryId" :options="listCategory" optionLabel="name" optionValue="_id" placeholder="Select a category" class="width-full"/>
            </div>
            <div class="p-col-12">
                <p class="label">{{test.$t('global.date')}}</p>
                <Calendar id="basic" v-model="income.date" class="width-full" :max-date="new Date()" dateFormat="mm-dd-yy"/>
            </div>
            <div class="p-col-12">
                <p class="label">{{test.$t('global.description')}}</p>
                <Textarea v-model="income.description" autoResize rows="5" cols="30" class="width-full"/>
            </div>
            <Button :label="test.$t('income.addIncome')" icon="pi pi-minus"  class="header__actions_expenses p-button-danger" @click="submit()"/>
        </div>
    </div>
</template>

<script>
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import Calendar from 'primevue/calendar';
import {inject, reactive, ref} from "vue";
import {useI18n} from '../plugin/i18n'

export default {
    name: 'IncomeWindow',
    components: {
        InputNumber,
        Dropdown,
        Calendar,
        Textarea
    },
    setup() {
        const test = useI18n()
        const income = reactive({
            amount: null,
            categoryId: '',
            date: new Date(),
        })


        let listCategory = ref([])

        const http = inject('http')
        const apiUrls = inject('apiUrls')
        const submit = () => {
            console.log(income)
            // http.post(apiUrls.income.addIncome, income).then(response => {
            //     console.log(response)
            // })
        }

        http.get(apiUrls.categories.income.get).then(response => {
            listCategory.value = response.data.category
        })


        return {
            test,
            income,
            listCategory,
            submit
        }
    }
}
</script>

<style scoped>

</style>