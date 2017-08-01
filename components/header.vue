<template>
    <div id='header' class='container-fluid'>
        <button type="button" class="btn btn-default" @click="$emit('toggleList')"><span class='glyphicon glyphicon-th-list'></span></button>
        <img src='../assets/logo.png'>
        <a href='/'>Ipage</a>
    </div>
</template>
<style scoped>
#header {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 2;
    height: 50px;
    text-align: center;
    background-color: #eee;
    border-bottom: 1px solid #ddd;
}

button {
    border: none;
    background-color: #eee;
    display: none;
    position: absolute;
    left: 20px;
    top: 10px;
}

img {
    position: absolute;
    left: 50px;
    width: 31px;
    height: 31px;
    top: 10px;
}

a {
    font-size: 35px;
    font-weight: lighter;
    font-variant: small-caps;
    font-style: italic;
    color: #333;
}

a:hover {
    color: #009966;
}

@media screen and (max-width: 900px) {
    img {
        display: none;
    }
    button {
        display: inline-block;
    }
}
</style>
