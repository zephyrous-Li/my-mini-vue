//工具函数
/**
 * 收集依赖的操作类型
 */
export const TrackOpTypes = {
  GET: "get",
  SET: "set",
};

/**
 * 判断是否为对象
 * @param {*} value
 * @returns
 */
export function isObject(value) {
  return value !== null && typeof value === "object";
}
