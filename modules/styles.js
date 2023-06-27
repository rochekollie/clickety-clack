const xFillValue = '<svg class="side-icon cross" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960"\n' +
  '                     width="48">\n' +
  '                    <path d="m249-186-63-63 231-231-231-230 63-64 231 230 231-230 63 64-230 230 230 231-63 63-231-230-231 230Z"/>\n' +
  '                </svg>';
const oFillValue = '<svg class="side-icon circle" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960"\n' +
  '                     width="48">\n' +
  '                    <path d="M479.679-59q-86.319 0-163.646-32.604-77.328-32.603-134.577-89.852-57.249-57.249-89.852-134.57Q59-393.346 59-479.862q0-87.41 32.662-164.275 32.663-76.865 90.203-134.412 57.54-57.547 134.411-90.499Q393.147-902 479.336-902q87.55 0 164.885 32.858 77.334 32.858 134.56 90.257 57.225 57.399 90.222 134.514Q902-567.257 902-479.458q0 86.734-32.952 163.382-32.952 76.648-90.499 134.2-57.547 57.551-134.421 90.214Q567.255-59 479.679-59Zm.092-91q136.742 0 233.485-96.387Q810-342.773 810-479.771q0-136.742-96.515-233.485Q616.971-810 479.729-810q-136.242 0-232.985 96.515Q150-616.971 150-479.729q0 136.242 96.387 232.985Q342.773-150 479.771-150ZM480-480Z"/>\n' +
  '                </svg>';

/**
 * Fills the cell with the X icon
 * @param cell - the cell to fill
 * @returns {void}
 * @example fillX(cell);
 */
const fillX = (cell) => {
  cell.innerHTML = '<svg class="side-icon cross" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960"\n' +
      '                     width="48">\n' +
      '                    <path d="m249-186-63-63 231-231-231-230 63-64 231 230 231-230 63 64-230 230 230 231-63 63-231-230-231 230Z"/>\n' +
      '                </svg>';
}

/**
 * Fills the cell with the O icon
 * @param cell - the cell to fill
 * @returns {void}
 * @example fillO(cell);
 */
const fillO = (cell) => {
  cell.innerHTML = '<svg class="side-icon circle" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960"\n' +
      '                     width="48">\n' +
      '                    <path d="M479.679-59q-86.319 0-163.646-32.604-77.328-32.603-134.577-89.852-57.249-57.249-89.852-134.57Q59-393.346 59-479.862q0-87.41 32.662-164.275 32.663-76.865 90.203-134.412 57.54-57.547 134.411-90.499Q393.147-902 479.336-902q87.55 0 164.885 32.858 77.334 32.858 134.56 90.257 57.225 57.399 90.222 134.514Q902-567.257 902-479.458q0 86.734-32.952 163.382-32.952 76.648-90.499 134.2-57.547 57.551-134.421 90.214Q567.255-59 479.679-59Zm.092-91q136.742 0 233.485-96.387Q810-342.773 810-479.771q0-136.742-96.515-233.485Q616.971-810 479.729-810q-136.242 0-232.985 96.515Q150-616.971 150-479.729q0 136.242 96.387 232.985Q342.773-150 479.771-150ZM480-480Z"/>\n' +
      '                </svg>';
}

/**
* Toggles the class of an element and removes the class from the other children of the element's parent
* @param {HTMLElement} element - the element to toggle the class on
* @param {string} className - the class to toggle
* @returns {void}
* @example toggleElementStyle(e.target, 'selected-style');
* */
export const toggleStyle = (element, className) => {
  // get all children of element's parent to ensure only one child has the class
  const children = element.parentElement.children;
  for (const child of children) {
    if (child.classList.contains(className)) {
      child.classList.remove(className);
    }
  }

  // toggle class on element
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

export const toggleElementClass = (element, className) => {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

/**
 * Disable a cell from being clicked after it has been filled/clicked
 * @param cell - the cell to disable
 * @returns {void}
 * @example disableCell(cell);
 * */
export const disableCell = (cell) => {
  cell.classList.add('disabled');
  cell.removeEventListener('click', () => {
    fill(cell);
  });
}

export const updateCellValue = (cell) => {
  const appData = getData();
  const cells = appData.board.cells;
  const cellIndex = parseInt(cell.id);
  cells[cellIndex].value = appData.board.previousFilledCell;
  saveData(appData);
}



/**
 * Plays a turn for the given side
 * @param cell - the cell to play the turn on
 * @returns {void}
 * @example fill('x');
 */
export const fill = (cell) => {
  const appData = getData();
  const nextSide = appData.game.nextSide;
  console.log(nextSide);
  // if (nextSide === 'x') {
  //     fillX(cell);
  //     appData.board.previousFilledCell = 'x';
  //     appData.board.previousFilledCellIndex = cell.id;
  //     appData.game.nextSide = 'o';
  //     saveData(appData);
  // } else if (nextSide === 'o') {
  //     fillO(cell);
  //     appData.board.previousFilledCell = 'o';
  //     appData.board.previousFilledCellIndex = cell.id;
  //     appData.game.nextSide = 'x';
  //     saveData(appData);
  // } else {
  //     throw new Error('Invalid side');
  // }

  //disableCell(cell); // disable the cell from being clicked again
}

// Path: modules/styles.js
