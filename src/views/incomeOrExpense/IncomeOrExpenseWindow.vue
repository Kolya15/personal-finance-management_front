<template>
    <div>
        <div class="p-grid">
            <div class="p-col-12">
                <p class="label">{{$t('global.amount')}}</p>
                <InputNumber v-model="data.amount" id="locale-us" mode="decimal" locale="en-US" :min="0" :minFractionDigits="2" class="width-full"/>
            </div>
            <div class="p-col-12">
                <p class="label">{{$t('global.category')}}</p>
                <Dropdown v-model="data.categoryId" :options="listCategory" optionLabel="name" optionValue="_id" placeholder="Select a category" class="width-full"/>
            </div>
            <div class="p-col-12">
                <p class="label">{{$t('global.date')}}</p>
                <Calendar id="basic" v-model="data.date" class="width-full" :max-date="new Date()" dateFormat="mm-dd-yy"/>
            </div>
            <div class="p-col-12">
                <p class="label">{{$t('global.description')}}</p>
                <Textarea v-model="data.description" autoResize rows="5" cols="30" class="width-full"/>
            </div>
            <Button
                :label="checkIncomeTypeWindow ? $t('income.addIncome') : $t('expenses.addExpense')"
                :icon="checkIncomeTypeWindow ? 'pi pi-plus' : 'pi pi-minus'"
                class="header__actions_expenses width-full"
                :class="checkIncomeTypeWindow ? 'p-button-success' : 'p-button-danger'"
                @click="submit()"
            />
        </div>
    </div>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import Calendar from 'primevue/calendar';
import {computed, inject, reactive, ref} from 'vue'
import {useStore} from 'vuex'

export default {
    name: 'IncomeOrExpenseWindow',
    components: {
        Dropdown,
        Textarea,
        Calendar
    },
    setup() {
        const store = useStore()
        const http = inject('http')
        const apiUrls = inject('apiUrls')
        const checkIncomeTypeWindow = computed(() => store.getters.getDialog.childName === 'income')

        const data = reactive({
            amount: null,
            categoryId: '',
            date: new Date(),
        })

        const listCategory = ref([])
        http.get(apiUrls.categories[checkIncomeTypeWindow.value ? 'income' : 'expense'].get).then(response => {
            listCategory.value = response
        })

        const submit = () => {
            const url = checkIncomeTypeWindow.value ? apiUrls.income.addIncome : apiUrls.expense.addExpense
            http.post(url, data).then(response => {
                store.commit('setUser', response.data.user)
                store.commit('hideDialog')
            })
        }

        return {
            checkIncomeTypeWindow,
            data,
            listCategory,
            submit
        }
    }
}
</script>

<style scoped>

</style>