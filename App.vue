<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import '@/common/css/bootstrap.min.css';
	@import '@/common/css/font-awesome.min.css';
	html, body {
		background-color: #1f1f1f;
		color: #b9b9b9;
	}
	img {
	    width: 100%;
	    max-width: 100%;
	    height: auto;
	}
	p {
	    margin: 0;
	}
	a, a:active, a:visited, a:focus {
	    text-decoration: none;
	    color: inherit;
	}
	ul {
	    margin: 0;
	    padding: 0;
	}
</style>
