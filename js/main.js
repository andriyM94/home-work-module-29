// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

const clickBtn = document.getElementById('clickBtn');
const textBlock = document.getElementById('text');

clickBtn.onclick = () => {
  textBlock.hidden = true;
}

// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

const hideBtn = document.getElementById('hide');
hideBtn.onclick = () => {
  hideBtn.hidden = true;
}
// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

// Вибираємо головний список
const ownerList = document.getElementById('ownerList');

// функція яка візуально помічає вузол який було приховано (звернуто)
const showMore = function (isShowing, element) {
  if(!element) {
    return;
  }

  if(isShowing) {
    element.insertAdjacentHTML('beforeend', '<span class="showMore"></span>');
    return;
  }

  const spanEl = element.querySelector('.showMore');
  element.removeChild(spanEl);

  return;
}

ownerList.onclick = (event) => {
  // вибираємо поточний елемент на який ми клікнули
  const currentElement = event.target;
 
  // якщо ми клікнули поза спаном то нічого не робимо
  if (currentElement.tagName != 'SPAN') {
    return;
  }

  // вибираємо наступний елемент біля спана
  const nextElement = currentElement.nextElementSibling;

  // якщо елемент поряд існує і він є списком то приховуємо його або показуємо якщо він прихований
  if(nextElement && nextElement.tagName === "OL") {
    nextElement.hidden = nextElement.hidden ? false : true;

    // показуємо візуально що в нас є приховані елементи
    showMore(nextElement.hidden, currentElement);
  }
}