module.exports = {
  get_emoji: () => {
    const randomNum = Math.random();
    let book = "📗";

    if (randomNum > 0.7) {
      book = "📘";
    } else if (randomNum > 0.4) {
      book = "📙";
    }

    return `<span for="img" aria-label="book">${book}</span>`;
  },
  dateFormat: date => {
    const dt = new Date(date);
    return `${dt.getMonth() + 1}-${dt.getDate()}-${dt.getFullYear()}`;
  }
};
