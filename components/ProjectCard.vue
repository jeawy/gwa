<template>
	<view class="container">
		<view class="img-groups">
			<view class="left">
				<image class="img" mode="aspectFill" :src="featured_img" />
			</view>
			<view class="right">
				<image v-for="photo in gallery" 
					   class="img" 
					   mode="widthFix" 
					   :src="photo.full" />
			</view>
		</view>
		<view class="details">
			<text class="name">{{ name }}</text>
			<ul class="categories">
				<li v-for="(cat, idx) in categories"
					:key="idx">{{ cat }}</li>
			</ul>
			<view>
				<uni-icons type="location-filled" size="15" color="#000" />
				<text class="address">
					{{ address }}
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			name: String,
			address: String,
			featured_img: String,
			gallery: Array,
			categories: Array
		},
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		margin-top: 20rpx !important;
		margin-bottom: 30rpx;
		padding: 20rpx 15rpx !important;
		background-color: #fff;
		border-radius: 16rpx;
		
		.img-groups {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			height: 300rpx;
			overflow: hidden;
			
			.img {
				max-width: 100%;
				height: 100%;
				border-radius: 16rpx;
			}
			
			.left {
				width: 49%;
				margin-right: 15rpx;
			}
			
			.right {
				display: flex;
				width: 49%;
				flex-direction: column;
				.img {
					&:nth-child(1) {
						margin-bottom: 10rpx;
					}
				}
			}
			
		}
		.details {
			.name {
				display: block;
				font-size: 18px;
				margin-top: 20rpx;
				margin-bottom: 10rpx;
				color: #000;
			}
			.address {
				font-size: 12px;
				color: #000;
			}
			.categories{
				list-style: none;
				display: flex;
				margin-bottom: 10rpx;
				
				li {
				    color: #fff;
				    background-color: #D6B88B;
				    border-radius: 4px;
				    padding: 2px 5px;
				    font-size: .8em;
				    min-width: 60px;
				    text-align: center;
					margin-right: 5rpx;
				}
			}
		}
	}

</style>
