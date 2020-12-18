// 获取 LocalStorage
const getLocalStorage = (name) => {
	try {
		const value = uni.getStorageSync(name);
		if (value) {
			return value
		}
	} catch (e) {
		// error
	}

}
// 设置 LocalStorage
const setLocalStorage = (name, value) => {
	try {
		uni.setStorageSync(name, value);
	} catch (e) {
		// error
	}
}
// 删除 LocalStorage
const removeLocalStorage = (name) => {
	try {
		uni.removeStorageSync(name);
	} catch (e) {
		// error
	}
}
// 清空本地缓存
const clearLocalStorage = () => {
	uni.clearStorage();
}
// 验证手机号码
const RegExpPhone = (value) => {
	return /^1[3|4|5|7|8][0-9]\d{8}$/.test(value)
}
//验证固话/400/手机号
const RegExpTel = (value) => {
	return /(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^1[3|4|5|7|8][0-9]\d{8}$)|(^(400)-(\d{3})-(\d{4}$))/.test(value)
}
// 验证码身份证号码
const RegExpIdCard = (value) => {
	return /^[1-9]\d{14}(\d{2}[0-9xX])?$/.test(value)
}

// 验证邮箱格式
const RegEmail = (value) => {
	return /^[-\w.]{0,64}@([a-zA-Z0-9]{1,63}\.)*[-a-zA-Z0-9]{1,63}$/.test(value)
}

export default {
	getLocalStorage,
	setLocalStorage,
	removeLocalStorage,
	clearLocalStorage,
	RegExpPhone,
	RegExpTel,
	RegExpIdCard,
	RegEmail
}
