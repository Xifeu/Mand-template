/**
 * 获取类型
 * @param {*} val
 */
export function getType (val) {
  return Object.prototype.toString.call(val).slice(8, -1)
}

/**
 * 深拷贝
 * @param {*} obj 原始对象
 * @param {*} type 空的数据对象
 */
export function deepCopy (obj, type) {
  let result
  try {
    result = JSON.parse(JSON.stringify(obj))
  } catch (error) {
    result = type
  }
  return result
}

/**
 * 判断对象值是否一致
 * @export
 * @param {*} original 原始数据
 * @param {*} present 当前值
 * @returns bool
 */
export function objectIsIdentical (original, present) {
  let flag = false
  if (JSON.stringify(original) === JSON.stringify(present)) {
    flag = true
  }
  return flag
}

/**
 * 合法手机号
 */
export function validatePhone (val) {
  const phoneRegex = /^1\d{10}$/
  return phoneRegex.test(val)
}

/**
 * 合法邮箱
 */
export function validateEmail (val) {
  const emailRegex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return emailRegex.test(val)
}
