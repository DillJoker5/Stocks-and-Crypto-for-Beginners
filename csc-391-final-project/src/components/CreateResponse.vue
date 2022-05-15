<template>
    <div>
    <v-card class="v-card-border-rounded">
        <v-card-text>Description: <input type="text" v-model="description" /></v-card-text>
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
            description: '',
            threadId: "",
        }
    },
    methods: {
        async createResponse() {
            try {
                let createResponseUrl = '/newThreadResponse';
                let userGuid = localStorage.getItem('userGuid');
                let userId = localStorage.getItem('userId');

                let newDate = new Date(Date.now());
                const dateCreated = newDate.toLocaleTimeString() + ' ' + newDate.toLocaleDateString();                

                await this.$http.post(createResponseUrl, {
                    'UserId': parseInt(userId),
                    'ThreadId': parseInt(this.threadId),
                    'Description': this.description,
                    'DateCreated': dateCreated
                }, {
                    headers:{
                    'Content-Type': 'application/json',
                    'UserGuid': userGuid
                    }
                });


                const valId = this.threadId;
                this.$router.push({
                    name: 'View Thread',
                    params: {
                        valId
                    }
                });
            } catch (error) {
                throw new Error(error);
            }
        },
        backtoThread() {
            const valId = this.threadId;
            this.$router.push({
                    name: 'View Thread',
                    params: {
                        valId
                    }
                });
        }
    },
    created() {
        this.threadId = this.$route.params.valId;
    }
}
</script>

<style>

</style>