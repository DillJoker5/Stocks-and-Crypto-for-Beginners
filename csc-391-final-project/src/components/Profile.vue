<template>
    <span>
        <h1 class=text-center> Profile</h1>
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
</template>

<script>

export default {
    name: 'Profile',
    data(){
        return{
            userinfo: [],
            userId: '',
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
        } catch(error) {
            throw new Error(error);
        }
    }
}
</script>
<style scoped>

</style>

