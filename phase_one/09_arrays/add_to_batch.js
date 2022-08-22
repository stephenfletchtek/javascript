const addToBatch = (ary, to_add) => {
  if (ary.length < 5) {
    return ary.concat(to_add);
  } else {
    return ary;
  }
}

console.log(addToBatch([1], 3))
console.log(addToBatch([1, 2, 3], 4))
console.log(addToBatch([], 8))
console.log(addToBatch([1, 2, 3, 4, 5, 6], 7))
console.log(addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10))
