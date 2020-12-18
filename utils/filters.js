// 性别
let sex = (val) => {
  if (val == 0) {
  	return '未设置';
  }
  if (val == 1) {
  	return '男';
  }
  if (val == 2) {
  	return '女';
  }
  if (val == 3) {
  	return '保密';
  }
}

export {
  sex
}
