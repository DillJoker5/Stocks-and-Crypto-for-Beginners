<template>
    <span>
        <div id="login">
            <form>
                <h3>Sign in</h3>
                <div class="form-group">
                    <label>Email address</label>
                    <input type ="email" placeholder="Email">
                    <label>Password</label>
                    <input type ="password" placeholder="Password">
                    <v-btn>Login</v-btn>
                </div>
            </form>

        </div>
    </span>
</template>

<script>
export default {
    name: 'LoginForm',
};
</script>

<style scoped>

input[type=email], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

</style>