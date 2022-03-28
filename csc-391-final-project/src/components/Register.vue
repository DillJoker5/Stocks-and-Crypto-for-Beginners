<template>
    <div class="register">
        <form>
            <h3>Sign Up</h3>
 
            <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>
 
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
 
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
 
            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>
 
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