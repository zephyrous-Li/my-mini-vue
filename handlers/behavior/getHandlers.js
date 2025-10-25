// 拦截器：读取行为
import track from "../../effect/track.js";
import { TrackOpTypes, isObject, RAW } from "../../utils.js";
import { reactive } from "../../reactvie.js";

const arrayInstrumentations = {};
// 对数组的includes, indexOf, lastIndexOf方法进行重写
["includes", "indexOf", "lastIndexOf"].forEach((key) => {
  arrayInstrumentations[key] = function (...args) {
    //1.正常找
    const res = Array.prototype[key].apply(this, args);
    if (res < 0 || res === false) {
      return Array.prototype[key].apply(this[RAW], args);
    }
    return res;
  };
});

export default function getHandlers(target, key) {
  console.log("拦截到了读取行为");
  if (key === RAW) {
    return target;
  }

  //收集依赖
  track(target, TrackOpTypes.GET, key);
  // 如果是在读取数组的某些方法，需要对数组方法进行重写
  if (arrayInstrumentations.hasOwnProperty(key) && Array.isArray(target)) {
    return arrayInstrumentations[key];
  }
  const result = Reflect.get(target, key);
  //如果是对象，递归处理，将对象转换为响应式对象
  if (isObject(result)) {
    return reactive(result);
  }
  return result;
}
