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
import commentOrRecommendationInfo from '@/data/commentRecommendationInfo.json';

/*
    Steps to Complete
    1) Add Styling
*/

export default {
    name: 'CommentsOrRecommendations',
    data() {
        return {
            commentOrRecommendationData: commentOrRecommendationInfo
        }
    }
};
</script>

<style scoped>

</style>