<template>
    <div>
        <v-card v-if="tableIsLoaded">
            <v-card-title class='gray-darken-2--text blue lighten-3'>
                <v-text-field
                    v-model="search"
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
                <template v-slot:[`item.current_price`]="{ item }">
                    <v-chip
                        :color="getCurrentPriceColor(item)"
                        dark
                    >
                        {{ item.current_price }}
                    </v-chip>
                </template>
                <template v-slot:[`item.favorite`]="{ item }">
                    <input
                        type="checkbox"
                        v-model="item.favorite"
                        :value="item.favorite"
                        disabled="true"
                        @click="createApiFavorite"
                    />
                </template>
            </v-data-table>
        </v-card>
        <div v-else class="loader" />
    </div>
   
</template>

<script>
import stockCryptoInfo from '@/data/stockCryptoInfo.json';

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
            stockCryptoFavorites: [],
            tableIsLoaded: true,
        }
    },
    methods: {
        getCurrentPriceColor(stockCrypto) {
            if(stockCrypto.current_price > stockCrypto.opening_price) return 'green';
            else if(stockCrypto.current_price === stockCrypto.opening_price) return 'gray';
            else return 'red';
        },
        async createApiFavorite() {
            try {
                let createApiFavoriteUrl = '/newApiFavorite';

                await this.$http.post(createApiFavoriteUrl, {
                    'UserId': this.UserId,
                    'StockId': '',
                    'ApiUrl': ''
                }, {
                    'Content-Type': 'application/json',
                    'UserGuid': this.UserGuid
                });
            } catch (error) {
                throw new Error(error);
            }
        }
    },
    async created() {
        if (this.UserGuid) {
            try {
                let readApiFavoritesUrl = '/readApiFavorites';

                let readApiFavoritesResponse = await this.$http.post(readApiFavoritesUrl, {
                }, {
                    'Content-Type': 'application/json'
                });

                this.stockCryptoFavorites = readApiFavoritesResponse.data.data;
            } catch (error) {
                throw new Error(error);
            }
        }
    }
};
</script>

<style scoped>
.loader {
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #0D47A1;
  width: 75px;
  height: 75px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  justify-self: center;
  margin: 0 auto;
  margin-top: 2vh;
}

@-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
}
</style>