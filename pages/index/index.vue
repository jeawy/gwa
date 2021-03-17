<template>
	
	<view class="rf-index">
		
		 <web-view id="mapContainer" :src="url"  ></web-view>
		<!-- 轮播图 -->
		<!--
		<swiper :autoplay="true" indicator-dots display-multiple-items :circular='true'>
			<swiper-item v-for="(item,index) in swiperImg" :key="index">
				<view class="swiper-item">
					<image :src="item" lazy-load mode="heightFix" />
				</view>
			</swiper-item>
		</swiper> -->
	</view>
</template>
<script>
	export default {
		data() {
			return {
				swiperImg: [ // 轮播图图片
					'../../static/home/1.png',
					'../../static/home/2.png',
					'../../static/home/3.png', 
				],
				url:"https://reservations.travelclick.com/98505?HotelId=98505&languageid=1&nights=1&rooms=1&adults=1&roomtypeid=422118&_ga=2.33644577.1421270210.1615350019-1308944151.1615350019#/datesofstay",
				baseurl: "",
				swiperCurrent: 0, // 轮播图index 
				newbee_infolst: []
			};
		},
		onShow() {},
		onLoad(){
			var height=0;//定义动态的高度变量，如高度为定值，可以直接写
			uni.getSystemInfo({
				//成功获取的回调函数，返回值为系统信息
				success: (sysinfo) => {
				height = sysinfo.windowHeight;//自行修改，自己需要的高度 此处如底部有其他内容，可以直接---(-50)这种
			},
			complete: () => {
			    }
			});
			var currentWebview = this.$scope.$getAppWebview();//获取当前web-view
			setTimeout(function() {
					var wv = currentWebview.children()[0];
					wv.setStyle({//设置web-view距离顶部的距离以及自己的高度，单位为px
					top: 68,//此处是距离顶部的高度，应该是你页面的头部
					height:height,//webview的高度
					
					scalable:false      //webview的页面是否可以缩放，双指放大缩小
				})
			}, 1000);//如页面初始化调用需要写延迟 
		},
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
		text-align: center; 
		
      .toplogo{
		  position: relative;
		  bottom: 0px;
		  height: 120px;
		  width: 120px;
	  }
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
