<template>
    <div id='app'>
        <router-view name='header' @toggleList='toggleHide'></router-view>
        <router-view name='aside' :trans='val' @toggleList='toggleHide'></router-view>
        <router-view name='content' @toggleList='val=false'></router-view>
    </div>
</template>
<style scoped>
#app {
    position: relative;
}
</style>
<script>
export default {
    name: 'app',
    data: function() {
        return {
            val: false
        }
    },
    methods: {
        toggleHide: function() {
            this.val = !this.val;
        }
    }
}
</script>
