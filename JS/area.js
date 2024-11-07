fetch('JSON/areaData.json')
.then(response => response.json())
.then(data => {
    const areaSelect = document.getElementById('areaSelect');
    data.ilceler.forEach(ilce => {
        const option = document.createElement('option');
        option.value = ilce;
        option.textContent = ilce;
        areaSelect.appendChild(option);
    });
})
.catch(error => console.error('Error loading the JSON:', error));