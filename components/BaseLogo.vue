<template>
	<view class="header">
		<image
			class="logo"
			src="../static/toplogo.svg"
			mode="aspectFit"
		></image>
	</view>
</template>

<script>
	export default {
		name: 'BaseLogo',
		data() {
			return {};
		},
	};
</script>

<style lang="scss">
	.header {
		padding-top: calc(var(--status-bar-height) + 4rpx);
		height: $uni-logo-bar-height;
		width: 100%;
		display: flex;
		position: fixed;
		top: 0;
		justify-content: center;
		background-color: $uni-logo-background;
		z-index: 999;
		box-sizing: content-box;
		.logo {
			height: 100%;
			padding-bottom: 10rpx;
		}
	}
</style>
