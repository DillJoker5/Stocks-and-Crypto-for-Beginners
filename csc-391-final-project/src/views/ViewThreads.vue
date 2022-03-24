<template>
    <div>
        <h1 class="text-center">Connect with fellow investors about your favorite topics below!</h1>
        <thread-table />
    </div>
</template>

<script>
import ThreadTable from '../components/ThreadTable.vue';

export default {
    name: 'ViewThreads',
    components: {
        ThreadTable,
    },
};
</script>

<style scoped>

</style>