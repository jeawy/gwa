<template>
	<view class="rf-index">
		<!-- 轮播图 -->
		<swiper :autoplay="true" indicator-dots display-multiple-items :circular='true'>
			<swiper-item v-for="(item,index) in swiperImg" :key="index">
				<view class="swiper-item">
					<image :src="item" lazy-load mode="heightFix" />
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				swiperImg: [ // 轮播图图片
					'../../static/home/1.jpg',
					'../../static/home/2.jpg',
					'../../static/home/3.jpg',
					'../../static/home/4.jpg',
				],
				baseurl: "",
				swiperCurrent: 0, // 轮播图index 
				newbee_infolst: []
			};
		},
		onShow() {},
		onShareAppMessage() {
			return {
				title: '欢迎',
				path: '/pages/index/index'
			}
		},
		methods: {
			target(url) {
				uni.switchTab({
					url
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.rf-index {

		/*轮播图*/
		swiper {
			height: 100vh;
			width: 100%;

			.swiper-item {
				height: 100%;
			}
			image{
				height: 100%;
			}
		}
	}
</style>
