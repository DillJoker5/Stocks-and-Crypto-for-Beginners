<template>
    <v-card>
        <v-card-title class='gray-darken-2--text blue lighten-3'>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers='headers'
            :items='stockCryptoData'
            :items-per-page='10'
            class='elevation-1 gray-darken-2--text blue lighten-3'
            :footer-props="{
                showCurrentPage: true,
                prevIcon: 'mdi-arrow-left',
                nextIcon: 'mdi-arrow-right',
                showFirstLastPage: true,
                itemsPerPageOptions: [10, 25, 50, -1],
            }"
            :sort-by="[
                'symbol',
            ]"
            :sort-asc="[
                'true',
                'false'
            ]"
            multi-sort
            :search='search'
            dense
        >
            <template v-slot:item.current_price="{ item }">
                <v-chip
                    :color="getCurrentPriceColor(item)"
                    dark
                >
                    {{ item.current_price }}
                </v-chip>
            </template>
            <template v-slot:item.favorite="{ item }">
                <v-simple-checkbox 
                    v-model='item.favorite'
                    color='gray'
                ></v-simple-checkbox>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import stockCryptoInfo from '@/data/stockCryptoInfo.json';

/*
    Steps to Complete
    1) Fix icons in Table
    2) Style Table
*/
export default {
    name: 'StockCryptoTable',
    data () {
        return {
            headers: [
                { text: 'Symbol', align: "start", value: 'symbol' },
                { text: 'Name (EN)', value: 'name' },
                { text: 'Current Price ($)', value: 'current_price' },
                { text: 'Last Opening Price ($)', value: 'opening_price' },
                { text: 'Last Closing Price ($)', value: 'closing_price' },
                { text: 'Date Bookmarked (MM/DD/YYYY)', value: 'date_bookmarked' },
                { text: 'Favorite', value: 'favorite' },
            ],
            search: '',
            stockCryptoData: stockCryptoInfo,
        }
    },
    methods: {
        getCurrentPriceColor(stockCrypto) {
            if(stockCrypto.current_price > stockCrypto.opening_price) return 'green';
            else if(stockCrypto.current_price === stockCrypto.opening_price) return 'gray';
            else return 'red';
        }
    }
};
</script>