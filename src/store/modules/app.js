export default {
    state: {
        notification: {
            state: false,
            severity: 'success',
            summary: 'Success Message',
            detail:'Order submitted',
            life: 3000
        }
    },
    mutations: {
        setNotification: (state, payload) => {
            state.notification = payload
            state.notification.state = true
            // state.notification = Object.assign(state.notification, payload, {state: true})
        },
        hideNotification: (state) => {
            state.notification.state = false
        }
    },
    getters: {
        getNotification: (state) => state.notification
    }
}