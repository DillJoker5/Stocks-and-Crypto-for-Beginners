<template>
    <span>
        <br />
        <h1 class='text-center'>Your Stock Crypto Table</h1>
        <stock-crypto-table />
        <comments-or-recommendations />
    </span>
</template>

<script>
import StockCryptoTable from '../components/StockCryptoTable.vue';
import CommentsOrRecommendations from '../components/CommentsOrRecommendations.vue';

export default {
    name: 'ViewStockCryptoTable',
    components: {
        StockCryptoTable,
        CommentsOrRecommendations,
    },
};
</script>

<style scoped>

</style>