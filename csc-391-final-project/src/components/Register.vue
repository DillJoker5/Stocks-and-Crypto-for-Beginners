<template>
    <span>
        <h1>Sign Up</h1>
        <div>
            <form class = 'registers'>
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
                <p class = "message" v-if="errorIsThrown">{{error}}</p>
                <v-btn type="submit" class='hidden-sm-and-down' depressed @click="register">Sign Up</v-btn>
                <p class="forgot-password text-center">
                    Already registered 
                    <router-link :to="{name: 'Login'}">sign in?</router-link>
                </p>
            </form>
        </div>
    </span>    
</template>
 
<script>
    export default {
        name: 'Register',
        data() {
            return {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                error: "",
                errorIsThrown: false,
            }
        },
        methods: {
            async register() {
                try {
                    let registerUrl = '/register';

                    await this.$http.post(registerUrl, {
                        'Username': this.firstName + this.lastName,
                        'Email': this.email,
                        'Password': this.password,
                    }, {
                        'Content-Type': 'application/json',
                    });

                    this.$router.push({
                        name: 'Home'
                    });
                } catch (error) {
                    this.error = error;
                    this.errorIsThrown = true;
                    throw new Error(error);
                }
            }
        }
    }
</script>
<style scoped>
.registers {
    height: 100%;
    padding: 20px;
    font-family: cursive;
    text-align: center;
    background-color: white;
    border-style: dashed;
    border-radius: 10px;
    border-width: 3px;
    margin: 3vw 3vh 3vw 3vh;
}
input{
    border-style: solid;
    border-color: black;
    margin: 15px;
}
hr{
    margin:10px;
}
label{
    display: inline-block; width: 210px; text-align: right;
}
h1{
    text-align: center;
}
.message {
    text-align: center;
    color: red;
}
</style>
