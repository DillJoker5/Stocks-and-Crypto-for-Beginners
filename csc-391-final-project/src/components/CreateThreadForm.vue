<template>
    <div>
        <p v-if="error">{{error}}</p>
        <v-form class="create-a-thread-form">
            <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="50"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
                v-model="threadOwner"
                :error-messages="threadOwnerErrors"
                :counter="50"
                label="Thread Owner"
                required
                @input="$v.threadOwner.$touch()"
                @blur="$v.threadOwner.$touch()"
            ></v-text-field>
            <v-text-field
                v-model="description"
                :error-messages="descriptionErrors"
                :counter="200"
                label="Description of Thread"
                required
                @input="$v.description.$touch()"
                @blur="$v.description.$touch()"
            ></v-text-field>
            <v-btn
                class="mr-4"
                @click="submit"
            >Create</v-btn>
            <v-btn
                @click="clear"
            >Cancel</v-btn>
        </v-form>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength } from 'vuelidate/lib/validators';

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
            error: '',
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
            const errors = [];
            if (!this.$v.threadOwner.$dirty) return errors;
            !this.$v.threadOwner.maxLength && errors.push('Thread Owner must be 50 characters or less.');
            !this.$v.threadOwner.maxLength && errors.push('Thread Owner field is required.');
            return errors;
        },
        descriptionErrors() {
            const errors = [];
            if (!this.$v.description.$dirty) return errors;
            !this.$v.description.maxLength && errors.push('Description must be 200 characters or less.');
            !this.$v.description.maxLength && errors.push('Description field is required.');
            return errors;
        }
    },

    methods: {
        async submit() {
            this.$v.$touch();
            try {
                let createThreadUrl = '/newThread';

                let createThreadResponse = await this.$http.post(createThreadUrl, {
                    'UserId': 1,
                    'Name': this.name,
                    'Description': this.description,
                    'DateCreated': Date.now()
                }, {
                    'Content-Type': 'application/json',
                    'UserGuid': this.userGuid
                });

                let success = createThreadResponse.Type;

                if (success === 'Success') {
                    this.$router({
                        name: 'View Threads'
                    });
                }
            } catch (error) {
                this.error = error;
                throw new Error(error);
            }
        },

        clear() {
            if(this.name === '' && this.threadOwner === '' && this.description === '') {
                this.$router.push({
                    name: '/'
                });
            } else {
                this.$v.$reset();
                this.name = '';
                this.threadOwner = '';
                this.description = '';
                }
        },
    }
};
</script>

<style scoped>
.create-a-thread-form {
    padding: 20px;
    background-color: white;
    border-style: dashed;
    border-radius: 10px;
    border-width: 3px;
    margin: 3vw 3vh 3vw 3vh;
}
</style>
