<template>
  <v-card class="v-card-border-rounded">
    <v-card-title>{{threadData[0].name}}</v-card-title>
    <v-card-text>Thread Owner: {{threadData[0].thread_owner}}</v-card-text>
    <v-card-text>Date Created: {{convertDateCreated(threadData[0].date_created)}}</v-card-text>
    <v-card-text>Description: {{threadData[0].description}}</v-card-text>
    <v-card v-for='comment in threadData[0].comments' :key='comment.owner' class="v-card-border">
      <p>{{comment.owner}}</p>
      <v-card-text>{{comment.text}}</v-card-text>
    </v-card>
    <v-spacer></v-spacer>
  </v-card>
</template>

<script>
import threadDataInfo from '../data/threadDataInfo.json';

export default {
    name: 'Thread',
    data() {
      return {
        threadData: [],
        threadId : "",
      }
    },
    methods: {
        convertDateCreated(dateCreated) {
            const formattedDateCreated = new Date(dateCreated);
            return formattedDateCreated.toLocaleTimeString() + ' ' + formattedDateCreated.toLocaleDateString();
        },
        getThreadInfo(threadId) {
          for (let i = 0; i < threadDataInfo.length; i++) {
            if(threadDataInfo[i].id === threadId.toString()) {
              this.threadData.push(threadDataInfo[i]);
            }
          }
        }
    },
    created() {
      this.threadId = this.$route.params.valId;
      this.getThreadInfo(this.threadId);
    }
}
</script>

<style>
.v-card-border {
  border-color: black;
  border-width: thick;
  border-radius: 15px;
}

.v-card-border p {
  padding-left: 10px;
}

.v-card-border-rounded {
  border-color: black;
  border-spacing: 20px;
}
</style>
