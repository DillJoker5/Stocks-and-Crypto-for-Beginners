<template>
    <div class="forgotpassword">
        <form>
            <h3>Forgot Password</h3>
 
            <div>
                <label>Email address</label>
                <input type="email"/>
                <hr/>
            </div>
 
            <v-btn type="submit" class='hidden-sm-and-down' depressed @click="forgotPassword">Reset Password</v-btn>
 
        </form>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {}
        },

        methods: {
            async forgotPassword() {
                try {
                    let forgotPasswordUrl = '/forgotPassword';

                    await this.$http.post(forgotPasswordUrl, {
                        'Email': '',
                        'Username': '',
                        'Password': '',
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
    background-color: darkslategrey;
    height: 100%;
    padding: 20px;
    font-family: cursive;
    text-align: center;
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
</style>