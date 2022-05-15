<template>
    <span>
        <div class="logout">
            <logout/>
        </div>
        
    </span>
</template>

<script>
import Logout from '../components/Logout.vue';

export default {
    name: 'Logout',
    components: {
        Logout
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