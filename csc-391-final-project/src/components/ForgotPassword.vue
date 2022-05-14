<template>
    <div>
        <h1>Forgot Password</h1>
        <form class = 'forgotpassword' @submit.prevent="forgotPassword">
            <div>
                <label>Email address</label>
                <input type="email" v-model="email"/>
                <hr/>
                <v-btn type="submit" class='hidden-sm-and-down' depressed @click="forgotPassword">Reset Password</v-btn>
            </div>
        </form>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                email: "",
            }
        },

        methods: {
            async forgotPassword() {
                try {
                    let forgotPasswordUrl = '/forgotPassword';

                    await this.$http.post(forgotPasswordUrl, {
                        'Email': this.email
                    }, {
                        'Content-Type': 'application/json'
                    });
                } catch (error) {
                    throw new Error(error);
                }
            }
        }
    }
</script>

<style scoped> 
.forgotpassword {
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
</style>