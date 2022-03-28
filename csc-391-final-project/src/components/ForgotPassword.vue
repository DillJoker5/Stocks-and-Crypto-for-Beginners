<template>
    <div class="forgotpassword">
        <form>
            <h3>Forgot Password</h3>
 
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
 
            <button type="submit" class="btn btn-dark btn-lg btn-block">Reset password</button>
 
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