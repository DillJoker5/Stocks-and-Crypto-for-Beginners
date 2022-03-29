<template>
    <div class="register">
        <form>
            <h3>Sign Up</h3>
 
            <div>
                <label>First Name</label>
                <input type="text"/>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text">
            </div>
 
            <div>
                <label>Email address</label>
                <input type="email"/>
            </div>
 
            <div>
                <label>Password</label>
                <input type="password"/>
            </div>
 
            <button type="submit">Sign Up</button>
 
            <p class="forgot-password text-center">
                Already registered 
                <router-link :to="{name: 'Login'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {}
        }
    }
</script>
<style scoped>
.register {
    background-color: darkslategrey;
    height: 100%;
    padding: 20px;
    font-family: cursive;
    text-align: center;

}


 
</style>