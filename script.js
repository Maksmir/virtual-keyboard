const KEYBOARD_VALUE = {
  Backquote: ['`', '~', ']', '['],
  Digit1: ['1', '!', '1', '!'],
  Digit2: ['2', '@', '2', '"'],
  Digit3: ['3', '#', '3', '№'],
  Digit4: ['4', '$', '4', '%'],
  Digit5: ['5', '%', '5', ':'],
  Digit6: ['6', '^', '6', ','],
  Digit7: ['7', '&', '7', '.'],
  Digit8: ['8', '*', '8', ';'],
  Digit9: ['9', '(', '9', '('],
  Digit0: ['0', ')', '0', ')'],
  Minus: ['-', '_', '-', '_'],
  Equal: ['=', '+', '=', '+'],
  KeyQ: ['q', 'Q', 'й', 'Й'],
  KeyW: ['w', 'W', 'ц', 'Ц'],
  KeyE: ['e', 'E', 'у', 'У'],
  KeyR: ['r', 'R', 'к', 'К'],
  KeyT: ['t', 'T', 'е', 'Е'],
  KeyY: ['y', 'Y', 'н', 'Н'],
  KeyU: ['u', 'U', 'г', 'Г'],
  KeyI: ['i', 'I', 'ш', 'Ш'],
  KeyO: ['o', 'O', 'щ', 'Щ'],
  KeyP: ['p', 'P', 'з', 'З'],
  BracketLeft: ['[', '{', 'х', 'Х'],
  BracketRight: [']', '}', 'ъ', 'Ъ'],
  Backslash: ['\\', '|', 'ё', 'Ё'],
  KeyA: ['a', 'A', 'ф', 'Ф'],
  KeyS: ['s', 'S', 'ы', 'Ы'],
  KeyD: ['d', 'D', 'в', 'В'],
  KeyF: ['f', 'F', 'а', 'А'],
  KeyG: ['g', 'G', 'п', 'П'],
  KeyH: ['h', 'H', 'р', 'Р'],
  KeyJ: ['j', 'J', 'о', 'О'],
  KeyK: ['k', 'K', 'л', 'Л'],
  KeyL: ['l', 'L', 'д', 'Д'],
  Semicolon: [';', ':', 'ж', 'Ж'],
  Quote: ['\'', '"', 'э', 'Э'],
  KeyZ: ['z', 'Z', 'я', 'Я'],
  KeyX: ['x', 'X', 'ч', 'Ч'],
  KeyC: ['c', 'C', 'с', 'С'],
  KeyV: ['v', 'V', 'м', 'М'],
  KeyB: ['b', 'B', 'и', 'И'],
  KeyN: ['n', 'N', 'т', 'Т'],
  KeyM: ['m', 'M', 'ь', 'Ь'],
  Comma: [',', '<', 'б', 'Б'],
  Period: ['.', '>', 'ю', 'Ю'],
  Slash: ['/', '?', '/', '?'],
  Space: [' ', ' ', ' ', ' '],
  Tab: ['    ', '    ', '    ', '    '],
  Enter: ['\n', '\n', '\n', '\n'],
  ArrowLeft: ['◀', '◀', '◀', '◀'],
  ArrowRight: ['▶', '▶', '▶', '▶'],
  ArrowDown: ['▼', '▼', '▼', '▼'],
  ArrowUp: ['▲', '▲', '▲', '▲'],
};

const display = document.createElement('article');
display.id = 'display';
display.className = 'display';
display.innerHTML = `<h1>RSS Виртуальная клавиатура</h1><form class="form">
<textarea id="inputDetails" class="formElement" name="details" cols="50" rows="15"
    placeholder="Text..." value=""></textarea>
</form>`;

/* global document */
/* global localStorage */

const keyBoard = document.createElement('article');
keyBoard.id = 'keyBoard';
keyBoard.className = 'keyBoard';
keyBoard.innerHTML = `<section class="topBar">
<div id="Escape" class="button service">
    <p class="left">esc</p>
</div>
</div>
<div id="touchBar" class="touchBar">
  <div class="info"><p>Для переключения языка: "shift" + "space"</p> </div>
  <div id="language" class="language"> </div>
</div>
<div id="off" class="off"></div>
</section>
<section>
<div id="Backquote" class="button dynamic"></div>
<div id="Digit1" class="button dynamic"></div>
<div id="Digit2" class="button dynamic"></div>
<div id="Digit3" class="button dynamic"></div>
<div id="Digit4" class="button dynamic"></div>
<div id="Digit5" class="button dynamic"></div>
<div id="Digit6" class="button dynamic"></div>
<div id="Digit7" class="button dynamic"></div>
<div id="Digit8" class="button dynamic"></div>
<div id="Digit9" class="button dynamic"></div>
<div id="Digit0" class="button dynamic"></div>
<div id="Minus" class="button dynamic"></div>
<div id="Equal" class="button dynamic"></div>
<div id="Backspace" class="button button1 service">
    <p class="right">delete</p>
</div>
</section>
<section>
<div id="Tab" class="button button1 service">
    <p class="left">tab</p>
</div>
<div id="KeyQ" class="button dynamic"></div>
<div id="KeyW" class="button dynamic"></div>
<div id="KeyE" class="button dynamic"></div>
<div id="KeyR" class="button dynamic"></div>
<div id="KeyT" class="button dynamic"></div>
<div id="KeyY" class="button dynamic"></div>
<div id="KeyU" class="button dynamic"></div>
<div id="KeyI" class="button dynamic"></div>
<div id="KeyO" class="button dynamic"></div>
<div id="KeyP" class="button dynamic"></div>
<div id="BracketLeft" class="button dynamic"></div>
<div id="BracketRight" class="button dynamic"></div>
<div id="Backslash" class="button dynamic"></div>
</section>
<section>
<div id="CapsLock" class="button button2 service">
    <div class="capsLock"></div>
    <p class="left">caps lock</p>
</div>
<div id="KeyA" class="button dynamic"></div>
<div id="KeyS" class="button dynamic"></div>
<div id="KeyD" class="button dynamic"></div>
<div id="KeyF" class="button dynamic"></div>
<div id="KeyG" class="button dynamic"></div>
<div id="KeyH" class="button dynamic"></div>
<div id="KeyJ" class="button dynamic"></div>
<div id="KeyK" class="button dynamic"></div>
<div id="KeyL" class="button dynamic"></div>
<div id="Semicolon" class="button dynamic"></div>
<div id="Quote" class="button dynamic"></div>
<div id="Enter" class="button button2 service">
    <p class="right">return</p>
</div>
</section>
<section>
<div id="ShiftLeft" class="button button3 service">
    <p class="left">shift</p>
</div>
<div id="KeyZ" class="button dynamic"></div>
<div id="KeyX" class="button dynamic"></div>
<div id="KeyC" class="button dynamic"></div>
<div id="KeyV" class="button dynamic"></div>
<div id="KeyB" class="button dynamic"></div>
<div id="KeyN" class="button dynamic"></div>
<div id="KeyM" class="button dynamic"></div>
<div id="Comma" class="button dynamic"></div>
<div id="Period" class="button dynamic"></div>
<div id="Slash" class="button dynamic"></div>
<div id="ShiftRight" class="button button3 service">
    <p class="right">shift</p>
</div>
</section>
<section>
<div id="fn" class="button service">
    <p class="left">fn</p>
</div>
<div id="ControlLeft" class="button service">
    <p class="left">control</p>
</div>
<div id="AltLeft" class="button service">
    <p class="left">option</p>
</div>
<div id="MetaLeft" class="button button4 service">
    <p class="left">command</p>
</div>
<div id="Space" class="button space"></div>
<div id="MetaRight" class="button button4 service">
    <p class="left">command</p>
</div>
<div id="AltRight" class="button service">
    <p class="left">option</p>
</div>
<div id="ArrowLeft" class="button buttonArrow"><p>◀</p></div>
<div class="buttonContainer">
    <div id="ArrowUp" class="button buttonArrow button5"><p>▲</p></div>
    <div id="ArrowDown" class="button buttonArrow button5"><p>▼</p></div>
</div>
<div id="ArrowRight" class="button buttonArrow"><p>▶</p></div>
</section>
<h3>Сделано в MacOS</h3>`;

document.body.prepend(keyBoard);
document.body.prepend(display);

const INPUT_DETAILS = document.getElementById('inputDetails');
const CAPS_LOCK = document.getElementById('CapsLock').querySelector('.capsLock');
const KEYBOARD = document.getElementById('keyBoard');
const capsLock = 'capsLock';
const language = 'language';

if (!localStorage[capsLock]) {
  localStorage.setItem('capsLock', 0);
}

if (!localStorage[language]) {
  localStorage.setItem('language', 0);
}

if (localStorage[capsLock] === '1') {
  CAPS_LOCK.classList.add('active');
}

document.getElementById('language').classList = localStorage[language] === '0' ? 'usa' : 'ru';

const getSymbol = () => Number(localStorage[capsLock]) + Number(localStorage[language]);

const drawKeyboardValue = () => {
  KEYBOARD.querySelectorAll('.dynamic').forEach((el) => {
    document.getElementById(el.id).innerHTML = KEYBOARD_VALUE[el.id][getSymbol()];
  });
};

const changeLanguage = () => {
  localStorage[language] = localStorage[language] === '0' ? 2 : 0;
  document.getElementById('language').classList = localStorage[language] === '0' ? 'usa' : 'ru';
  drawKeyboardValue();
};

const buttonEvent = (eventCode, eventRepeat = false) => {
  if (eventCode === 'Backspace') {
    const { value } = INPUT_DETAILS;
    INPUT_DETAILS.value = eventRepeat === true ? value.slice(0, -2) : value.slice(0, -1);
  } else if (eventCode === 'CapsLock') {
    if (localStorage[capsLock] === '0') {
      localStorage[capsLock] = 1;
      CAPS_LOCK.classList.add('active');
    } else {
      localStorage[capsLock] = 0;
      CAPS_LOCK.classList.remove('active');
    }
    drawKeyboardValue();
  }

  KEYBOARD.querySelectorAll('.button')
    .forEach((el) => {
      if (el.id === (eventCode)) {
        el.classList.add('active');
        if (KEYBOARD_VALUE[eventCode]) {
          INPUT_DETAILS.value += KEYBOARD_VALUE[eventCode][getSymbol()];
        }
      }
    });
};

drawKeyboardValue();

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.shiftKey && event.keyCode === 32) {
    changeLanguage();
  } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    localStorage[capsLock] = localStorage[capsLock] === '0' ? 1 : 0;
    drawKeyboardValue();
    buttonEvent(event.code, event.repeat);
  } else {
    buttonEvent(event.code, event.repeat);
  }
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    localStorage[capsLock] = localStorage[capsLock] === '0' ? 1 : 0;
    drawKeyboardValue();
  }
  KEYBOARD.querySelectorAll('.button')
    .forEach((el) => {
      if (el.id === (event.code)) {
        setTimeout(() => el.classList.remove('active'), 500);
      }
    });
});

KEYBOARD.addEventListener('click', (event) => {
  let id = '';
  id = event.target.id === '' ? event.target.parentNode.id : event.target.id;
  if (id === 'language') {
    changeLanguage();
  } else {
    buttonEvent(id);
    document.getElementById(id).classList.add('active');
    setTimeout(() => document.getElementById(id).classList.remove('active'), 500);
  }
});
