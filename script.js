document.addEventListener("DOMContentLoaded", () => {
    const plantInput = document.getElementById("plant-input");
    const plantReport = document.getElementById("plant-report");

    const samplePlantData = {
        "Rose": {
            sunlight: "Full sun",
            water: "Moderate",
            soil: "Loamy, well-drained",
            temperature: "18-24°C"
        },
        "Tulip": {
            sunlight: "Full sun",
            water: "Moderate",
            soil: "Sandy, well-drained",
            temperature: "13-16°C"
        },
        "Rice": {
            sunlight: "Full sun",
            water: "High",
            soil: "Clayey, well-drained",
            temperature: "20-30°C"
        },
        "Wheat": {
            sunlight: "Full sun",
            water: "Moderate",
            soil: "Loamy, well-drained",
            temperature: "15-25°C"
        },
        "Maize": {
            sunlight: "Full sun",
            water: "Moderate to high",
            soil: "Loamy, well-drained",
            temperature: "18-27°C"
        },
        "Soybean": {
            sunlight: "Full sun",
            water: "Moderate",
            soil: "Loamy, well-drained",
            temperature: "20-30°C"
        },
        "Potato": {
            sunlight: "Full sun",
            water: "Moderate",
            soil: "Loamy, well-drained",
            temperature: "15-20°C"
        },
        "Tomato": {
            sunlight: "Full sun",
            water: "High",
            soil: "Loamy, well-drained",
            temperature: "18-24°C"
        },
        "Cotton": {
            sunlight: "Full sun",
            water: "Moderate",
            soil: "Sandy, well-drained",
            temperature: "21-30°C"
        },
        "Sugarcane": {
            sunlight: "Full sun",
            water: "High",
            soil: "Loamy, well-drained",
            temperature: "21-27°C"
        },
        "Grapes": {
            sunlight: "Full sun",
            water: "Moderate",
            soil: "Well-drained",
            temperature: "15-30°C"
        },
        "Apple": {
            sunlight: "Full sun",
            water: "Moderate",
            soil: "Well-drained, slightly acidic",
            temperature: "15-22°C"
        },
        "Corn": {
            sunlight: "Full sun",
            water: "High",
            soil: "Loamy, well-drained",
            temperature: "18-24°C"
        }
    };
    
    

    window.searchPlant = function() {
        const plantName = plantInput.value.trim();
        if (plantName === "") {
            alert("Please enter a plant name.");
            return;
        }

        const plantData = samplePlantData[plantName];
        
        if (plantData) {
            displayPlantReport(plantData);
        } else {
            plantReport.innerHTML = `<p>No data available for "${plantName}". Please try another plant.</p>`;
        }
    };

    function displayPlantReport(data) {
        plantReport.innerHTML = `
            <h2>Plant Needs</h2>
            <p><strong>Sunlight:</strong> ${data.sunlight}</p>
            <p><strong>Water:</strong> ${data.water}</p>
            <p><strong>Soil:</strong> ${data.soil}</p>
            <p><strong>Temperature:</strong> ${data.temperature}</p>
        `;
    }
});
