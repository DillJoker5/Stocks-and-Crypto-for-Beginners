<template>
        <div>
        <v-card v-if="tableIsLoaded">
            <v-card-title class='gray-darken-2--text blue lighten-3'>
                
            </v-card-title>
            <v-data-table
                :headers='headers'
                :items='stockCryptoData'
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
   
    
</template>

<script>
import stockCryptoInfo from '@/data/stockCryptoInfo.json';

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
            stockCryptoData: stockCryptoInfo,
            tableIsLoaded: true,
        }
    },
    methods: {
        getCurrentPriceColor(stockCrypto) {
            if(stockCrypto.current_price > stockCrypto.opening_price) return 'green';
            else if(stockCrypto.current_price === stockCrypto.opening_price) return 'gray';
            else return 'red';
        }
    }
}
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