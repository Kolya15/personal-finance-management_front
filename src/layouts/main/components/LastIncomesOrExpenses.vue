<template>
    <div class="group">
        <h5 class="group__title">{{title}}</h5>
        <Divider class="custom__divider"/>
        <div v-for="item in data" :key="item._id" class="item">
            <span class="item__category">{{getNameCategories(item.categoryId)}}</span>
            <span class="item__amount">{{item.amount}}</span>
        </div>
    </div>
</template>

<script>
import Divider from 'primevue/divider';

export default {
    name: "LastIncomesOrExpenses",
    components: {
        Divider
    },
    props: {
        title: String,
        data: {
            type: Array,
            default:() => ([])
        },
        categories: {
            type: Array,
            default:() => ([])
        }
    },
    setup(props) {
        const getNameCategories = (categoryId) => {
            const category = props.categories.find(category => category._id === categoryId)
            return category?.name || '-'
        }

        return {
            getNameCategories
        }
    }
}
</script>

<style scoped lang="scss">
.group {
    margin-top: 10px;
    &__title {
        text-align: left;
    }

    .item {
        display: flex;
        justify-content: space-between;
        padding: 5px 10px;
        &__category {
            color: $normalTextColor
        }
        &__amount {
            color: $normalTextColor
        }
    }
}

</style>