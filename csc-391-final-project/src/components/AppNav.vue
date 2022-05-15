<template>
    <span>
        <v-app-bar color='blue darken-4' dense app dark>
            <v-img max-height='38' max-width='80' :src='require("@/assets/stockCryptoLogo.png")' />
            <router-link to='/'>
                <v-btn class='hidden-sm-and-down' to='/' depressed>Home</v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <v-btn class='hidden-sm-and-down' to='/about' depressed>About</v-btn>
            <v-btn class='hidden-sm-and-down' to='/viewThreads' depressed>Threads</v-btn>
            <v-btn class='hidden-sm-and-down' to='/createThread' depressed>Create A Thread</v-btn>
            <v-btn class='hidden-sm-and-down' to='/viewStockCryptoTable' depressed>Stocks and Crypto</v-btn>
            <v-btn class='hidden-sm-and-down' to='/userProfile' depressed>User Profile</v-btn>
            <v-btn class='hidden-sm-and-down' to='/login' depressed>Login</v-btn>
            <v-btn class='hidden-sm-and-down' to='/logout' depressed>Logout</v-btn>
        </v-app-bar>
    </span>
</template>

<script>
    export default {
        name: 'AppNav',
        data() {
            return {
                drawer: true,
                drawerRoutes: [
                    { title: 'About', url:'about' },
                    { title: 'Threads', url:'viewThreads' },
                    { title: 'Create Thread', url:'createThread' },
                    { title: 'Stocks and Crypto', url:'viewStockCryptoTable' },
                    { title: 'User Profile', url: 'userProfile' },
                    { title: 'Register', url:'login' },
                    { title: 'Logout', url:'logout' }
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