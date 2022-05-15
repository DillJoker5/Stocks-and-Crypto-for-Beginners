<template>
    <div>
        <h1 class=text-center> Profile</h1>
        <span v-if="userIsLoaded">
                <div class="d-flex justify-center">
                    <v-simple-table class = table>
                        <tr>
                            <th>Username:</th>
                            <td>{{userInfo[0].Username}}</td>
                            
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td>{{userInfo[0].Email}}</td>
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
            userInfo: [],
            userId: '',
            userIsLoaded: false
        }
    },
    async created() {
        this.userId = localStorage.getItem('userId');
        try {
            let usersUrl = '/readUsers';

            let usersResponse = await this.$http.post(usersUrl, {
            }, {
                'Content-Type': 'application/json',
            });

            let users = usersResponse.data.Data;

            for (let i = 0; i < users.length; i++) {
                if (users[i].UserId === parseInt(this.userId)) {
                    this.userInfo.push(users[i]);
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
.table{
       background-color: white;
      border-style: dashed;
      border-radius: 10px;
      border-width: 3px;
      margin: 3vw 3vh 3vw 3vh;
      text-align: center; 
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

