function getTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}

module.exports = getTime;
