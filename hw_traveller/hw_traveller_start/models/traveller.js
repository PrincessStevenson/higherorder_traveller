const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance >= minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((runningTotal, journey) => runningTotal += journey.distance, 0);
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const ModesOfTransport = [];
//   for (const yada yada yada of this.ModesOfTransport)
//   return this.journeys.reduce((ModesOfTransport, journey) => {
//     if (this.journeys.includes(ModesOfTransport === false))  this.journey.push(ModesOfTransport)  
//      return ModesOfTransport
//    })
// };


// this one works but should be as above to include .reduce, .includes & .push
Traveller.prototype.getUniqueModesOfTransport = function () {
  modesOfTransport = this.journeys.map(journey => journey.transport);
  return modesOfTransport.filter((transport,index,map)=>map.indexOf(transport)===index)
 };


module.exports = Traveller;
