<template>
	<view id="project-details" class="hasLogo">
		<Logo />
		<view>
			<swiper
				class="slider"
				:indicator-dots="true"
				indicator-color="#E2E2E2"
				indicator-active-color="#D6B88B"
				:autoplay="true"
				:interval="5000"
				:duration="500">
				<swiper-item v-for="(photo, i) in photos" :key="i">
					<image class="img" mode="aspectFill" :src="photo" @click="() => previewImg(photo)" />
				</swiper-item>
			</swiper>
		</view>
		<view class="details">
			<view class="header">
				<h2 class="title">{{ title }}</h2>
				<p>{{ address }}</p>
				<div>
					Project Type: <div class="tag">{{ tag }}</div>
				</div>
			</view>
			<view class="bottom">
				<view class="available">
					<h2 class="title">Available Date</h2>
					<div v-html="availableDate"></div>
				</view>
				<view class="features">
					<h2 class="title">Features</h2>
					<div v-html="features" class="features-content"></div>
				</view>
				<view class="desc">
					<h2 class="title">Details</h2>
					<div v-html="desc"></div>
				</view>				
			</view>
		</view>
		<view class="map">
			<iframe :src="mapUrl" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
		</view>
		<view class="btn-wrapper">
			<AppButton>Contact Us</AppButton>
		</view>
	</view>
</template>

<script>
	import Logo from "@/components/BaseLogo.vue"
	import AppButton from "@/components/AppButton.vue"
	import {MAP_API_KEY} from '../../env.js'
	
	console.log('apiKey: '+MAP_API_KEY)
	
	export default {
		components: {
			Logo,
			AppButton
		},
		onLoad(options) {
			const projectId = options.project_id
			console.log({projectId})
			uni.request({
				url: this.$baseURL + '/wp/v2/all_projects/'+projectId,
				method: 'get'
			}).then(([err, res]) => {
				if(!err) {
					this.title = res.data.title.rendered
					this.desc = res.data.content.rendered
					this.address = res.data.address[0]
					this.features = res.data.features[0]
					this.availableDate = res.data.available_date[0]
					this.photos = res.data.gallery_photos.map(item => item.full)
					this.tag = res.data.projects_categories_names[0]
				}
			})
		},
		data() {
			return {
				title: "",
				address: "",
				tag: "",
				desc: "",
				features: "",
				availableDate: "",
				photos: [],
				mapUrl: "https://www.google.com/maps/embed/v1/place?key="+MAP_API_KEY+"&q="+this.address
			}
		},
		methods: {
			previewImg(url) {
				wx.previewImage({
					urls: this.photos.map(url => url),
					current: url,
					success: (res) => {
						console.log('succeed', res)
					},
					fail: (res) => {
						console.log('fail', res)
					},
					complete: (res) => {
						console.log('complete', res)
					}
				})
			}			
		},
	}
</script>

<style lang="scss" scoped>
	#project-details {
		padding-bottom: 30rpx;
		
		.img {
			width: 100%;
		}
		.details {
			.title {
				font-size: 1.1em;
				color: #D6B88B;
			}
			
			.header {
				margin-top: 30rpx;
				border-bottom: 1px solid #E6E6E6;
				padding: 30rpx;
				
				.title {
					font-size: 1.4em;
				}
				
				.tag {
					display: inline-block;
					color: #fff;
					background-color: #D6B88B;
					border-radius: 4px;
					padding: 2px 5px;
					font-size: .9em;
					max-width: 80px;
					text-align: center;
					margin-left: 15rpx;
				}
			}	
			.bottom {
				padding: 30rpx;
				.features  {
					margin-bottom: 30rpx;
					.features-content {
						margin-left: 30rpx;
					}
				}
				.available {
					margin-bottom: 30rpx;
				}
			}
		}
		.btn-wrapper {
			margin-top: 30rpx;
			text-align: center;
		}		
	}
</style>
