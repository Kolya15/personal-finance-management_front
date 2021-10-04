<template>
    <div class="main-layout">
        <DialogWindow/>
        <custom-header class="main-layout__header"/>
        <div class="main-layout__content">
            <Suspense>
                <SideWindowWithInformation/>
            </Suspense>
            <router-view/>
        </div>
    </div>
</template>

<script>
import CustomHeader from './components/Header'
import SideWindowWithInformation from './components/SideWindowWithInformation'
import DialogWindow from '../../components/windows/DialogWindow'
import {useStore} from 'vuex'

export default {
    name: "MainLayout",
    components: {
        CustomHeader,
        SideWindowWithInformation,
        DialogWindow
    },
    setup() {
        const store = useStore()
        store.dispatch('getCurrentUser');
    }

}
</script>

<style lang="scss">
.main-layout {
    $marginLayout: 0 20px;
    background-color: #181D1F;
    min-height: 100vh;

    &__header {
        margin: $marginLayout;
    }

    &__content {
        margin: $marginLayout;
        display: flex;
        background-color: #ffffff;
        border-radius: 10px;
        min-height: 100vh;
    }
}

</style>