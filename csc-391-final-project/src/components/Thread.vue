<template>
  <div>
    <div v-if="threadIsLoaded">
      <input type="button" class="back-to-threads" value="Back To Threads" @click="backToThreads" />
      <v-card class="v-card-border-rounded">
        <div class="text-right">
          <v-btn
          class="mr-4"
          @click="createResponse"
        >+</v-btn>
        </div>
        <v-card-title>{{threadData[0].Name}}</v-card-title>
        <v-card-text>Date Created: {{threadData[0].DateCreated}}</v-card-text>
        <v-card-text>Description: {{threadData[0].Description}}</v-card-text>
        <div v-if="threadHasResponses">
          <v-card v-for='comment in threadData[0].comments' :key='comment.owner' class="v-card-border">
            <v-card-text>{{comment.Description}}</v-card-text>
          </v-card>
        </div>
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
        threadHasResponses: false,
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
        async getThread() {
          try {
            let threadUrl = '/readThread';

            let threadResponse = await this.$http.post(threadUrl, {
            }, {
              'Content-Type': 'application/json'
            });

            let threads = threadResponse.data.Data;

            for (let i = 0; i < threads.length; i++) {
              if(threads[i].ThreadId === this.threadId) {
                this.threadData.push(threads[i]);
              }
            }

            let responsesUrl = '/readResponse';

            let responsesResponse = await this.$http.post(responsesUrl, {
            }, {
              'Content-Type': 'application/json'
            });

            let responses = responsesResponse.data.Data;

            let comments = [];

            for (let i = 0; i < responses.length; i++) {
              if(responses[i].ThreadId === this.threadId) {
                comments.push(responses[i]);
              }
            }

            if (comments === undefined) {
              this.threadData[0]['comments'] = [];
              this.threadHasResponses = false;
            } else {
              this.threadData[0]['comments'] = comments;
              this.threadHasResponses = true;
            }
            
            this.threadIsLoaded = true;
          } catch (error) {
            throw new Error(error);
          }
        },
        createResponse() {
          this.$router.push({
            name: 'create-response'
          })
        }
    },
    created() {
      this.threadId = this.$route.params.valId;
      this.getThread(this.threadId);
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
