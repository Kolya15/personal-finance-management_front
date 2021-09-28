export default {
    auth: {
        registration: 'auth/registration',
        login: 'auth/login'
    },
    currentUser: {
        get: 'current-user'
    },
    users: {
        get: 'user/all'
    },
    income: {
        addIncome: 'income/add'
    },
    expense: {
        addExpense: 'expense/add'
    },
    categories: {
        income: {
            get: 'categories/income/',
            add: 'categories/income/add'
        },
        expense: {
            get: 'categories/expense/',
            add: 'categories/expense/add'
        }
    }
}