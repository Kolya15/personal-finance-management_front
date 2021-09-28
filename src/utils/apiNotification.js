import {provide, reactive} from "vue";

export default (data) => {
    if (data) {
        const error = reactive({...data})
        provide('error', error);
    }
}
