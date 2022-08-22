const lowercaseMessage = (message) => {
  return message.toLowerCase();
}

const transform = (message, transform_func) => {
  return transform_func(message);
}

module.exports = { transform, lowercaseMessage };
