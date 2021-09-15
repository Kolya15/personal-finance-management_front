<template>
    <div>
        <div class="p-grid">
            <div class="p-col-12">
                <p class="label">{{$t('global.amount')}}</p>
                <InputNumber type="text" v-model="income.amount" class="width-full"/>
            </div>
            <div class="p-col-12">
                <p class="label">{{$t('global.category')}}</p>
                <Dropdown v-model="income.categoryId" :options="listCategory" optionLabel="name" optionValue="id" placeholder="Select a category" class="width-full"/>
            </div>
            <div class="p-col-12">
                <p class="label">{{$t('global.description')}}</p>
                <Textarea v-model="income.text" autoResize rows="5" cols="30" class="width-full"/>
            </div>
            <Button :label="$t('income.addIncome')" icon="pi pi-minus"  class="header__actions_expenses p-button-danger" @click="submit()"/>
        </div>
    </div>
</template>

<script>
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';

// import InputText from 'primevue/inputtext';
import {inject, reactive} from "vue";

export default {
    name: 'IncomeWindow',
    components: {
        InputNumber,
        Dropdown,
        Textarea
    },
    setup() {
        const income = reactive({
            amount: 0,
            categoryId: '',
            date: new Date(),
        })

        const listCategory = reactive([
            {id: 1, name: 'ЗП'},
            {id: 2, name: 'Борг'}
        ])

        const http = inject('http')
        const apiUrls = inject('apiUrls')
        const submit = () => {
            http.post(apiUrls.income.addIncome, income).then(response => {
                console.log(response)
            })
        }

        return {
            income, listCategory, submit
        }
    }
}
</script>

<style scoped>

</style>