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

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.reduce((ModesOfTransport, journey) => {
    if (!ModesOfTransport.includes(journey.transport)){
      ModesOfTransport.push(journey.transport)
    }

  return ModesOfTransport

   }, [])
};





module.exports = Traveller;
