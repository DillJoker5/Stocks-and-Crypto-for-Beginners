<template>
    <div class="create-a-thread">
        <h1 class="text-center">Create Your Own Personal Thread</h1>
        <create-thread-form />
    </div>
</template>

<script>
import CreateThreadForm from '../components/CreateThreadForm.vue';
export default {
    name: 'CreateThread',
    components: {
        CreateThreadForm,
    }
};
</script>

<style scoped>
.create-a-thread {
    height: 100%;
    font-weight: 600;
    font-family: cursive;
    padding-top: 25px;
}
</style>