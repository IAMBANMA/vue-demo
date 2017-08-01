<template>
	<div id='child'>
		<p>{{this.$route.params.cid}}</p>
		<cc/>
	</div>
</template>

<script>
	var cc;
	//import(`./${this.$route.params.cid}.vue`).then(module=>{cc=module;});
	//import cc from './c00.vue';
	export default{
		components:{
			cc
		}
	}
	
</script>