// 拦截器：设置行为
// 触发依赖更新
import trigger from "../../effect/trigger.js";
import { TrackOpTypes } from "../../utils.js";

export default function setHandlers(target, key, value) {
  console.log("拦截到了设置行为");
  trigger(target, TrackOpTypes.SET, key, value);
  return Reflect.set(target, key, value);
}
