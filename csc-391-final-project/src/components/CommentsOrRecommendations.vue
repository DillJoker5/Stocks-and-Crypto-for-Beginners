<template>
    <v-container fluid>
        <v-row>
            <v-col sm='12' md='12' v-for='recommendation in recommendationData' :key='recommendation[0].symbol'>
                <v-card-title>Recommendations for {{recommendation[0].symbol}}</v-card-title>
                <v-row v-for='symbol in recommendation[0].recommendedSymbols' :key='symbol.symbol'>
                    <v-card-text>Symbol: {{symbol.symbol}}; Score: {{symbol.score}}</v-card-text>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm='12' md='12' v-for='insight in insightData' :key='insight.symbol'>
                <v-card-title>Insights for {{insight.symbol}}</v-card-title>
                <v-card-text>Sector: {{insight.companySnapshot.sectorInfo}}</v-card-text>
                <v-card-text>Valuation: {{insight.valuation.description}} at a {{insight.valuation.relativeValue.toLowerCase()}} from {{insight.valuation.provider}}</v-card-text>
                <v-card-text>Last Report by {{insight.reports.provider}}: </v-card-text>
                <v-card-text>{{insight.reports.summary}}</v-card-text>
                <v-card-text>Published on {{convertPublishDate(insight.reports.publishedOn)}}</v-card-text>
                <br>
                <v-card-text>Final Recommendation from {{insight.recommendation.provider}} is to {{insight.recommendation.rating.toLowerCase()}} around a target price of {{insight.recommendation.targetPrice}}</v-card-text>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import stockCryptoInfo from '../data/stockCryptoInfo.json';

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
                for(let i = 0; i < 1; i++) { // 1 is hard-coded to make sure that the request limit isn't exceeded
                    let recommendationUrl = yahooFinanceBaseUrl + '/v6/finance/recommendationsbysymbol/' + stockCryptoInfo[i].symbol.toString();
                    let insightsUrl = yahooFinanceBaseUrl + '/ws/insights/v1/finance/insights?symbol=' + stockCryptoInfo[i].symbol.toString();

                    let recommendationResponse = await this.$http.get(recommendationUrl, {
                        headers: {
                            'X-API-KEY': apiKey,
                        },
                        variables: {
                            'symbol': stockCryptoInfo[i].symbol.toString(),
                        }
                    });

                    this.recommendationData.push(recommendationResponse.data.finance.result);

                    let insightResponse = await this.$http.get(insightsUrl, {
                        headers: {
                            'X-API-KEY': apiKey,
                        },
                        variables: {
                            'symbol': stockCryptoInfo[i].symbol.toString(),
                        },
                    });

                    this.insightData.push(insightResponse.data.finance.result);
                }
            } catch (error) {
                throw new Error(error);
            }
        },
        
        convertPublishDate(publishDate) {
            const formattedPublishDate = new Date(publishDate)
            return formattedPublishDate.toLocaleTimeString() + ' ' + formattedPublishDate.toLocaleDateString();
        },
    },
    created() {
        this.getData();
    }
};
</script>
