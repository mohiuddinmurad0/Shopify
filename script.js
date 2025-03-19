const toggleButton = document.getElementById('toggleButton');
const dropdownContent = document.getElementById('dropdownContent');
const arrow = document.getElementById('arrow');

toggleButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('hidden');
    arrow.textContent = dropdownContent.classList.contains('hidden') ? '▼' : '▲';
});
