<template>
    <div>
        <v-card v-if="threadIsLoaded">
            <v-card-title class="gray-darken-2--text blue lighten-3">
                <v-text-field
                    v-model="search"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
                <input type="button" class="create-a-thread-button" value="Create A Thread" @click="toCreateAThread" />
            </v-card-title>
            <v-data-table
                :headers='headers'
                :items='threadData'
                class='elevation-1 gray-darken-2--text blue lighten-3'
                :footer-props="{
                    showCurrentPage: true,
                    showFirstLastPage: true,
                    itemsPerPageOptions: [10, 25, 50, -1],
                }"
                :sort-by="['name']"
                :sort-asc="[
                    'true',
                    'false'
                ]"
                multi-sort
                :search='search'
                dense
                @click:row="onThreadRowClick"
            >
                <template v-slot:[`item.favorite`]="{ item }">
                    <input
                        type="checkbox"
                        v-model="item.favorite"
                        :value="item.favorite"
                        @click="createThreadFavorite"
                    />
                </template>
                <template v-slot:[`item.DateCreated`]="{ item }">
                    <v-card-text>{{item.DateCreated}}</v-card-text>
                </template>
            </v-data-table>
        </v-card>
        <div class="loader" v-else />
    </div>
</template>

<script>

export default {
    name: 'ThreadTable',
    data() {
        return {
            headers: [
                { text: 'Name (EN)', align: 'start', value: 'Name'},
                { text: 'Description', value: 'Description' },
                { text: 'Date Created', value: 'DateCreated' },
                { text: 'Favorite', value: 'favorite' },
            ],
            search: '',
            threadData: [],
            threadFavorites: [],
            threadIsLoaded: false,
        }
    },
    methods: {
        onThreadRowClick(val) {
            const valId = val.ThreadId;
            this.$router.push({
                name: 'View Thread',
                params: {
                    valId
                }
            });
        },
        toCreateAThread() {
            this.$router.push({
                name: 'Create Thread'
            });
        },
        async createThreadFavorite() {
            try {
                let createThreadFavoriteUrl = '/newThreadFavorite';
                let userGuid = localStorage.getItem('userGuid');
                let userId = localStorage.getItem('userId');

                await this.$http.post(createThreadFavoriteUrl, {
                    'UserId': parseInt(userId),
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
        try {
            let threadUrl = '/readThread';

            let threadResponse = await this.$http.post(threadUrl, {
            }, {
                'Content-Type': 'application/json'
            });

            this.threadData = threadResponse.data.Data;

            let userGuid = localStorage.getItem('userGuid');

            let threadFavoritesUrl = '/readThreadFavorites';

            let threadFavoritesResponse = await this.$http.post(threadFavoritesUrl, {
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'userguid': userGuid
                }
            });

            let threadFavs = threadFavoritesResponse.data.Data;

            this.threadFavorites = threadFavs;

            

            this.threadIsLoaded = true;
        } catch (error) {
            throw new Error(error);
        }
    }
};
</script>

<style scoped>
* {
    font-family: cursive;
}

.create-a-thread-button {
    background-color: black;
    color: white;
    padding: 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-left: 20px;
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
