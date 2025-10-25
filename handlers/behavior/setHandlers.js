// 拦截器：设置行为
import trigger from "../../effect/trigger.js";
import { TriggerOpTypes, hasChanged } from "../../utils.js";

export default function setHandlers(target, key, value) {
  console.log("拦截到了设置行为");
  // 关于具体操作类型进行判断
  // 如果属性不存在，说明是新增属性
  const type = target.hasOwnProperty(key)
    ? TriggerOpTypes.SET
    : TriggerOpTypes.ADD;
  const oldValue = target[key];
  // 先设置属性值
  const result = Reflect.set(target, key, value);
  // 判断是否需要触发依赖更新
  if (hasChanged(oldValue, value)) {
    trigger(target, type, key, value);
  }
  return result;
}
