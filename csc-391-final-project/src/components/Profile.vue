<template>
    <div>
        <h1 class=text-center> Profile</h1>
        <span v-if="userIsLoaded">
                <div class="d-flex justify-center">
                    <v-simple-table v-for="user in userinfo" :key="user.id">
                        <tr>
                            <th>Username:</th>
                            <td>{{user.username}}</td>
                            
                        </tr>
                        
                        <tr>
                            <th>Email:</th>
                            <td>{{user.email}}</td>
                        </tr>
                        
                        <tr>
                            <th>Stocks:</th>
                            <td>{{user.stocks}}</td>
                        </tr>
                        <tr>
                            <th>Threads:</th>
                            <td>{{user.threads}}</td>
                        </tr>

                    </v-simple-table>
                </div>
        </span>
        <div v-else class="loader" />
    </div>
</template>

<script>

export default {
    name: 'Profile',
    data(){
        return{
            userinfo: [],
            userId: '',
            userIsLoaded: false
        }
    },
    async created() {
        this.userId = this.$route.params.UserId;
        try {
            let usersUrl = '/readUsers';

            let usersResponse = await this.$http.post(usersUrl, {
            }, {
                'Content-Type': 'application/json',
            });

            let users = usersResponse.data.data;

            for (let i = 0; i < users.length; i++) {
                if (users[i].UserId === this.userId) {
                    this.userinfo.push(users[i]);
                }
            }

            this.userIsLoaded = true;
        } catch(error) {
            throw new Error(error);
        }
    }
}
</script>
<style scoped>
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
  margin-top: 2vh;
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

