<template>
    <div>
    <v-card class="v-card-border-rounded">
        <v-card-text>Description: <input type="text" @value="description" /></v-card-text>
        <v-btn
            class="mr-4"
            @click="createResponse"
        >Create Response</v-btn>
    </v-card>
    <v-btn
        class="mr-4"
        @click="backtoThread"
    >Back To Thread</v-btn>
    </div>
</template>

<script>
export default {
    name: 'CreateResponse',
    data() {
        return {
            description: ''
        }
    },
    methods: {
        async createResponse() {
            try {
                let createResponeseUrl = '/newThreadResponse';

                let createResponseResponse = await this.$http.post(createResponeseUrl, {
                    'UserId': '',
                    'ThreadId': '',
                    'Description': this.description,
                    'DateCreated': Date.now()
                }, {
                    'Content-Type': 'application/json',
                    'UserGuid': this.UserGuid
                });

                let response = createResponseResponse;

                if (response.Type === 'Success') {
                    this.$router.push({
                        name: 'View Thread'
                    });
                }
            } catch (error) {
                throw new Error(error);
            }
        }
    }
}
</script>

<style>

</style>