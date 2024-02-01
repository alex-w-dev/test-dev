// чем отличается interface от type ?

// чем отличается any от unknown ?
 
// что такое enum ?




// Задача 1
type A = { a: string };
type B = { b: string };

type AB = A & B // Нужно написть определение типа AB вместо any

const ab: AB = { a: 'a', b: 'b' };


// Задача 2
interface X {
  a: string
}
interface Z {
  b: string
  c: string
}

interface XZ {} // XZ Должен совмещать в себе все свойста X и Z кроме Z.c

const zx: XZ = { a: 'a', b: 'b' };
