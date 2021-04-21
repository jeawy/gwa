<template>
	<view>
		<Logo />
		<view class="container">
			<view class="header">
				<view class="picker">
					<view class="uni-list-cell">
						<view class="uni-list-cell-db">
							<picker
								@change="bindPickerChange"
								:value="index"
								:range="array"
							>
								<view class="uni-input">
									{{ array[index] }}
									<uni-icons
										type="arrowdown"
										size="15"
										color="#fff"
										:style="{ marginLeft: '10rpx' }"
									/>
								</view>
							</picker>
						</view>
					</view>
				</view>
				<view class="search">
					<input confirm-type="search" placeholder="输入关键词搜索" />
				</view>
				<view class="controls">
					<uni-icons
						type="scan"
						size="25"
						color="#fff"
						class="icons"
					/>
					<uni-icons
						type="chat"
						size="25"
						color="#fff"
						class="icons"
					/>
				</view>
			</view>

			<swiper
				class="slider"
				:indicator-dots="true"
				indicator-color="#E2E2E2"
				indicator-active-color="#D6B88B"
				:autoplay="true"
				:interval="5000"
				:duration="500"
			>
				<swiper-item v-for="banner in banners" :key="banner.id">
					<image class="img" mode="widthFix" :src="banner.fimg_url" @click="() => previewImg(banner.fimg_url)" />
				</swiper-item>
			</swiper>

			<view class="services-wrapper">
				<RoundIcon
					type="home"
					size="20"
					color="#D6B88B"
					borderColor="#D6B88B"
					title="Hotels"
					@onPress="() => redirectToTab('/pages/index/index')"
				/>
				<RoundIcon
					type="shop"
					size="20"
					color="#D6B88B"
					borderColor="#D6B88B"
					title="Residence"
					@onPress="() => redirectToTab('/pages/projects/projects')"
				/>
				<RoundIcon
					type="paperclip"
					size="20"
					color="#D6B88B"
					borderColor="#D6B88B"
					title="Services"
					@onPress="() => redirectToTab('/pages/services/services')"
				/>
				<RoundIcon
					type="person"
					size="20"
					color="#D6B88B"
					borderColor="#D6B88B"
					title="Profile"
					@onPress="() => redirectToTab('/pages/profile/profile')"
				/>
			</view>

			<view class="projects-wrapper">
				<view class="projects-header">
					<text class="title">Projects</text>
					<view>
						<text
							class="view-more"
							@click="
								() => redirectToTab('/pages/projects/projects')
							"
							>View more
						</text>
						<uni-icons type="forward" size="15" color="#e2e2e2" />
					</view>
				</view>
				<scroll-view
					class="projects-scroll"
					:scroll-x="enableScroll"
					:scroll-into-view="scrollIntoIndex"
				>
					<gesture @slideLeft="slideLeft" @slideRight="slideRight">
						<view
							class="scroll-item"
							v-for="(project, index) in projects"
							:key="project.id"
							:id="'left' + index"
						>
							<ProjectCard
								:name="project.title.rendered"
								:address="project.address[0]"
								:featured_img="project.fimg_url"
								:gallery="project.gallery_photos"
								:categories="project.projects_categories_names"
							/>
						</view>
					</gesture>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import RoundIcon from '../../components/RoundIcon.vue';
	import ProjectCard from '../../components/ProjectCard.vue';
	import gesture from '../../components/gesture/gesture.vue';
	import Logo from '@/components/BaseLogo.vue';
	export default {
		components: {
			RoundIcon,
			ProjectCard,
			gesture,
			Logo,
		},
		data() {
			return {
				title: 'picker',
				array: ['Chatswood', 'Ashfield', 'Burwood', 'Eastwood'],
				index: 0,
				projects: [],
				banners: [],
				scrollIntoIndex: 'left0',
				enableScroll: false,
			};
		},
		onLoad() {
			// get all banners data
			uni.request({
				url: this.$baseURL + '/wp/v2/banner',
				method: 'GET',
			}).then(([err, res]) => {
				if (!err) {
					this.banners = res.data;
				}
			});

			// get all projects data
			uni.request({
				url: this.$baseURL + '/wp/v2/all_projects',
				method: 'GET',
			}).then(([err, res]) => {
				if (!err) {
					this.projects = res.data;
				}
			});
		},
		methods: {
			bindPickerChange: function (e) {
				console.log('picker发送选择改变，携带值为', e.target.value);
				this.index = e.target.value;
			},
			redirectToTab(url) {
				uni.switchTab({
					url: url,
				});
			},
			slideLeft() {
				// go to next post
				let index = Number(this.scrollIntoIndex.split('left')[1]);
				index =
					index + 1 > this.projects.length - 1
						? this.projects.length - 1
						: index + 1;
				this.enableScroll = true;
				this.$nextTick(() => {
					this.scrollIntoIndex = 'left' + index;
					// wait for scrolling to be finished
					setTimeout(() => {
						this.enableScroll = false;
					}, 300);
				});
				console.log('slide left: ', this.scrollIntoIndex);
			},
			slideRight() {
				// go to prev post
				let index = Number(this.scrollIntoIndex.split('left')[1]);
				index = index - 1 < 0 ? 0 : index - 1;
				this.enableScroll = true;
				this.$nextTick(() => {
					this.scrollIntoIndex = 'left' + index;
					// wait for scrolling to be finished
					setTimeout(() => {
						this.enableScroll = false;
					}, 300);
				});
				console.log('slide right: ', this.scrollIntoIndex);
			},
			previewImg(url) {
				wx.previewImage({
					urls: this.banners.map(banner => banner.fimg_url),
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
	};
</script>

<style lang="scss" scoped>
	.container {
		margin-top: calc($uni-logo-bar-height + var(--status-bar-height) + 70rpx);
		padding-left: 30rpx;
		padding-right: 30rpx;
		padding-bottom: 60rpx;

		.header {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-bottom: 30rpx;
			.search {
				margin-left: 30rpx;
			}
			.controls {
				.icons {
					margin: 2px;
					&:nth-child(1) {
						margin-right: 10px;
					}
				}
			}
		}

		.slider {
			margin-bottom: 40rpx;
		}

		.services-wrapper {
			display: flex;
			justify-content: space-around;
			margin-bottom: 60rpx;
		}

		.projects-wrapper {
			.projects-header {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.title {
					font-size: 20px;
					font-weight: bold;
				}
				.view-more {
					font-size: 15px;
				}
			}
			.projects-scroll {
				white-space: nowrap;
				.scroll-item {
					display: inline-block;
					padding: 0;
					width: 95%;
					margin-right: 10rpx;
				}
			}
		}
	}
</style>
