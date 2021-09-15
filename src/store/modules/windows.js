export default {
    state: {
        dialog: {
            state: false,
            childName: '',
            title: '',
            data: null,
            width: null
        }
    },
    mutations: {
        setDialog: (state, payload) => {
            state.dialog.state = true
            state.dialog = Object.assign(state.dialog, payload)
        },
        hideDialog: (state) => {
            state.dialog.state = false
        }

    },
    actions: {

    },
    getters: {
        getDialog: (state) => state.dialog
    }
}