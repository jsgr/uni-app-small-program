export default {
	methods: {
		// 跳转路由
		navigateTo(url) {
			uni.navigateTo({
				url
			});
		},
		reLaunch(url) {
			uni.reLaunch({
				url
			});
		},
		switchTab(url) {
			uni.switchTab({
				url
			});
		},
		// 返回上一页
		goBack() {
			uni.navigateBack()
		},
		// 设置页面标题
		setNavigationBarTitle(title) {
			uni.setNavigationBarTitle({
				title
			});
		},
		// 成功提示
		showSuccessTip(msg) {
			uni.showToast({
				title: msg,
				icon: 'success'
			});
		},
		// 失败提示
		showErrorTip(msg) {
			uni.showToast({
				title: msg || '操作失败,请重试',
				icon: 'none'
			});
		},
		// 默认提示
		showTip(msg) {
			uni.showToast({
				title: msg,
				icon: 'none'
			});
		}
	}
}
