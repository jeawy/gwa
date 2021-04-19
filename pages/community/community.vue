<template>
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
				<uni-icons type="scan" size="25" color="#fff" class="icons" />
				<uni-icons type="chat" size="25" color="#fff" class="icons" />
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
			<swiper-item>
				<view
					><image
						class="img"
						mode="widthFix"
						src="https://i.imgur.com/CJGp3TO.png"
				/></view>
			</swiper-item>
			<swiper-item>
				<view
					><image
						class="img"
						mode="widthFix"
						src="https://i.imgur.com/CJGp3TO.png"
				/></view>
			</swiper-item>
			<swiper-item>
				<view
					><image
						class="img"
						mode="widthFix"
						src="https://i.imgur.com/CJGp3TO.png"
				/></view>
			</swiper-item>
		</swiper>

		<view class="services-wrapper">
			<RoundIcon
				type="home"
				size="20"
				color="#D6B88B"
				borderColor="#D6B88B"
				title="Hotels"
			/>
			<RoundIcon
				type="shop"
				size="20"
				color="#D6B88B"
				borderColor="#D6B88B"
				title="Residence"
			/>
			<RoundIcon
				type="paperclip"
				size="20"
				color="#D6B88B"
				borderColor="#D6B88B"
				title="Services"
			/>
			<RoundIcon
				type="person"
				size="20"
				color="#D6B88B"
				borderColor="#D6B88B"
				title="Profile"
			/>
		</view>

		<view class="projects-wrapper">
			<view class="projects-header">
				<text class="title">Projects</text>
				<text class="view-more"
					>View more
					<uni-icons type="forward" size="15" color="#e2e2e2" />
				</text>
			</view>
			<scroll-view
				class="projects-scroll"
				scroll-x="true"
				:scroll-left="scrollLeft"
				@scroll="scroll"
			>
				<gesture @slideLeft="slideLeft" @slideRight="slideRight">
					<view
						class="scroll-item"
						v-for="(project, index) in projects"
						:key="index"
					>
						<ProjectCard :name="project" />
					</view>
				</gesture>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import RoundIcon from '../../components/RoundIcon.vue';
	import ProjectCard from '../../components/ProjectCard.vue';
	import gesture from '../../components/gesture/gesture.vue';
	export default {
		components: {
			RoundIcon,
			ProjectCard,
			gesture,
		},
		data() {
			return {
				title: 'picker',
				array: ['Chatswood', 'Ashfield', 'Burwood', 'Eastwood'],
				index: 0,
				projects: ['Project 1', 'Project 2', 'Project 3'],
				scrollLeft: 0,
			};
		},
		onReady() {},
		methods: {
			bindPickerChange: function (e) {
				console.log('picker发送选择改变，携带值为', e.target.value);
				this.index = e.target.value;
			},
			scroll(e) {
				e.preventDefault();
				const details = e.detail;
				console.log(details.deltaX);
			},
			slideLeft() {
				console.log('slide left');
				// go to then next post
				this.scrollLeft = 10;
			},
			slideRight() {
				console.log('slide right');
			},
		},
	};
</script>

<style lang="scss" scoped>
	.container {
		margin-top: 50rpx;
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
					vertical-align: middle;
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
