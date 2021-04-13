<template>
	<view id="profile-form" class="hasLogo">
		<Logo />
		<div class="container">
			<LoginForm v-if="showLogin" />
			<SignupForm v-if="!showLogin" @showLoginForm="() => showLogin = true" />
			<div class="form-switch-wrapper">
				<a class="form-switch" href="#" @click.prevent="toggleForm">Switch to {{ showLogin ? 'signup' : 'login' }}</a>
			</div>
		</div>
	</view>
</template>

<script>
	import SignupForm from './SignupForm.vue'
	import LoginForm from './LoginForm.vue'
	import Logo from "@/components/BaseLogo.vue"
	export default {
		components: {
			SignupForm,
			LoginForm,
			Logo
		},
		data() {
			return {
				showLogin: true
			}
		},
		methods: {
			toggleForm() {
				this.showLogin = !this.showLogin
			}
		}
	}
</script>

<style lang="scss" scoped>
.form-switch-wrapper {
	width: 100%;
	margin-top: 1.2em;
	.form-switch {
		text-decoration: underline;
		font-weight: 600;
		color: grey;
		padding: 0;
	}		
}
</style>
