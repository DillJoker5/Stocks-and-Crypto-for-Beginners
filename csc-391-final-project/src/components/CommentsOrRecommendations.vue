<template>
    <v-container fluid>
        <v-row class="recommend blue lighten-3">
            <v-col sm='12' md='12' v-for='recommendation in recommendationData' :key='recommendation[0].symbol'>
                <details>
                    <summary>
                        Recommendations for {{recommendation[0].symbol}}
                    </summary>
                    <v-row v-for='symbol in recommendation[0].recommendedSymbols' :key='symbol.symbol'>
                        <v-card-text>Symbol: {{symbol.symbol}}; Score: {{symbol.score}}</v-card-text>
                    </v-row>
                </details>
            </v-col>
        </v-row>
        <v-row class="insight blue lighten-3">
            <v-col sm='12' md='12' v-for='insight in insightData' :key='insight.symbol'>
                <details>
                    <summary>
                        Insights for {{insight.symbol}}
                    </summary>
                    <v-card-text>Sector: {{insight.companySnapshot.sectorInfo}}</v-card-text>
                    <v-card-text>Valuation: {{insight.instrumentInfo.valuation.description}} with a discount of {{insight.instrumentInfo.valuation.discount}}. Information provided from {{insight.instrumentInfo.valuation.provider}}</v-card-text>
                    <v-card-text>Last Report by {{insight.reports[0].provider}} </v-card-text>
                    <v-card-text>Title: {{insight.reports[0].title}}</v-card-text>
                    <v-card-text>{{insight.reports[0].summary}}</v-card-text>
                    <v-card-text>Published at {{convertPublishDate(insight.reports[0].publishedOn)}}</v-card-text>
                    <v-card-text>Final recommendation from {{insight.instrumentInfo.recommendation.provider}} is to {{insight.instrumentInfo.recommendation.rating.toLowerCase()}} around a target price of {{insight.instrumentInfo.recommendation.targetPrice}}.</v-card-text>
                </details>
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
                    console.log(this.insightData);
                }
            } catch (error) {
                throw new Error(error);
            }
        },
        
        convertPublishDate(publishDate) {
            const formattedPublishDate = new Date(publishDate)
            return formattedPublishDate.toLocaleTimeString() + ', ' + formattedPublishDate.toLocaleDateString();
        },
    },
    created() {
        this.getData();
    }
};
</script>

<style scoped>
.recommend {
    font-weight: 600;
    font-family: cursive;
}

.insight {
    font-weight: 600;
    font-family: cursive;
}
</style>
