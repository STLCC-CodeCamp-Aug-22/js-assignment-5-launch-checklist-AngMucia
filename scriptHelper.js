// Write your helper functions here!


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li> Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
  
    // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput === ''){
    return 'Empty'
   }
   if (isNaN(testInput)){
    return 'Not a number'
   }
   if(isNaN(testInput) === false){
    return 'Is a number'
   }

}



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let launchStatus = document.getElementById("launchStatus");
    // let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
   
    if (validateInput(pilot) === 'Empty' || validateInput(copilot)=== 'Empty' || 
    validateInput(cargoLevel) === 'Empty' || validateInput(fuelLevel) === 'Empty') {
    alert('All fields are required!')
   }else if (validateInput(pilot) === 'Is a number' || validateInput(copilot) === "Is a number"){
    alert('Numbers are not allowed for pilot or copilot name!')
   }else if(validateInput(fuelLevel) === 'Not a number' || validateInput(cargoLevel) === 'Not a number'){
    alert('Only numbers are allowed for fuel level and cargo level!')
   }else {
    pilotStatus.innerHTML = `Pilot ${pilot} ready`;
    copilotStatus.innerHTML = `Copilot ${copilot} ready`;
    list.style.visibility = "visible";
   if (fuelLevel < 10000){
    fuelStatus.innerHTML = "Fuel level too low for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch"
    launchStatus.style.color = "red";
   }
    if (cargoLevel > 10000){
    cargoStatus.innerHTML = "Too much mass for shuttle to take off";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch"
    launchStatus.style.color = "red"
   }
   if(cargoLevel < 10000 && fuelLevel > 10000){
   launchStatus.innerHTML = "Shuttle Is Ready For Launch";
   launchStatus.style.color = "green";
   fuelStatus.innerHTML = "There is enough fuel for launch";
   cargoStatus.innerHTML = "Cargo mass is low enough for launch";
   }
}


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
