//测试文件
import { reactive } from "./reactvie.js";

const obj = {
  a: 1,
  b: 2,
  c: {
    name: "张三",
    age: 18,
  },
};

const proxyObj = reactive(obj);
// proxyObj.a = 11;
// proxyObj.d = 11;
// delete proxyObj.a;
// "a" in proxyObj;

for (let key in proxyObj) {
}
