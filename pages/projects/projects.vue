<template>
	<view id="projects">
		<div class="container-fluid p-0">
			<ul class="categories_wrapper">
				<li><a href="">All</a></li>
				<li><a href="">Projects</a></li>
				<li><a href="">For Sale</a></li>
				<li><a href="">For Rent</a></li>
			</ul>
			<div class="row projects-wrapper">
				<div class="col-12 p-0">
					<a href="<?php the_permalink(); ?>">
						<img src="static/projects/demo.jpg" alt="demo-project" />
					</a>
				</div>
				<div class="col-12 inner-wrapper">
					<a href="">
						<h3>Demo Project</h3>
					</a>
					<div class="d-flex justify-content-between">
						<div>503 Kent Street, Mascot, NSW 2020</div>
						<div class="share-btn"><i class="fa fa-share-square-o" aria-hidden="true"></i></div>
					</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			var height=0;//定义动态的高度变量，如高度为定值，可以直接写
			uni.getSystemInfo({
				//成功获取的回调函数，返回值为系统信息
				success: (sysinfo) => {
					height = sysinfo.windowHeight;//自行修改，自己需要的高度 此处如底部有其他内容，可以直接---(-50)这种
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	#projects {
		padding-top: 45px;
		.categories_wrapper{
			list-style: none;
			display: flex;
			justify-content: space-around;
			margin-bottom: 10px;
			
			li {
			    color: #fff;
			    background-color: #D6B88B;
			    border-radius: 4px;
			    padding: 2px 5px;
			    font-size: .9em;
			    min-width: 80px;
			    text-align: center;
			}
		}
		.projects-wrapper {
		    margin: 10px 0;
		    color: #D6B88B;
		    border-bottom: 1px solid #616161;
		    padding-bottom: 10px;
			.inner-wrapper {
			    margin-top: 10px;
				h3 {
				    font-size: 1em;
				    font-weight: 600;
				}
			}
			.share-btn {
			    color: #b9b9b9;
			    font-size: 1.2em;
			}
		}
	}
</style>
