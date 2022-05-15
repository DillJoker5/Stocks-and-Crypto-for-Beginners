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
                :items-per-page='15'
                class='elevation-1 gray-darken-2--text blue lighten-3'
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
                        @click="createApiFavorite"
                    />
                </template>
            </v-data-table>
        </v-card>
        <div v-else class="loader" />
    </div>
   
</template>

<script>
import stockCryptoSymbolList from '../data/stockCryptoInfo.json';
import cryptoSymbolList from '../data/cryptoInfo.json';

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
                { text: 'Favorite', value: 'favorite' },
            ],
            search: '',
            stockCryptoData: [],
            stockCryptoFavorites: [],
            tableIsLoaded: false,
        }
    },
    methods: {
        getCurrentPriceColor(stockCrypto) {
            if(stockCrypto.current_price > stockCrypto.opening_price) return 'green';
            else if(stockCrypto.current_price === stockCrypto.opening_price) return 'gray';
            else return 'red';
        },
        async createApiFavorite(e) {
            try {
                let createApiFavoriteUrl = '/newApiFavorite';
                let userGuid = localStorage.getItem('userGuid');
                let userId = parseInt(localStorage.getItem('userId'));
                const stockId = e.path[2].firstChild.innerText;

                await this.$http.post(createApiFavoriteUrl, {
                    'UserId': userId,
                    'StockId': stockId,
                    'ApiUrl':  `https://api.finage.co.uk/last/stocks/?symbols=${stockId}`
                }, {
                    headers:{
                    'Content-Type': 'application/json',
                    'UserGuid': userGuid
                    }
                });
            } catch (error) {
                throw new Error(error);
            }
        }
    },
    async created() {
        const finageToken = 'API_KEY8bINEKJOO1I2C58YDWXOT8RXI7QW6Q07';

        const marketSearchResults = stockCryptoSymbolList;

        let marketSearchSymbols = '';
        let marketSearchNames = [];
        let marketSearchResultSymbols = []

        for (let i = 0; i < 10; i++) {
            let randomIndex = Math.floor(Math.random() * 24);
            marketSearchSymbols += marketSearchResults[randomIndex].symbol;
            marketSearchNames.push(marketSearchResults[randomIndex].name);
            marketSearchResultSymbols.push(marketSearchResults[randomIndex].symbol);
            if (i !== 9) {
                marketSearchSymbols += ','
            }
        }

        const multipleStockLastQuotesUrl = `https://api.finage.co.uk/last/stocks/?symbols=${marketSearchSymbols}&apikey=${finageToken}`;
        const multipleStockLastTradeUrl = `https://api.finage.co.uk/last/trade/stocks?symbols=${marketSearchSymbols}&apikey=${finageToken}`;

        let multipleStockLastQuotesResponse = await this.$http.get(multipleStockLastQuotesUrl, {
        }, {
            'Content-Type': 'application/json'
        });

        let mutipleStockLastTradeResponse = await this.$http.get(multipleStockLastTradeUrl, {
        }, {
            'Content-Type': 'application/json'
        });

        for (let i = 0; i < 10; i++) {
            let obj = {};
            obj['symbol'] = marketSearchResultSymbols[i];
            obj['name'] = marketSearchNames[i];
            obj['current_price'] = multipleStockLastQuotesResponse.data[i].ask;
            obj['opening_price'] = mutipleStockLastTradeResponse.data[i].price;
            obj['closing_price'] = mutipleStockLastTradeResponse.data[i].price;

            this.stockCryptoData.push(obj);
        }

        const cryptoSearchResults = cryptoSymbolList;

        for (let j = 0; j < 2; j++) {
            let index = Math.floor(Math.random() * 5);
            let cryptoLastQuoteUrl = `https://api.finage.co.uk/last/quote/crypto/${cryptoSearchResults[index].symbol}?apikey=${finageToken}`;
            let cryptoLastTradeUrl = `https://api.finage.co.uk/last/crypto/${cryptoSearchResults[index].symbol}?apikey=${finageToken}`;

            let cryptoLastQuoteResponse = await this.$http.get(cryptoLastQuoteUrl, {
            }, {
                'Content-Type': 'application/json'
            });

            let cryptoLastQuoteResult = cryptoLastQuoteResponse.data;

            let cryptoLastTradeResponse = await this.$http.get(cryptoLastTradeUrl, {
            }, {
                'Content-Type': 'application/json'
            });

            let cyrptoLastTradeResult = cryptoLastTradeResponse.data;
            
            let obj = {};

            obj['symbol'] = cryptoSearchResults[index].symbol;
            obj['name'] = cryptoSearchResults[index].name;
            obj['current_price'] = cryptoLastQuoteResult.ask;
            obj['opening_price'] = cyrptoLastTradeResult.price;
            obj['closing_price'] = cryptoLastQuoteResult.bid;

            this.stockCryptoData.push(obj);
        }

        let userGuid = localStorage.getItem('userGuid');

        if (userGuid) {
            try {
                let readApiFavoritesUrl = '/readApiFavorites';

                let readApiFavoritesResponse = await this.$http.post(readApiFavoritesUrl, {
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'userguid': userGuid.toString()
                    }
                });

                this.stockCryptoFavorites = readApiFavoritesResponse.data.Data;
            } catch (error) {
                throw new Error(error);
            }
        }

        this.tableIsLoaded = true;
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
  margin-bottom: 2vh;
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