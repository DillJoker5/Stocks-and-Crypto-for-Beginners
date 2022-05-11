<template>
  <div>
    <div v-if="threadIsLoaded">
      <input type="button" class="back-to-threads" value="Back To Threads" @click="backToThreads" />
      <v-card class="v-card-border-rounded">
        <v-card-title>{{threadData[0].name}}</v-card-title>
        <v-card-text>Thread Owner: {{threadData[0].thread_owner}}</v-card-text>
        <v-card-text>Date Created: {{convertDateCreated(threadData[0].date_created)}}</v-card-text>
        <v-card-text>Description: {{threadData[0].description}}</v-card-text>
        <v-btn
          class="mr-4"
          @click="createResponse"
        >+</v-btn>
        <v-card v-for='comment in threadData[0].comments' :key='comment.owner' class="v-card-border">
          <p>{{comment.owner}}</p>
          <v-card-text>{{comment.text}}</v-card-text>
        </v-card>
        <v-spacer></v-spacer>
      </v-card>
    </div>
    <div v-else>
      <div class="loader" />
    </div>
  </div>
</template>

<script>

export default {
    name: 'Thread',
    data() {
      return {
        threadData: [],
        threadId: "",
        threadIsLoaded: false,
      }
    },
    methods: {
        convertDateCreated(dateCreated) {
            const formattedDateCreated = new Date(dateCreated);
            return formattedDateCreated.toLocaleTimeString() + ' ' + formattedDateCreated.toLocaleDateString();
        },
        backToThreads() {
          this.$router.push({
            name: 'View Threads'
          });
        }, 
        async getThread(threadId) {
          try {
            let threadUrl = '/readThread';

            let threadResponse = await this.$http.post(threadUrl, {
            }, {
              'Content-Type': 'application/json'
            });

            let threads = threadResponse.data.data;

            for (let i = 0; i < threads.length; i++) {
              if(threads[i].ThreadId === threadId.toString()) {
                this.threadData.push(threads[i]);
              }
            }

            let responsesUrl = '/readResponse';

            let responsesResponse = await this.$http.post(responsesUrl, {
            }, {
              'Content-Type': 'application/json'
            });

            let responses = responsesResponse.data.data;

            for (let i = 0; i < responses.length; i++) {
              if(responses[i].ThreadId === threadId.toString()) {
                this.threadData[0].comments.push(responses[i]);
              }
            }
            
            this.threadIsLoaded = true;
          } catch (error) {
            throw new Error(error);
          }
        },
        createResponse() {
          this.$router.push({
            name: 'Create Response'
          })
        }
    },
    created() {
      this.threadId = this.$route.params.valId;
      this.getThreadInfo(this.threadId);
    }
}
</script>

<style>
p {
  padding-left: 10px;
}

.back-to-threads {
  background-color: #90CAF9;
  padding: 10px;
  margin-bottom: 2vh;
  font-weight: 600;
  font-family: cursive;
  border-radius: 10px;
}

.loader {
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #0D47A1;
  width: 50px;
  height: 50px;
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
