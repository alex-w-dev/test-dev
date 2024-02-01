
// что такое дектораторы? какие знаешь?









// Задача 4
// напиши декотооаро синглтон

function Singleton<T extends new (...args: any[]) => any>(ctr: T): T {
  return ctr
}

// @ts-ignore
@Singleton
class SingletoneClass {}

const class1 = new SingletoneClass();
const class2 = new SingletoneClass();

console.log(class1 === class2) // должно быть true