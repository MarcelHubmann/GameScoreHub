const fs = require("fs");
const fetch = require("node-fetch");

const apiKey = '1bf5ac0cffd4435dba635b79e8e3bca1';
const targetAmountOfGames = 9;
const API_URL = `https://api.rawg.io/api/games?key=${apiKey}&page_size=${targetAmountOfGames}`;

async function fetchAndSaveGames() {
    try {
        const response = await fetch(API_URL);
        const apiData = await response.json();

        // Nur relevante Felder extrahieren
        const loadedGames = apiData.results.map(game => ({
            name: game.name,
            released: game.released,
            rating: game.rating
        }));

        // Struktur für db.json
        const db = { games: loadedGames };

        // In Datei schreiben
        fs.writeFileSync("db.json", JSON.stringify(db, null, 2));
        console.log("Spiele erfolgreich in db.json gespeichert!");
    } catch (err) {
        console.error("Fehler beim Laden oder Speichern der Spieldaten:", err);
    }
}

fetchAndSaveGames();