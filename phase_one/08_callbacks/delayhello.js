const printHello = () => {
  console.log('Hello!');
}

const executeAfterDelay = (seconds, callBack) => {
  setTimeout(callBack, seconds * 1000)
}

executeAfterDelay(5, printHello);