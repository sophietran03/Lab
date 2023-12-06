// Footer - Display current year
const currentYear = new Date().getFullYear();
document.getElementById('copyrightYear').innerText = currentYear;

// Alert Button
document.getElementById('btn-alert').addEventListener('click', function () {
    alert('I did it!!!');
});

