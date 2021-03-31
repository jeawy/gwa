<template>
	<view class="container-fluid">
		<view class="row">
			<view class="col-6 p-0 content" 
				 v-for="cat in categories" 
				 :key="cat.name" 
				 v-if="cat.name!=='Uncategorised'"
				 style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../../static/services/demo.jpg'); 
						 background-size: cover; 
						 background-position: center;"
				 @tap="() => toggleCategory(cat.id)" >
				<view class="content-wrapper">
					<view class="img-wrapper">
						<image
							src="../../static/services/house.png"
							class="iconfont"></image>	
					</view>
					<h2>{{cat.name}}</h2>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categories: null
			}
		},
		methods: {
			toggleCategory(id) {
				console.log(id)
				uni.navigateTo({
					url: `./services-single?cat_id=${id}`
				})
			}
		},
		onLoad() {
			// get all categories
			uni.request({
				url: this.$baseURL + '/wp/v2/categories?filter[orderby]=date&order=desc',
				method: 'get'
			}).then(([err, res]) => {
				this.categories = res.data
			})
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: 300rpx;
		display: flex;
		justify-content: center;
		align-items: center;

		.content-wrapper {
			text-align: center;
			
			.img-wrapper {
				color: #fff;
				border: 1px solid #fff;
				border-radius: 50%;
				width: 45px;
				height: 45px;
				display: flex;
				justify-content: center;
				align-items: center;
				margin: auto;
				
				.iconfont {
					width: 30px;
					height: 30px;
				}				
			}
			h2 {
				color: #fff;
				font-size: 1.2rem;
				margin-top: 15rpx;
			}
		}
	}
</style>
