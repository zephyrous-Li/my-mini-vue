//工具函数
/**
 * 收集依赖的操作类型
 */
export const TrackOpTypes = {
  GET: "get",
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  HAS: "has",
  ITERATE: "iterate",
};
/**
 * 派发更新的操作类型
 */
export const TriggerOpTypes = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
};

/**
 * 特殊标识
 **/
export const RAW = Symbol("raw");

/**
 * 判断是否为对象
 * @param {*} value
 * @returns
 */
export function isObject(value) {
  return value !== null && typeof value === "object";
}

/**
 * 判断值是否改变
 * @param {*} oldValue
 * @param {*} newValue
 * @returns
 */
export function hasChanged(oldValue, newValue) {
  // 使用Object.is判断值是否改变，规避NaN ===NaN的情况
  return !Object.is(oldValue, newValue);
}
