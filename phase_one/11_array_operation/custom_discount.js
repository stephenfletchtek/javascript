const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
]

const joinMessage = (person) => {
  return `Hi ${person.name}! ${person.discount}% off our best candies for you today!`;
}

const generateMessages = (a_list) => {
  return a_list.map(joinMessage);
}

console.log(generateMessages(namesAndDiscounts));
