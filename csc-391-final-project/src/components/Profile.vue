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
import userinfo from '../data/userinfo.json';

export default {
    name: 'Profile',
    data(){
        return{
            userinfo: userinfo,
        }
    }

}
</script>
<style scoped>

</style>

