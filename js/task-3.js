const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
    const clearedValue = nameInput.value.trim();
    if (clearedValue) {
        nameOutput.textContent = clearedValue;
    } else {
        nameOutput.textContent = 'Anonymous';
    }
});