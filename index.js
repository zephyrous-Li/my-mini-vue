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

// const proxyObj = reactive(obj);

const arr = [1, obj, 2, 3];
const proxyArr = reactive(arr);

// 测试读取行为
// console.log(proxyArr[0]); // 1
// console.log(proxyArr.length); // 4
// for (let key in proxyArr) {
//   console.log(proxyArr[key]);
// }
// for (let i = 0; i < proxyArr.length; i++) {
//   console.log(proxyArr[i]);
// }
// proxyArr.includes(1);
// proxyArr.indexOf(1);
// console.log(proxyArr.includes(obj)); // true
// console.log(proxyArr.lastIndexOf(obj)); //1

// 测试写入行为
// proxyArr[0] = 100;
// console.log(proxyArr[0]); // 100

// proxyArr[1].a = 1000;
// console.log(proxyArr[1].a); // 1000

// proxyArr[2] = 200;
// console.log(proxyArr[2]); // 200

// proxyArr[3] = 300;
// console.log(proxyArr[3]); // 300
