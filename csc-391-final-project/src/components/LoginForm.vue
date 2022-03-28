<template>
   <span>
       <div class= 'login'>
            <h1> Login here</h1>
            <form class="logins" @submit.prevent="login">
            <label>Username</label>
            <input required v-model="username" type ="text" placeholder="Username"/>
            <label>Password</label>
            <input required v-model="password" type="password" placeholder="Password"/>
            <hr/>
            <button type="submit" class="login-button">Login</button>
            <p class="forgot-password text-center mt-2 mb-4">
            <router-link to="/forgot-password">Forgot password?</router-link>
            </p>
            <p class="register text-center mt-2 mb-4">
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

