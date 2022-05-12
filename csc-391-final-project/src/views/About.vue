<template>
    <div class='about'>
        <h1 class='text-center'>About Our Project</h1>
        <br>
        <br>
        <h3>Team Members</h3>
        <ul>
            <li>Dylan Chirigotis (Full Stack Developer)</li>
            <li>Tyler Fahney (Full Stack Developer)</li>
        </ul>
        <br>
        <h3>Description</h3>
        <ol>
            <li>CSC 391 Advanced Web Development Final Project</li>
            <li>Stock and Crypto Website for people looking to invest in these finances</li>
            <li>One of the first ever financial websites where you can interact with other users through personal Reddit-like threads!</li>
        </ol>
        <br>
        <h3>Technologies Used: </h3>
        <ol>
            <li>JavaScript</li>
            <li>Vue Framework</li>
            <li>Yahoo Finance API</li>
            <li>Finnage API</li>
            <li>SQL</li>
            <li>SQL Server</li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'About',
};
</script>

<style scoped>
.about {
    padding-left: 25vw;
    padding-top: 5vh;
    font: italic;
    font-family: fantasy;
    color:rgb(0, 0, 0);
    width: 100vw;
    height: 100%;
}

.about li {
    margin-left: 1vw;
}

.about h1 {
    margin-left: -25vw;
}

.about-logo-img {
    float: right;
    margin-right: 25vw;
}
</style>
