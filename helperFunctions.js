function isNumeric(value) {
  return !isNaN(value) && typeof value === 'number';
}

function truncateString(string, length) {
  return string.length > length ? string.substring(0, length) + '...' : string;
}

function formatDate(date) {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

function shuffleArray(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there are elements to shuffle
  while (currentIndex !== 0) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function getUrlParam(url, param) {
  const searchParams = new URL(url).searchParams;
  return searchParams.get(param);
}
function toggleClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
