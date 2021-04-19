<template>
	<view class="container">
		<view class="img-groups">
			<view class="left">
				<image class="img" mode="aspectFill" src="https://i.imgur.com/CJGp3TO.png" />
			</view>
			<view class="right">
				<image class="img" mode="widthFix" src="https://i.imgur.com/CJGp3TO.png" />
				<image class="img" mode="widthFix" src="https://i.imgur.com/CJGp3TO.png" />
			</view>
		</view>
		<view class="details">
			<text class="name">{{ name }}</text>
			<ul class="categories">
				<li>For rent</li>
				<li>For sale</li>
			</ul>
			<view class="address">
				<uni-icons type="location-filled" size="15" color="#e6e6e6" />
				<text>
					dasdsadasdsad
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			name: String
		},
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
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
				font-size: 18px;
				margin-bottom: 20rpx;
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
