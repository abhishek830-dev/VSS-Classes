/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/
var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};
const findPath = (object, path) => {
  // write logic here
    const keys = path.split(".");
    let current = object;
    for (let i = 0; i < keys.length; i++) {
        if (current[keys[i]] === undefined) {
            return undefined;
        }
        current = current[keys[i]];
    }
    return current;
    
};

console.log(findPath(obj, "a.b.c")); // 12
console.log(findPath(obj, "a.b")); // {c: 12, j: false}
console.log(findPath(obj, "a.b.d")); // undefined
console.log(findPath(obj, "a.c")); // undefined
console.log(findPath(obj, "a.b.c.d")); // undefined
console.log(findPath(obj, "a.b.c.d.e")); // undefined
console.log(findPath(obj, "a.b.j")); //false
console.log(findPath(obj, "a.b.j.k")); //undefined
console.log(findPath(obj, "a.k")); //null
// jump to the end for the solution
