# WordPress RESTful API Instructions

本文档说明了如何将WordPress RESTful API用作项目的后端数据库。

## 环境说明

本文档中演示的编程语言是Uni-app中的Vue.js和PHP。

## 前提条件

- WordPress v4.7.0+
- 设置好你的WordPress后端数据结构。
- 确保WordPress上的所有custom fields和taxonomies已启用show_in_rest。 否则，你将无法通过REST API提取这些数据。

## 使用方法

- 在**main.js**下, 设置全局`baseURL`

```javascript
Vue.prototype.$baseURL = "http://remi.net.au/gwa-app/wp-json"
```

- API调用示例：

```javascript
// call to posts data
this.$baseURL + '/wp/v2/posts'

// call to author,id,excerpt,title,link fields on posts data
this.$baseURL + '/wp/v2/posts?_fields=author,id,excerpt,title,link'

// call to posts data including other related data
this.$baseURL + '/wp/v2/posts?_embed'

// call to custom post type data
this.$baseURL + '/wp/v2/[custom_post_type]'

// filter custom post type data by taxonomy field
this.$baseURL + '/wp/v2/[custom_post_type]?_embed&[custom_taxonomy]=[custom_taxonomy_data]'

// call to posts categories
this.$baseURL + '/wp/v2/categories'

// filter categories by date order
this.$baseURL + '/wp/v2/categories?filter[orderby]=date&order=desc'

// call to custom taxonomy
this.$baseURL + '/wp/v2/[slug]'
```

- 注册你自己的routes. 参照[这里](https://developer.wordpress.org/reference/functions/register_rest_route/).

```php
add_action('rest_api_init', 'custom_action');
function custom_action() {
    register_rest_route(namespace, url, args);
}
```

```javascript
// 使用方法
this.$baseURL + `/${url}`
```

- 如果meta fields未显示在获取的posts数据中，你可以自行注册。参照[这里](https://developer.wordpress.org/reference/functions/register_rest_field/).

```php
add_action('rest_api_init', 'custom_action');
function custom_action() {
	register_rest_field(post_types, field_name, args);
}
```





