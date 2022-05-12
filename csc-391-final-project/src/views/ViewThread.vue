<template>
    <div class="form-background">
        <br />
        <thread />
    </div>
</template>

<script>
import Thread from '../components/Thread.vue';

export default {
    name: 'ViewThread',
    components: {
        Thread,
    },
};
</script>

<style scoped>
.form-background {
    height: 100%;
    padding: 20px;
}
</style>
