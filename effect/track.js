// 收集器：收集依赖
/**
 * @param {*} target 目标对象
 * @param {*} type 操作类型
 * @param {*} key 属性名
 **/
export default function (target, type, key) {
  console.log("原始对象为", target);
  console.log(`方法${type},读取对象${key}`);
}
