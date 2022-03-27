<template>
    <span>
        <login-form/>
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
 
 .login h1 {
    margin-left: -25vw;
}
 </style>
