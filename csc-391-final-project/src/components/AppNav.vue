<template>
    <span>
        <v-app-bar color='light-blue accent-4' dense app dark>
            <v-app-bar-icon @click='drawer = !drawer' class='hidden-md-and-up'></v-app-bar-icon>
            <v-img max-width='40' src='@/assets/logo.png'> 
            </v-img>
            <router-link to='/'>
                <v-app-bar-title>Home</v-app-bar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-btn class='hidden-sm-and-down' to='/about' depressed>About</v-btn>
            <v-btn class='hidden-sm-and-down' to='/view-threads' depressed>Threads</v-btn>
            <v-btn class='hidden-sm-and-down' to='/create-thread' depressed color='cyan darken-3'>Create A Thread</v-btn>
            <v-btn class='hidden-sm-and-down' to='/view-stock-crypto-table' depressed>Stocks and Crypto</v-btn>
            <v-btn class='hidden-sm-and-down' to='/user-profile' depressed>User Profile</v-btn>
            <v-btn class='hidden-sm-and-down' to='/login' depressed color='cyan darken-3'>Register</v-btn>
        </v-app-bar>
    </span>
</template>

<script>
/*
    Steps to get done
    1) Create styling
*/
    export default {
        name: 'AppNav',
        data() {
            return {
                drawer: true,
                drawerRoutes: [
                    { title: 'About', url:'about' },
                    { title: 'Threads', url:'view-threads' },
                    { title: 'Create Thread', url:'create-thread' },
                    { title: 'Stocks and Crypto', url:'view-stock-crypto-table' },
                    { title: 'User Profile', url: 'user-profile' },
                    { title: 'Register', url:'login' },
                ]
            }
        },
    };
</script>

<style scoped>
a,
a:focus,
a:visited {
    color: white;
    text-decoration: none;
}
</style>