<template>
    <span>
        <v-app-bar color='light-blue accent-4' dense app dark>
            <v-navigation-drawer app v-model='drawer'>
                <v-list>
                    <template v-for='(item, index) in items'>
                        <v-list-item :key='index'>
                            <v-list-item-content>{{item.title}}</v-list-item-content>
                        </v-list-item>
                        <v-divider :key='`div-${index}`'/>
                    </template>
                </v-list>
            </v-navigation-drawer>
            <v-app-bar-icon @click='drawer = !drawer' class='hidden-md-and-up'></v-app-bar-icon>
            <v-img max-width='40' src='@/assets/logo.png'> 
            </v-img>
            <router-link to='/'>
                <v-app-bar-title>Cereal with Milk</v-app-bar-title>
            </router-link>
        </v-app-bar>
    </span>
</template>

<script>
/*
    Steps to get done

    1) Create Template
    2) Create styling
    3) Verify all buttons work (will take to blank page currently)
*/
export default {
    name: 'AppNav',
    data() {
            drawer: true;
            items: [
                { title: 'About', url:'/about' },
                { title: 'Threads', url:'/view-threads' },
                { title: 'Create Thread', url:'/create-thread' },
                { title: 'Stocks and Crypto', url:'/view-stock-crypto-table' },
                { title: 'User Profile', url: '/user-profile' },
                { title: 'Register', url:'/login' },
            ];
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