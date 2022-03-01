<template>
    <v-data-table
        :headers='headers'
        :items='stockCryptoData'
        :items-per-page='10'
        class='elevation-1'
    />
</template>

<script>
import stockCryptoInfo from '@/data/stockCryptoInfo.json';

export default {
    name: 'StockCryptoTable',
    data () {
        return {
            headers: [
                {
                    text: '#',
                    align: 'start',
                    sortable: false,
                    value: 'num',
                },
                { text: 'Symbol', value: 'symbol' },
                { text: 'Current Price', value: 'current_price' },
                { text: 'Last Opening Price', value: 'opening_price' },
                { text: 'Last Closing Price', value: 'closing_price' },
                { text: 'Date Bookmarked', value: 'date_bookmarked' },
            ],
            stockCryptoData: stockCryptoInfo,
        }
    },
};
</script>

<style scoped>

</style>