const notifyByEmail = (emailaddr) => {
  return `Email sent to: ${emailaddr}`;
}

const notifyByText = (textmsg) => {
  return `Text sent to: ${textmsg}`;
}

const notify = (message, notify_func) => {
  return notify_func(message);
}

module.exports = { notifyByEmail, notifyByText, notify };
