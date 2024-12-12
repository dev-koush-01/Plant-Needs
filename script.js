document.addEventListener("DOMContentLoaded", () => {
    const plantInput = document.getElementById("plant-input");
    const plantReport = document.getElementById("plant-report");
    const searchButton = document.getElementById("search-button");

    const samplePlantData = {
        "Rose": {
            sunlight: "Full sun",
            water: "Moderate",
            soil: "Loamy, well-drained",
            temperature: "18-24°C",
            season: "Spring, Summer"
        },
        "Tulip": {
            sunlight: "Full sun",
            water: "Moderate",
            soil: "Sandy, well-drained",
            temperature: "13-16°C",
            season: "Spring"
        },
        "Rice": {
            sunlight: "Full sun",
            water: "High",
            soil: "Clayey, well-drained",
            temperature: "20-30°C",
            season: "Monsoon"
        },
        "Wheat": {
            sunlight: "Full sun",
            water: "Moderate",
            soil: "Loamy, well-drained",
            temperature: "15-25°C",
            season: "Winter"
        },
        "Maize": {
            sunlight: "Full sun",
            water: "Moderate to high",
            soil: "Loamy, well-drained",
            temperature: "18-27°C",
            season: "Spring, Summer"
        },
        "Soybean": {
            sunlight: "Full sun",
            water: "Moderate",
            soil: "Loamy, well-drained",
            temperature: "20-30°C",
            season: "Summer"
        },
        "Potato": {
            sunlight: "Full sun",
            water: "Moderate",
            soil: "Loamy, well-drained",
            temperature: "15-20°C",
            season: "Fall, Winter"
        },
        "Tomato": {
            sunlight: "Full sun",
            water: "High",
            soil: "Loamy, well-drained",
            temperature: "18-24°C",
            season: "Summer"
        },
        "Cotton": {
            sunlight: "Full sun",
            water: "Moderate",
            soil: "Sandy, well-drained",
            temperature: "21-30°C",
            season: "Summer"
        },
        "Sugarcane": {
            sunlight: "Full sun",
            water: "High",
            soil: "Loamy, well-drained",
            temperature: "21-27°C",
            season: "Spring"
        },
        "Grapes": {
            sunlight: "Full sun",
            water: "Moderate",
            soil: "Well-drained",
            temperature: "15-30°C",
            season: "Spring, Summer"
        },
        "Apple": {
            sunlight: "Full sun",
            water: "Moderate",
            soil: "Well-drained, slightly acidic",
            temperature: "15-22°C",
            season: "Fall"
        },
        "Corn": {
            sunlight: "Full sun",
            water: "High",
            soil: "Loamy, well-drained",
            temperature: "18-24°C",
            season: "Summer"
        }
    };

    function searchPlant() {
        const plantName = plantInput.value.trim().toLowerCase();
        if (plantName === "") {
            alert("Please enter a plant name.");
            return;
        }

        const plantData = samplePlantData[Object.keys(samplePlantData).find(key => key.toLowerCase() === plantName)];

        if (plantData) {
            displayPlantReport(plantData);
        } else {
            plantReport.innerHTML = `<p>No data available for "${plantName}". Please try another plant.</p>`;
        }
        plantReport.hidden = false; // Show the report div after a search
    }

    function displayPlantReport(data) {
        plantReport.innerHTML = `
            <h2>Plant Needs</h2>
            <p><strong>Sunlight:</strong> ${data.sunlight}</p>
            <p><strong>Water:</strong> ${data.water}</p>
            <p><strong>Soil:</strong> ${data.soil}</p>
            <p><strong>Temperature:</strong> ${data.temperature}</p>
            <p><strong>Season:</strong> ${data.season}</p>
        `;
    }

    // Add event listener for both Enter key press and search button click
    plantInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default form submission behavior
            searchPlant(); // Call the search function directly
        }
    });

    searchButton.addEventListener("click", searchPlant);
});