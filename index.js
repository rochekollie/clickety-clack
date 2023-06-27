import {getData, getSettings, getTime, updateObject} from './modules/data.js';
import {toggleStyle, fill, updateCellValue} from './modules/styles.js';

// **************** For debugging ** MUST BE REMOVED **** ////////////
const reloadButton = document.getElementById('reload');
reloadButton.style.backgroundColor = 'red';
reloadButton.style.color = 'white';
reloadButton.style.border = 'none';
reloadButton.style.padding = '5px';
reloadButton?.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
});
// End Debugging ******************************************* ////////

// set the current year in the footer
const copyrightElement = document.querySelector("#copyright");
const startYear = Number(copyrightElement.textContent);
const currentYear = new Date().getFullYear();
if(startYear < currentYear) copyrightElement.append(' - ' + currentYear.toString());

// Get all the setting buttons
const settingButtons = document.querySelectorAll('#settings button');

console.log(getData()); // for debugging

// Style each button when the page loads based on the saved settings
settingButtons.forEach(button => {
    const buttonParentId = button.parentElement.id.toLowerCase();
    const buttonId = button.id.toLowerCase();
    const settings = getSettings();
    if (settings[buttonParentId] === buttonId) {
        button.classList.add('selected-style');
    }

    // toggle the 'selected-style' class when the user selects/clicks a style
    button.onclick = (e) => {
        toggleStyle(button, 'selected-style');
        // update the settings with the new settings
        const settings = getSettings(); // Get the latest/default settings
        const property = e.target.parentElement.id.toLowerCase();
        settings[property] = e.target.id.toLowerCase();
        updateObject('_settings', settings);
        console.log(getData()); // for debugging
    }
});


const cells = document.querySelectorAll('#board .cell');
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        fill(cell);
        updateCellValue(cell);
        console.log(getData());
    });
});

window.addEventListener('load', () => {
    // setGameData();
});
