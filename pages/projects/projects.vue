<template>
	<view id="projects" class="hasLogo">
		<Logo />
		<div class="container-fluid p-0">
			<ul class="categories_wrapper">
				<li><a href="#" @click.prevent="() => toggleCategory(null)">All</a></li>
				<li v-for="category in categories" :key="category.id">
					<a :href="category.link" @click.prevent="() => toggleCategory(category.id)">{{ category.name }}</a>
				</li>
			</ul>
			<div class="row projects-wrapper" v-for="project in projects" :key="project.id">
				<div class="col-12 p-0">
					<a :href="project.link">
						<img :src="project.fimg_url" alt="demo-project" />
					</a>
				</div>
				<div class="col-12 inner-wrapper">
					<a href="">
						<h3>{{ project.title.rendered }}</h3>
					</a>
					<div class="d-flex justify-content-between">
						<div>{{ project.address[0] }}</div>
						<div class="share-btn" @click="open"><i class="fa fa-share-square-o" aria-hidden="true"></i></div>
					</div>
				</div>
			</div>
			<uni-popup ref="popup" type="share">
				<uni-popup-share @select="select"></uni-popup-share>
			</uni-popup>
		</div>
	</view>
</template>

<script>
	import Logo from "@/components/BaseLogo.vue"
	export default {
		data() {
			return {
				projects: null,
				categories: null,
				// baseURL: baseURL
			}
		},
		components: {
			Logo
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
			open() {
				this.$refs.popup.open()
			},
			select({item, index}) {
				console.log('selected social platform: ', item, index)
			},
			toggleCategory(id) {
				if(id) {
					uni.request({
						url: this.$baseURL + '/wp/v2/all_projects?_embed&projects_categories='+id,
						method: 'get'
					}).then(([err, res]) => {
						this.projects = res.data
					})					
				}else{
					uni.request({
						url: this.$baseURL + '/wp/v2/all_projects?_embed',
						method: 'get'
					}).then(([err, res]) => {
						console.log(res.data); 
						this.projects = res.data
					})
				}
			}
		},
		onLoad() {
			uni.request({
				url: this.$baseURL + '/wp/v2/all_projects?_embed',
				method: 'get'
			}).then(([err, res]) => {
				console.log(res.data); 
				this.projects = res.data
			})
			
			uni.request({
				url: this.$baseURL + '/wp/v2/projects_categories',
				method: 'get'
			}).then(([err, res]) => {
				this.categories = res.data
			})
		}
	}
</script>

<style lang="scss" scoped>
	#projects {
		padding-top: 65px;
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
