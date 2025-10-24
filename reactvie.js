// 入口文件，提供一个reactvieAPI，该方法接受一个对象，返回一个proxy对象
import handlers from "./handlers/index.js";
/**
 * 响应式函数，接受一个对象，返回一个proxy对象
 * @param {*} target 原始对象
 * @returns
 */
export function reactive(target) {
  const proxy = new Proxy(target, handlers);
  return proxy;
}
