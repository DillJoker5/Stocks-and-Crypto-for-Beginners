<template>
  <v-card class="v-card-border-rounded">
    <v-card-title>{{threadData.name}}</v-card-title>
    <v-card-text>Thread Owner: {{threadData.thread_owner}}}</v-card-text>
    <v-card-text>Date Created: {{convertDateCreated(threadData.date_created)}}</v-card-text>
    <v-card-text>Description: {{threadData.description}}</v-card-text>
    <v-card v-for='comment in comments' :key='comment.owner' class="v-card-border">
      <v-card-title>{{comment.owner}}</v-card-title>
      <v-card-title>{{comment.text}}</v-card-title>
    </v-card>
    <v-spacer></v-spacer>
  </v-card>
</template>

<script>
import threadDataInfo from '../data/threadDataInfo.json'
export default {
    name: 'Thread',
    data() {
      return {
        threadData: [],
      }
    },
    methods: {
        convertDateCreated(dateCreated) {
            const formattedDateCreated = new Date(dateCreated);
            return formattedDateCreated.toLocaleTimeString() + ' ' + formattedDateCreated.toLocaleDateString();
        },
        getThreadInfo(threadId) {
          for (let i = 0; i < threadDataInfo.length; i++) {
            if(threadDataInfo[i].id === threadId) {
              this.threadData.push(threadDataInfo[i]);
            }
          }
        }
    },
    created() {
      this.getThreadInfo(this.params.id);
    }
}
</script>

<style>
.v-card-border {
  border-color: black;
}

.v-card-border-rounded {
  border-color: black;
  border-spacing: 20px;
}
</style>
