<template>
    <div>
    <div>
        <h1>The latest stock and crypto news</h1>
        <hr>
        <br>
        <v-card v-if="tableIsLoaded">
            <v-data-table
                :headers='headers'
                :items='stockCryptoData'
                :items-per-page='5'
                class='elevation-1 gray-darken-2--text blue lighten-3'
                :sort-by="[
                    'symbol',
                ]"
                :sort-asc="[
                    'true',
                    'false'
                ]"
            >
                <template v-slot:[`item.current_price`]="{ item }">
                    <v-chip
                        :color="getCurrentPriceColor(item)"
                        dark
                    >
                        {{ item.current_price }}
                    </v-chip>
                </template>
            </v-data-table>
        </v-card>
        <div v-else class="loader" />
    </div>
    <br>
    <h1>See the hottest threads below!</h1>
    <hr>
    <br>
    <div>
        <v-card v-if="threadIsLoaded">
            <v-data-table
                :headers='threadHeaders'
                :items='threadData'
                class='elevation-1 gray-darken-2--text blue lighten-3'
                :sort-by="['name']"
                :sort-asc="[
                    'true',
                    'false'
                ]"
                multi-sort
                dense
                @click:row="onThreadRowClick"
            >
                <template v-slot:[`item.favorite`]="{ item }">
                    <input
                        type="checkbox"
                        v-model="item.favorite"
                        :value="item.favorite"
                        disabled="true" 
                        @click="createThreadFavorite"
                    />
                </template>
            </v-data-table>
        </v-card>
        <div class="loader" v-else />
    </div>
    </div>
</template>

<script>
import stockCryptoSymbolList from '../data/stockCryptoInfo.json';

export default{
    name: 'StockCryptoTable',
        data () {
        return {
            headers: [
                { text: 'Symbol', align: "start", value: 'symbol' },
                { text: 'Name (EN)', value: 'name' },
                { text: 'Current Price ($)', value: 'current_price' },
                { text: 'Last Opening Price ($)', value: 'opening_price' },
                { text: 'Last Closing Price ($)', value: 'closing_price' }
            ],
            threadHeaders: [
                { text: 'Name (EN)', align: 'start', value: 'Name'},
                { text: 'Description', value: 'Description' },
                { text: 'Date Created', value: 'DateCreated' },
                { text: 'Favorite', value: 'favorite' },
            ],
            stockCryptoData: [],
            tableIsLoaded: false,
            threadData: [],
            threadIsLoaded: false,        
        }
    },
    methods: {
        convertDateCreated(dateCreated) {
            const formattedDateCreated = new Date(dateCreated);
            return formattedDateCreated.toLocaleTimeString() + ' ' + formattedDateCreated.toLocaleDateString();
        },
        getCurrentPriceColor(stockCrypto) {
            if(stockCrypto.current_price > stockCrypto.opening_price) return 'green';
            else if(stockCrypto.current_price === stockCrypto.opening_price) return 'gray';
            else return 'red';
        },
        onThreadRowClick(val) {
            const valId = val.id;
            this.$router.push({
                name: 'View Thread',
                params: {
                    valId
                }
            });
        },
        async createThreadFavorite() {
            try {
                let createThreadFavoriteUrl = '/newThreadFavorite';

                await this.$http.post(createThreadFavoriteUrl, {
                    'UserId': '',
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
       const finageToken = 'API_KEY8bINEKJOO1I2C58YDWXOT8RXI7QW6Q07';

        const marketSearchResults = stockCryptoSymbolList;

        let marketSearchSymbols = '';
        let marketSearchNames = [];
        let marketSearchResultSymbols = []

        for (let i = 0; i < 5; i++) {
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

        for (let i = 0; i < 5; i++) {
            let obj = {};
            obj['symbol'] = marketSearchResultSymbols[i];
            obj['name'] = marketSearchNames[i];
            obj['current_price'] = multipleStockLastQuotesResponse.data[i].ask;
            obj['opening_price'] = mutipleStockLastTradeResponse.data[i].price;
            obj['closing_price'] = mutipleStockLastTradeResponse.data[i].price;

            this.stockCryptoData.push(obj);
        }

        if (this.UserGuid) {
            try {
                let readApiFavoritesUrl = '/readApiFavorites';

                let readApiFavoritesResponse = await this.$http.post(readApiFavoritesUrl, {
                }, {
                    'Content-Type': 'application/json'
                });

                this.stockCryptoFavorites = readApiFavoritesResponse.data.Data;
            } catch (error) {
                throw new Error(error);
            }
        }

        this.tableIsLoaded = true;

        try {
            let threadUrl = '/readThread';

            let threadResponse = await this.$http.post(threadUrl, {
            }, {
                'Content-Type': 'application/json'
            });

            this.threadData = threadResponse.data.Data;

            /*let threadFavoritesUrl = '/readThreadFavorites';

            let threadFavoritesResponse = await this.$http.post(threadFavoritesUrl, {
            }, {
                'Content-Type': 'application/json'
            });

            let threadFavorites = threadFavoritesResponse.data.Data;

            if (this.UserGuid !== undefined) {
                for (let j = 0; j < this.threadData.length; j++) {
                    for (let i = 0; i < threadFavorites.length; i++) {
                        if (threadFavorites[i].UserId === this.UserId && this.threadData.UserId === this.UserId) {
                            this.threadData['favorite'] = true;
                        }
                    }
                }
            }*/

            this.threadIsLoaded = true;
        } catch (error) {
            throw new Error(error);
        }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    color:#f3f3f3;
    padding: 1vh 1vw;
}
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