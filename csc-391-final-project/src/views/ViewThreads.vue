<template>
    <div class="table-background">
        <br />
        <h1 class="text-center">Connect with fellow investors about your favorite topics below!</h1>
        <br />
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
.table-background {

    height: 100%;
    padding: 20px;
}

* {
    font-family: cursive;
}
</style>
