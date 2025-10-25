// 入口文件，提供一个reactvieAPI，该方法接受一个对象，返回一个proxy对象
import handlers from "./handlers/index.js";
import { isObject } from "./utils.js";
// 代理对象缓存，使用WeakMap存储，key为原始对象，value为代理对象
const proxyMap = new WeakMap();

/**
 * 响应式函数，接受一个对象，返回一个proxy对象
 * @param {*} target 原始对象
 * @returns
 */
export function reactive(target) {
  // 如果目标对象不是对象，直接返回
  if (!isObject(target)) {
    return target;
  }
  // 如果目标对象已经被代理，直接返回之前的代理对象
  if (proxyMap.has(target)) {
    return proxyMap.get(target);
  }
  const proxy = new Proxy(target, handlers);
  // 将原始对象和代理对象关联起来
  proxyMap.set(target, proxy);

  return proxy;
}
