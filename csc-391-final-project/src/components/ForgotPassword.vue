<template>
    <div class="forgotpassword">
        <form>
            <h3>Forgot Password</h3>
 
            <div>
                <label>Email address</label>
                <input type="email"/>
                <hr/>
            </div>
 
            <v-btn type="submit" class='hidden-sm-and-down' depressed>Reset Password</v-btn>
 
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