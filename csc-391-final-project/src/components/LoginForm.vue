<template>
   <span>
         <h1> Login here</h1>
        <form class="login" @submit.prevent="login">
            <label>Username</label>
            <input required v-model="username" type ="text" placeholder="Username"/>
            <label>Password</label>
            <input required v-model="password" type="password" placeholder="Password"/>
            <hr/>
            <button type="submit">Login</button>

        </form>
   </span>
</template>

<script>
export default {
    name: 'LoginForm',
    data(){
        return{
            email: '',
        }
        
    }
    
}
    
</script>

