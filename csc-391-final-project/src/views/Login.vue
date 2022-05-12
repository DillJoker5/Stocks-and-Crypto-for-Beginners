<template>
    <span>
        <div class="login">
            <login-form/>
        </div>
        
    </span>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
    name: 'Login',
    components: {
        LoginForm
    },
};
</script>
 <style scoped>
 .login {
    height: 100%;
    padding: 20px;
    font-family: cursive;
}



 </style>
