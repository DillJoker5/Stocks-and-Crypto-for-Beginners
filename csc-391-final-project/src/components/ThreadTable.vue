<template>
    <v-card>
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
                    disabled="true" 
                />
            </template>
            <template>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import threadDataInfo from '../data/threadDataInfo.json';

export default {
    name: 'ThreadTable',
    data() {
        return {
            headers: [
                { text: 'Name (EN)', align: 'start', value: 'name'},
                { text: 'Thread Owner', value: 'thread_owner'},
                { text: 'Description', value: 'description' },
                { text: 'Date Created', value: 'date_created' },
                { text: 'Favorite', value: 'favorite' },
            ],
            search: '',
            threadData: threadDataInfo,
        }
    },
    methods: {
        convertDateCreated(dateCreated) {
            const formattedDateCreated = new Date(dateCreated);
            return formattedDateCreated.toLocaleTimeString() + ' ' + formattedDateCreated.toLocaleDateString();
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
        toCreateAThread() {
            this.$router.push({
                name: 'Create Thread'
            });
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
</style>
