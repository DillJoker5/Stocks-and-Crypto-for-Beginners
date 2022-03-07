<template>
    <span>
    <v-data-table
        :headers='headers'
        :items='stockCryptoData'
        :items-per-page='10'
        class='elevation-1'
        :footer-props="{
            showFirstLastPage: true,
            firstIcon: 'mdi-arrow-collapse-left',
            lastIcon: 'mdi-arrow-collapse-right',
            prevIcon: 'mdi-minus',
            nextIcon: 'mdi-plus',
        }"
    >
    </v-data-table>
    </span>
</template>

<script>
import stockCryptoInfo from '@/data/stockCryptoInfo.json';
/*
    Steps to Complete
    1) Add Pagination to Table
    2) Add Sorting to Table
    3) Style Table
*/
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
                { text: 'Name (EN)', value: 'name' },
                { text: 'Current Price ($)', value: 'current_price' },
                { text: 'Last Opening Price ($)', value: 'opening_price' },
                { text: 'Last Closing Price ($)', value: 'closing_price' },
                { text: 'Date Bookmarked (MM/DD/YYYY)', value: 'date_bookmarked' },
            ],
            stockCryptoData: stockCryptoInfo,
        }
    },
};
</script>

<style scoped>

</style>