<template>
	<div id="signup-wrapper">
		<h1>Register</h1>
		<form id="signup-form" @submit="handleSubmit">
			<div class="form-group">
				<label>Username</label>
				<input v-model="username" />
			</div>
			<div class="form-group">
				<label>First Name</label>
				<input v-model="fname" />
			</div>
			<div class="form-group">
				<label>Last Name</label>
				<input v-model="lname" />
			</div>
			<div class="form-group">
				<label>Email</label>
				<input v-model="email" type="email" />
			</div>
			<div class="form-group">
				<label>Password</label>
				<input v-model="password" type="password" />
			</div>	
			<button form-type="submit">Signup</button>
		</form>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				username: "",
				fname: "",
				lname: "",
				email: "",
				password: ""
			}
		},
		methods: {
			handleSubmit() {
				uni.request({
					url: this.$baseURL + '/gwa_rest/v2/signup',
					method: 'POST',
					data: {
						username: this.username,
						name: this.fname+" "+this.lname,
						first_name: this.fname,
						last_name: this.lname,
						email: this.email,
						password: this.password
					}
				}).then(([err, res]) => {
					if(res.data==="success"){
						uni.showModal({
							title: 'Success',
							content: 'New user has been created. Please login.',
							showCancel: false,
							success: (res) => {
								if(res.confirm) {
									this.$emit('showLoginForm')
								}
							}
						})							
					}else{
						uni.showModal({
							title: 'Alert',
							content: 'There is some error when creating the user.',
							showCancel: false
						})							
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	#signup-wrapper {
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
