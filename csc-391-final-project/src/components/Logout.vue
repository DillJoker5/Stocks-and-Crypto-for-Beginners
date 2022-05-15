<template>
   <span>
        <h1> Logout button</h1>
        <p v-if="errorIsThrown">{{error}}</p>
            
        
    </span>
</template>

<script>

export default {
    name: 'Logout',
    data(){
        return{
            userguid: "",
            error: "",
            errorIsThrown: false
        }
    },
        async logout() {
            try {
                let logoutUrl = '/logout';
                let userGuid = localStorage.getItem('userGuid');

                await this.$http.post(logoutUrl, {
                    'UserGuid': userGuid,
                    
                }, {
                    'Content-Type': 'application/json'
                });
                
                this.$router.push({
                    name: 'Home'
                });
                
                
            } catch (error) {
                this.error = error;
                this.errorIsThrown = true;
                throw new Error(error);
            }
                
        }
    
    

}

</script>
<style scoped>
p {
    text-align: center;
    color: red;
}
</style>