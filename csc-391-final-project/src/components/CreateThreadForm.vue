<template>
    <v-form>
        <v-text-field
        ></v-text-field>
        <v-text-field
        ></v-text-field>
    </v-form>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength } from 'vuelidate/lib/validators';
/*
    To Do List
    1) Create Form
    2) Style Form
    3) Upon Validation go to Threads Page

    Name
    Thread Owner
    Description
*/
export default {
    name: 'CreateThreadForm',

    mixins: [validationMixin],

    validations: {
        name: { required, maxLength: maxLength(50) },
        threadOwner: { required, maxLength: maxLength(50) },
        description: { required, maxLength: maxLength(200) },
    },

    data() {
        return {
            name: '',
            threadOwner: '',
            description: '',
        }
    },

    computed: {
        nameErrors() {
            const errors = [];
            if (!this.$v.name.$dirty) return errors;
            !this.$v.name.maxLength && errors.push('Name must be 50 characters or less.');
            !this.$v.name.maxLength && errors.push('Name field is required.');
            return errors;
        },
        threadOwnerErrors() {

        },
        descriptionErrors() {
            
        }
    }
};
</script>

<style scoped>

</style>