<template>
    <v-container fluid>
        <v-row>
            <v-col sm='12' md='4' v-for='commentOrRecommendation in commentOrRecommendationData' :key='commentOrRecommendation.id'>
                <v-card-title>{{'Name: ' + commentOrRecommendation.name}}</v-card-title>
                <v-card-text>{{'Username: ' + commentOrRecommendation.username}}</v-card-text>
                <v-card-text>{{'Stock/Crypto Currency: ' + commentOrRecommendation.stockOrCrypto}}</v-card-text>
                <v-card-text>{{'Comment: ' + commentOrRecommendation.description}}</v-card-text>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import stockCryptoInfo from '../data/stockCryptoInfo.json';
/*
    Steps to Complete
    1) Add Styling
    2) Integrate Yahoo Finance API
*/

export default {
    name: 'CommentsOrRecommendations',
    data() {
        return {
            recommendationData: [],
            insightData: [],
        };
    },
    methods: {
        async getData() {
            try {
                let yahooFinanceBaseUrl = 'https://yfapi.net';
                const apiKey = 'TpjbaujVN99fiiPrSjvLx9edfTJfutFn187SsMYG';
                for(let i = 0; i < stockCryptoInfo.length; i++) {
                    let recommendationUrl = yahooFinanceBaseUrl + '/v6/finance/recommendationsbysymbol/' + stockCryptoInfo[i].symbol.toString();
                    let insightsUrl = yahooFinanceBaseUrl + '/ws/insights/v1/finance/insights';

                    let recommendationResponse = await this.$http.get(recommendationUrl, {
                        headers: {
                            'X-API-KEY': apiKey,
                        },
                        variables: {
                            'symbol': stockCryptoInfo[i].symbol.toString(),
                        }
                    });

                    this.recommendationData += recommendationResponse.finance.result;

                    let insightResponse = await this.$http.get(insightsUrl, {
                        headers: {
                            'X-API-KEY': apiKey,
                        },
                        variables: {
                            'symbol': stockCryptoInfo[i].symbol.toString(),
                        },
                    });

                    this.insightData += insightResponse.finance.result;
                }
            } catch (error) {
                throw new Error(error);
            }
        }
    },
    created() {
        this.getData();
    }
};
</script>
