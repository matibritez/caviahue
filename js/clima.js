document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    const apiKey = 'd38a59054ee4f093816809b27d2fe574';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Neuquen,AR&cnt=40&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('weather-results').innerHTML = formatWeatherData(data);
        })
        .catch(error => {
            console.error('Error al obtener datos del clima:', error);
        });
}

function formatWeatherData(data) {
    try {
        if (!data || !data.list || !Array.isArray(data.list)) {
            throw new Error('Datos de clima no válidos');
        }

        const dailyData = getDailyData(data.list);

        const html = dailyData.map(item => {
            const dayOfWeek = getDayOfWeek(new Date(item.dt_txt));
            const weatherIcon = item.main.temp > 20 ? '☀️' : '☁️';
            return `
                <div class="card">
                    <i class="${weatherIcon}"></i>
                    <p>${dayOfWeek}</p>
                    <p>Temperatura: ${item.main.temp}°C</p>
                    <p>Humedad: ${item.main.humidity}%</p>
                    <p>Viento: ${item.wind.speed} m/s</p>
                </div>
            `;
        }).join('');

        return html;
    } catch (error) {
        console.error('Error al formatear datos de clima:', error);
        return 'Error al obtener datos del clima.';
    }
}

function getDailyData(list) {
    const dailyData = [];
    const uniqueDays = new Set();

    list.forEach(item => {
        const date = item.dt_txt.split(' ')[0];
        if (!uniqueDays.has(date) && dailyData.length < 7) {
            uniqueDays.add(date);
            dailyData.push(item);
        }
    });

    return dailyData;
}

function getDayOfWeek(date) {
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return daysOfWeek[date.getDay()];
}
