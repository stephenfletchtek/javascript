const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let accumulator = 0
nums.forEach((num) => {
  accumulator += num;
})

console.log(accumulator);
