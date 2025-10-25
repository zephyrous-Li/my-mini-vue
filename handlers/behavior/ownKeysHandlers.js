// 拦截器：遍历行为
import { TrackOpTypes } from "../../utils.js";
import track from "../../effect/track.js";

export default function (target) {
  console.log("拦截到了遍历行为");

  // 触发依赖收集
  track(target, TrackOpTypes.ITERATE);
  const result = Reflect.ownKeys(target);
  return result;
}
