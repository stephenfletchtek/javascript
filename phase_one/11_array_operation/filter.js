const checklength = (str) => {
  if (str.length <= 10) {
    return true;
  } else {
    return false;
  }
}

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd'
]

const filterLongNumbers = (to_filter) => {
  return to_filter.filter(checklength);
}

console.log(filterLongNumbers(numbers));
console.log(filterLongNumbers(['4763687363', '7867867862']));
