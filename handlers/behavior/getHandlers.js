// 拦截器：读取行为
import track from "../../effect/track.js";
import { TrackOpTypes, isObject } from "../../utils.js";
import { reactive } from "../../reactvie.js";

export default function getHandlers(target, key) {
  console.log("拦截到了读取行为");
  //收集依赖
  track(target, TrackOpTypes.GET, key);
  const result = Reflect.get(target, key);
  //如果是对象，递归处理，将对象转换为响应式对象
  if (isObject(result)) {
    return reactive(result);
  }
  return result;
}
