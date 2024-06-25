document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1522cce8cc3dfd8201d381ded5e757c6`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
                return;
            }

            // Clear previous content
            document.getElementById('cityName').textContent = '';
            document.getElementById('temperature').textContent = '';
            document.getElementById('description').textContent = '';
            document.getElementById('humidity').textContent = '';
            document.getElementById('wind').textContent = '';

            // Update content with new data
            document.getElementById('cityName').textContent = data.name;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
            document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;

            document.getElementById('weatherInfo').style.display = 'block';
        })
        .catch(error => console.error('Error:', error));
});
