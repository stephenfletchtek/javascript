const notifyByEmail = (emailaddr) => {
  return `Email sent to: ${emailaddr}`;
}

const notifyByText = (textmsg) => {
  return `Text sent to: ${textmsg}`;
}

const notify = (message, notify_func) => {
  return notify_func(message);
}

console.log(notify("duck@makers.com", notifyByEmail))
console.log(notify("07123 456789", notifyByText))
// module.exports = { notifyByEmail, notifyByText, notify };
