export default {
    auth: {
        registration: 'auth/registration',
        login: 'auth/login'
    },
    users: {
        get: 'user/all'
    },
    income: {
        addIncome: 'income/add'
    },
    categories: {
        income: {
            get: 'categories/income/',
            add: 'categories/income/add'
        }
    }
}