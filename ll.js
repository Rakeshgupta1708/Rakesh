document.getElementById('converter').addEventListener('submit', function(e) {
    e.preventDefault();

    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result;

    if (unit === 'celsius') {
        result = (temperature * 9/5) + 32;
        result = `${temperature}°C is ${result.toFixed(2)}°F`;
    } else {
        result = (temperature - 32) * 5/9;
        result = `${temperature}°F is ${result.toFixed(2)}°C`;
    }

    document.getElementById('result').textContent = result;
});
