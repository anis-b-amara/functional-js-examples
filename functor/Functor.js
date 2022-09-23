// Array is a functor because it exposes a map operation
const a1 = [1, 2, 3]
const double = value => value * 2
console.log(a1.map(double)); // [2, 4, 6]