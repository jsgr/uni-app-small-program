import apis from "./apis"
import config from "@/config"
import utils from "@/utils"

/**
 * method 请求方法，默认GET
 * path 请求路径
 * params 拼接在url后面的参数 例如 /id/1
 * data 请求参数，body
 * showLoading 是否显示加载中提示，默认true
 * showToast 是否现在请求失败提示，默认true
 * */

function ajax(method = "GET", path = "", params = "", data = {}, showLoading = true, showToast = true) {
	if (showLoading) {
		uni.showLoading({
			title: '加载中...',
			mask: true
		});
	}
	// 拼接请求url
	let url = `${config.api}/${path}${params}`

	//自定义请求头信息
	let header = {
		'content-type': 'application/x-www-form-urlencoded'
	}
	// 请求头部携带token信息验证
	const token = utils.getLocalStorage("token")
	if (token) {
		header.token = token
	}
	// 基本promise封装uni.request请求方法
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			method,
			data,
			header,
			success: (res) => {
				if (res.data.status == 200) {
					// 请求状态码为200成功响应返回
					resolve(res.data.data)
				} else {
					// 弹出请求失败的提示信息
					uni.showToast({
						title: res.data.message,
						icon: 'none',
						duration: 2000
					})
				}
			},
			fail: (err) => {
				// ajax请求失败提示,超时,服务端错误等
				uni.hideLoading()
				uni.showToast({
					title: "请求失败，请重试",
					icon: "none",
					duration: 2000
				});
				reject(err)
			}
		});
	})
}
