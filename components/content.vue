<template>
    <div id='content' @click='$emit("toggleList")'>
        <transition> 
            <router-view></router-view>
        </transition>
    </div>
</template>
<style scoped>
#content {
    position: absolute;
    padding-top: 50px;
    padding-left: 200px;
    background-color: white;
    font-weight: lighter;
    overflow: hidden;
}

.v-enter-active {
    animation: slideInRight .35s;
   
}

@keyframes slideInRight {
    from {
        -webkit-transform: translate(100%, 0);
        transform: translate(100%, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
}

@media screen and (max-width: 900px) {
    #content {
        position: relative;
        padding-left: 0;
    }
}
</style>
