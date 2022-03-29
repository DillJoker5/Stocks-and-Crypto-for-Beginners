<template>
   <span>
       <h1> Login here</h1>
        
            <div class= 'login'>    
                <form class="logins" @submit.prevent="login">
                <label>Username</label>
                <input required v-model="username" type ="text" placeholder="Username" class="white-color"/>
                <label>Password</label>
                <input required v-model="password" type="password" placeholder="Password"/>
                <hr/>
                <v-btn type="submit" class='hidden-sm-and-down' depressed>Login</v-btn>
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
</style>

