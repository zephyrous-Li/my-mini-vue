// 拦截器：删除属性
import trigger from "../../effect/trigger.js";
import { TriggerOpTypes } from "../../utils.js";
export default function deleteHandlers(target, key) {
  console.log("拦截到了删除行为");
  //   判断目标对象是否有需要删除的属性
  const hadKey = target.hasOwnProperty(key);
  const result = Reflect.deleteProperty(target, key);
  if (hadKey && result) {
    trigger(target, TriggerOpTypes.DELETE, key);
  }
  return result;
}
