<template>
	<view class="wrapper">
		<uni-icons
			:style="{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: size*3.5 + 'rpx',
				height: size*3.5 + 'rpx',
				border: '1px solid '+borderColor, 
				borderRadius: '50%'
			}"
			:type="type" 
			:size="size" 
			class="icon" 
			:color="color"
			 @click="onClick"/>
		<text class="title">{{ title }}</text>
	</view>
</template>

<script>
	export default {
		props: {
			type: String,
			size: String,
			color: String,
			borderColor: String,
			title: String,
		},
		methods: {
			onClick() {
				this.$emit('onPress')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		
		.title {
			color: #fff;
			margin-top: 5rpx;
			font-size: 12px;
		}
	}
</style>
