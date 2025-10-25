// 触发器：触发依赖更新
/**
 * 触发依赖更新
 * @param {*} target 目标对象
 * @param {*} type 操作类型
 * @param {*} key 属性名
 * @param {*} value 属性值
 **/
export default function (target, type, key, value) {
  // console.log("原始对象为", target);
  console.log(`方法${type},设置对象${key},设置值为${value}`);
}
