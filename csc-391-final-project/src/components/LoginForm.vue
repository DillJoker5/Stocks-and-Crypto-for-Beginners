<template>
   <span>
       <h1> Login here</h1>
        
            <div class= 'login'>    
                <form class="logins" @submit.prevent="login">
                <div>
                <label>Username</label>
                <input required v-model="username" type ="text" placeholder="Username" class="white-color"/>
                </div>
                <label>Password</label>
                <input required v-model="password" type="password" placeholder="Password"/>
                <hr/>
                <v-btn type="submit" class='hidden-sm-and-down' depressed @click="login">Login</v-btn>
                <p class="forgot-password text-center">
                <router-link to="/forgot-password">Forgot password?</router-link>
                </p>
                <p class="register text-center">
                <router-link to="/register">Register?</router-link>
                </p>
                </form>
                
            </div>
    </span>
</template>

<script>
export default {
    name: 'LoginForm',
    data(){
        return{
            username: "",
            password: "",
        }
    },

    methods: {
        async login() {
            try {
                let loginUrl = '/login';

                let loginResponse = await this.$http.post(loginUrl, {
                    'Username': this.username,
                    'Password': this.password,
                }, {
                    'Content-Type': 'application/json'
                });

                let userGuid = loginResponse.data.UserGuid; // save this to a global variable
                console.log(userGuid);
            } catch (error) {
                throw new Error(error);
            }
        }
    }
    
}
    
</script>

<style scoped>
h1{
    text-align: center;
}
.login{
    text-align: center;
}
input{
    border-style: solid;
    border-color: black;
    margin: 15px;
}
hr{
    margin: 10px;
}
label{
    display: inline-block; width: 210px; text-align: right;
}
</style>

