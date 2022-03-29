<template>
    <div class="forgotpassword">
        <form>
            <h3>Forgot Password</h3>
 
            <div>
                <label>Email address</label>
                <input type="email"/>
            </div>
 
            <button type="submit">Reset password</button>
 
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
</style>