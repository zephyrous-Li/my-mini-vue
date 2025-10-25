// 拦截器：判断属性是否存在
import { TrackOpTypes } from "../../utils.js";
import track from "../../effect/track.js";

export default function (target, key) {
  console.log("拦截到了判断属性是否存在行为");
  const result = Reflect.has(target, key);
  track(target, TrackOpTypes.HAS, key);
  return result;
}
