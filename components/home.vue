<template>
		<div class='container'>
			<h2 class='page-header'>{{msg}}</h2>
			<strong>以下是简介:</strong>
			<div class="row">
				<div class="col-md-6 col-md-offset-3">
					<table class='table table-bordered table-hover text-center'>
					    <tbody>
							<tr v-for='(x,i) of obj' :class='{bold:(i+1)%2!=0}'><td v-for='text of x'>{{text}}</td></tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		
	
</template>

<style>
	.bold{
		font-weight: bolder;
	}
</style>

<script>
	export default{
		data(){
			return {
				msg:`hello there,welcome to my ipage`,
				obj:[['姓名','年龄','学历'],['马俊','28','大专'],['毕业时间','工作年限','联系方式'],['2011','5','13683486280'],['求职意向','技能','邮箱'],['web前端/全栈','前端相关','840798591@qq.com']]

				}
			},
		
		}

		

	
</script>