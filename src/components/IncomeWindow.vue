<template>
    <div>
        <div class="p-grid">
            <Form @submit="submit()">
                <div class="p-col-12">
                    <p class="label">{{i18n.$t('global.amount')}}</p>
                    <InputNumber type="text" v-model="income.amount" class="width-full"/>
                </div>
                <div class="p-col-12">
                    <p class="label">{{i18n.$t('global.category')}}</p>
                    <Dropdown v-model="income.categoryId" :options="listCategory" optionLabel="name" optionValue="_id" placeholder="Select a category" class="width-full"/>
                </div>
                <div class="p-col-12">
                    <p class="label">{{i18n.$t('global.date')}}</p>
                    <Calendar id="basic" v-model="income.date" class="width-full" :max-date="new Date()" dateFormat="mm-dd-yy"/>
                </div>
                <div class="p-col-12">
                    <p class="label">{{i18n.$t('global.description')}}</p>
                    <Field name="input" rules="required" v-slot="{ field }">
                        <Textarea v-bind="field" v-model="income.description" autoResize rows="5" cols="30" class="width-full"/>
                    </Field>
                    <ErrorMessage name="input" />
                </div>
                <Button :label="i18n.$t('income.addIncome')" type="submit" icon="pi pi-minus"  class="header__actions_expenses p-button-danger" />
            </Form>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import Calendar from 'primevue/calendar';
import {inject, reactive, ref, onUnmounted} from "vue";
import {useI18n} from '../plugin/i18n'

export default {
    name: 'IncomeWindow',
    components: {
        Form,
        Field,
        ErrorMessage,
        InputNumber,
        Dropdown,
        Calendar,
        Textarea
    },
    setup() {
        const i18n = useI18n()
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


        const simpleSchema = {
            // If you defined global rules you can also use them
            count: 'required|min:8',
            // ...
        }

        onUnmounted(() => {
            console.log('onUnmounted')
        })

        return {
            i18n,
            income,
            listCategory,
            submit,
            simpleSchema
        }
    }
}
</script>

<style scoped>

</style>