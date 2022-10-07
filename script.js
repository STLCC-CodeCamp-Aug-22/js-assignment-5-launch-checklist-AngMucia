


window.addEventListener("load", function() {
    let form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        let pilotName = document.querySelector("input[name=pilotName]").value;
    let copilotName = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoMass = document.querySelector("input[name=cargoMass]").value;
    let list = document.getElementById("faultyItems")
        event.preventDefault()
    formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) 
   
    
    });
     
    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {   
    console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pickedPlanet = pickPlanet(listedPlanets)
       console.log(pickedPlanet)
       addDestinationInfo(document, pickedPlanet['name'], pickedPlanet['diameter'], pickedPlanet['star'], pickedPlanet['distance'], pickedPlanet['moons'], pickedPlanet['image'])
       
       
   })
   
});

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
