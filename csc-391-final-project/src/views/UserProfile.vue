<template>
    <span>
        <div class="profile">
            <profile />
        </div>
        
    </span>
</template>

<script>
import Profile from '../components/Profile.vue';

export default {
  name: 'User Profile',
  components: { 
      Profile 
    },
    
};
</script>

<style scoped>
.profile {
    height: 100%;
    padding: 20px;
    font-family: cursive;
}
</style>
