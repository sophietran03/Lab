// Footer - Display current year
const currentYear = new Date().getFullYear();
document.getElementById('copyrightYear').innerText = currentYear;

// Alert Button
document.getElementById('btn-alert').addEventListener('click', function () {
    alert('I did it!!!');
});

// Hover Button
const hoverButton = document.getElementById('btn-alert');

hoverButton.onmouseover = () => {
    hoverButton.innerText = 'Click me!';
};
hoverButton.onmouseleave = () => {
    hoverButton.innerText = 'Hover me!';
};

// Incrementing Button
let count = 1;
const counterButton = document.getElementById('btn-counter');
const counterText = document.getElementById('txt-counter');

counterButton.onclick = () => {
    count = count + 1;
    counterText.innerHTML = `Number: ${count}`;

    // If-else statement 
    if (count % 2 == 0) {
        counterText.classList.remove('odd');
        counterText.classList.add('even');
    } else {
        counterText.classList.remove('even');
        counterText.classList.add('odd');
    }
};

// for Loops
const numbersList = document.getElementById('numbers');
const initialValue = 1;
const stopValue = 100;

for (let i = initialValue; i <= stopValue; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
    numbersList.appendChild(listItem);
}