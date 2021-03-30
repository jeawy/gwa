<template>
	<view>
		<web-view :src="source"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				source: null
			}
		},
		onLoad(options) {
			console.log(typeof options.id, options.id)
			switch(options.id){
				case "1":
					this.source = "https://www.silkarihotels.com.au/chatswood"
					break
				case "2":
					this.source = "https://www.silkarihotels.com.au/portdouglas"
					break
				default:
					uni.showModal({
						title: 'Error',
						content: 'No page is found!',
						showCancel: false
					})
			}
			
			// 调整页面高度
			var height=0;//定义动态的高度变量，如高度为定值，可以直接写
			uni.getSystemInfo({
				//成功获取的回调函数，返回值为系统信息
				success: (sysinfo) => {
					height = sysinfo.windowHeight; //自行修改，自己需要的高度 此处如底部有其他内容，可以直接---(-50)这种
				}
			});
			var currentWebview = this.$scope.$getAppWebview();//获取当前web-view
			setTimeout(function() {
					var wv = currentWebview.children()[0];
					wv.setStyle({//设置web-view距离顶部的距离以及自己的高度，单位为px
						top: 32,//此处是距离顶部的高度，应该是你页面的头部
						height: height,//webview的高度
						scalable:false      //webview的页面是否可以缩放，双指放大缩小
					})
			}, 1000);//如页面初始化调用需要写延迟 
		}
	}
</script>

<style>
</style>
