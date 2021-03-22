<template>
	<div id="login-wrapper">
		<h1>Login</h1>
		<form id="login-form" @submit="handleSubmit">
			<div class="form-group">
				<label>Username</label>
				<input v-model="username" />
			</div>
			<div class="form-group">
				<label>Password</label>
				<input type="password" v-model="password" />
			</div>				
			<button form-type="submit">Log in</button>
		</form>		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: "",
				password: ""
			}
		},
		methods: {
			handleSubmit() {
				uni.request({
					url: this.$baseURL + '/gwa_rest/v2/login',
					method: 'POST',
					data: {
						username: this.username,
						password: this.password
					}
				}).then(([err, res]) => {
					console.log(res.data)
					if(res.data.errors) {
						uni.showModal({
							title: "Alert",
							content: "Username or password is wrong!",
							showCancel: false
						})
					}else{
						this.username = ""
						this.password = ""
						// switch to Hotels tab
						uni.switchTab({
							url: '/pages/index/index'
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	#login-wrapper {
		padding-top: 65px;
		
		h1 {
			margin-bottom: .5em;
		}
		.form-group {
			margin-bottom: 1em;
			
			label {
				margin-bottom: 5px;
				font-size: 1.1em;
			}
			input {
				background-color: #fff;
				color: #000;
				padding: 5px;
				min-height: 30px;
			}	
		}		
		button {
			background-color: #b9b9b9;
			color: #fff;
			border-radius: 4px;
			padding: 6px 0;
			margin-top: 1.5em;
		}
	}
</style>
