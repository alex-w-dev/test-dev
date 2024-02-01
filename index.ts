// 1 - в каком порядке отобразятся цифры?
setTimeout(() => {
  console.log(1)
  new Promise((res, rej) => {
      rej()
      console.log(2)
  }).catch(() => {
      console.log(3)
  })
  console.log(4)
})
setTimeout(() => {
  console.log(5)
})
console.log(6)
// введи цифры в порядке отображения в консоли:
// 

// 2 - запусти этот код

// 3 - реализуй функцию deepClone(obj)
// function deepClone<T = unknown>(obj: T): T {
//   // TODO implement
//   return obj;
// }
// console.log(deepClone({ a: 1 }))
// console.log(deepClone({ a: 1, b: [{ c: 1 }] }))
