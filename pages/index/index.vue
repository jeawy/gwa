<template>
</template>

<script>
</script>

<style>
</style>
<template>
	<view class="hotels-wrapper">
		<view class="hotel-1" @tap="() => handleRedirection(1)">
			<view class="info-wrapper">
				<h1>Chatswood</h1>
			</view>
		</view>
		<view class="hotel-2" @tap="() => handleRedirection(2)">
			<view class="info-wrapper">
				<h1>Port Douglas</h1>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		methods: {
			handleRedirection(id) {
				uni.navigateTo({
					url: `./index-single?id=${id}`
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.hotels-wrapper {
		padding: 0 15rpx;
	}
	.hotel-1, .hotel-2 {
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		height: 700rpx;	
		
		.info-wrapper {
			width: 100%;
			position: absolute;
			top: 45%;
			left: 0;
			right: 0;
			margin: auto;
			
			h1 {
				text-align: center;
				color: #fff;
			}
		}
	}
	.hotel-1 {
		background: linear-gradient(0, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../../static/hotels/1.jpg');
	}
	.hotel-2 {
		background: linear-gradient(0, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../../static/hotels/2.jpg');
	}
</style>