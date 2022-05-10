<template>
    <div class="register">
        <form>
            <h3>Sign Up</h3>
 
            <div>
                <label>First Name</label>
                <input type="text" v-model="firstName"/>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" v-model="lastName">
            </div>
 
            <div>
                <label>Email address</label>
                <input type="email" v-model="email"/>
            </div>
 
            <div>
                <label>Password</label>
                <input type="password" v-model="password"/>
            </div>
            <hr/>
            <v-btn type="submit" class='hidden-sm-and-down' depressed @click="register">Sign Up</v-btn>
 
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
            return {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            }
        },
        methods: {
            register() {
                try {
                    let registerUrl = '/register';

                    let registerResponse = await this.$http.post(registerUrl, {
                        'Username': firstName + lastName,
                        'Email': email,
                        'Password': password,
                    }, {
                        'Content-Type': 'application/json',
                    });

                    let success = registerResponse.Type;

                    if (success === 'Success') {
                        this.$router({
                            name: 'Login'
                        });
                    }
                } catch (error) {
                    throw new Error(error);
                }
            }
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
input{
    border-style: solid;
    border-color: black;
    margin: 10px;
}
hr{
    margin:10px;
}
label{
    display: inline-block; width: 210px; text-align: right;
}
</style>