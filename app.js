const ANTEILE = 20;
const TICKER = 'SPY';
const API_KEY = 'd8tdv29r01qhcnk225bgd8tdv29r01qhcnk225c0';

async function updatePortfolio() {
   try { const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${TICKER}&token=${API_KEY}`);
    const data = await response.json();

    const aktuellerKurs = data.c;
    const gesamtWert = ANTEILE * aktuellerKurs;

    document.getElementById('portfolio-value').innerText = gesamtWert.toFixed(2) + " USD";
    console.log("Depotwert erfolgreich aktualisiert: " + new Date().toLocaleTimeString());

} catch(error) {
    document.getElementById('portfolio-value').innerText = "Fehler beim Laden";
        console.error("API Fehler:", error);
}
}
updatePortfolio();
setInterval(updatePortfolio, 60000);



async function updateWeather() {
    try {
        const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=49.4889&longitude=8.4647&current=temperature_2m&timezone=Europe%2FBerlin`);
        const data = await response.json();


        const temp = data.current.temperature_2m;

        document.getElementById('weather-temp').innerText = temp + " °C";
        console.log("Wetter erfolgreich aktualisiert.");
    } catch(error) {
        document.getElementById('weather-temp').innerText = "Fehler";
        console.error("Wetter API Fehler:", error);
    }
}

updateWeather();
setInterval(updateWeather, 60000);