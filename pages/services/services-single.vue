<template>
	<view>
		<div class="container">
			<div id="properties">
				<!-- <ul class="categories_wrapper">
					<li><a href="#" @click.prevent="() => toggleCategory(null)">All</a></li>
					<li v-for="cat in categories" :key="cat.name"  v-if="cat.name!=='Uncategorised'">
						<a href="#" @click.prevent="() => toggleCategory(cat.id)">{{ cat.name }}</a>
					</li>
				</ul> -->
				<div class="property-posts">
					<div v-if="projects&&!projects.length" style="color: #fff;">No Data.</div>
					<div class="row align-items-center vpost_wrapper" v-for="project in projects" :key="project.id">
						<div class="col-5 pe-0 img-wrapper">
							<a :href="project.link">
								<img :src="project.fimg_url" :alt="project.title.rendered">          
							</a>
						</div>
						<div class="col-7">            
							<div class="row right">
								<div class="col-12 ps-0">
									<a href="<?php the_permalink(); ?>">
										<span class="title">{{ project.title.rendered }}</span>               
									</a>
								</div>  
								<div class="col-12 p-0 desc">
									{{ limitChars(project.excerpt.rendered) }}
								</div>
								<div class="below_title p-0 d-flex justify-content-between align-items-center">
										<div><span class="category">{{ project._embedded['wp:term'][0][0].name }}</span></div>
										<div class="share-btn" @click="handleClick">
											<i class="fa fa-share-square-o" aria-hidden="true"></i>
										</div>
								</div>
							</div>        
						</div>
					</div>
				</div>
			</div>
		</div>
		<UniPopup ref="popup" type="share">
			<UniPopupShare @select="select"></UniPopupShare>
		</UniPopup>
	</view>
</template>

<script>
	import UniPopup from 'uni_modules/uni-popup/components/uni-popup/uni-popup.vue'
	import UniPopupShare from 'uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue'
	export default {
		components: {
			UniPopup,
			UniPopupShare
		},
		data() {
			return {
				categories: null,
				projects: null
			}
		},
		methods: {
			handleClick() {
				this.$refs.popup.open()
			},
			select({item, index}) {
				console.log('selected social platform: ', item, index)
			},
			/* toggleCategory(id) {
				if(id) {
					uni.request({
						url: this.$baseURL + '/wp/v2/posts?_embed&categories='+id,
						method: 'get'
					}).then(([err, res]) => {
						this.projects = res.data
					})					
				}else{
					uni.request({
						url: this.$baseURL + '/wp/v2/posts?_embed',
						method: 'get'
					}).then(([err, res]) => {
						this.projects = res.data
					})
				}
			}, */
			limitChars(str) {
				str = str.replace(/<\/?p[^>]*>/g, "")
				return str.substr(0, 50)+'...'
			}
		},
		onLoad(options) {
			console.log(options.cat_id)
			uni.request({
				url: this.$baseURL + '/wp/v2/posts?_embed&categories='+options.cat_id,
				method: 'get'
			}).then(([err, res]) => {
				this.projects = res.data
			})
			// get all projects details
			/* uni.request({
				url: this.$baseURL + '/wp/v2/posts?_embed',
				method: 'get'
			}).then(([err, res]) => {
				this.projects = res.data
			}) */
		}
	}
</script>

<style scoped>
/*
    Home properties
*/
#properties {
  padding-top: 34rpx;
}
#properties .vpost_wrapper {
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #616161;
  font-size: 0.8rem;
}
#properties .vpost_wrapper .img-wrapper {
  padding-right: 5px;
}

#properties .vpost_wrapper .title {
  display: block;
  font-size: 1rem;
  margin-bottom: 2px;
  color: #D6B88B;
}

#properties .vpost_wrapper .below_title {
  display: flex;
  font-size: .8rem;
  margin-top: 10px;
  align-items: center;
}
#properties .vpost_wrapper .below_title .share-btn {
  margin-right: 1em;
  font-size: 1.5em;
}
#properties .vpost_wrapper .row.right {
  padding-left: 8px;
}
#properties .vpost_wrapper .below_title .category {
  text-decoration: none;
  color: #fff;
  background-color: #D6B88B;
  border-radius: 4px;
  margin-right: 5px;
  padding: 2px 5px;
}
#properties .vpost_wrapper .desc {
  font-size: 0.8rem;
}
#properties .vpost_wrapper .desc p {
  margin-bottom: 5px;
}
#properties .vpost_wrapper .meta-data {
  padding: 0;
}
#properties .vpost_wrapper .meta-data div {
  display: inline-block;
}
#properties .vpost_wrapper .meta-data .fa {
  color: rgba(0, 0, 0, 0.3);
}
#properties .vpost_wrapper .meta-data .comments {
  margin-left: 10px;
}
#properties .categories_wrapper {
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}
#properties .categories_wrapper li {
  color: #fff;
  background-color: #D6B88B;
  border-radius: 4px;
  padding: 2px 5px;
  font-size: .9em;
}
</style>
