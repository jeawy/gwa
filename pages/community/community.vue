<template>
	<view class="hasLogo">
		<Logo />
		<web-view id="mapContainer" :src="url"></web-view>
	</view>
</template>

<script>
	import Logo from "@/components/BaseLogo.vue"
	export default {
		data() {
			return {
				url: "http://remi.net.au/gwa-app/"
			}
		},
		components: {
			Logo
		},
		onLoad() {
			var height = 0; //定义动态的高度变量，如高度为定值，可以直接写
			uni.getSystemInfo({
				//成功获取的回调函数，返回值为系统信息
				success: (sysinfo) => {
					height = sysinfo.windowHeight; //自行修改，自己需要的高度 此处如底部有其他内容，可以直接---(-50)这种
				},
				complete: () => {}
			});
			var currentWebview = this.$scope.$getAppWebview(); //获取当前web-view
			setTimeout(function() {
				var wv = currentWebview.children()[0];
				wv.setStyle({ //设置web-view距离顶部的距离以及自己的高度，单位为px
					top: 68, //此处是距离顶部的高度，应该是你页面的头部
					height: height, //webview的高度

					scalable: false //webview的页面是否可以缩放，双指放大缩小
				})
			}, 1000); //如页面初始化调用需要写延迟 
		},
		methods: {}
	}
</script>

<style>

</style>
