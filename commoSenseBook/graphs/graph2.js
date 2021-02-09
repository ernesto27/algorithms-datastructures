class City {
    constructor(name) {
        this.name = name;
        this.routes = {};
    }

    addRoute(city, price) {
        this.routes[city] = price;
    }
}

function dijkstra(startingCity, finalDestination) {
    let cheapestPricesTable = {};
    let cheapestPreviousStopoverCityTable = {};

    let unvisitedCities = [];
    let visitedCities = {};

    cheapestPricesTable[startingCity.name] = 0;
    let currentCity = startingCity;

    while (currentCity) {
        visitedCities[currentCity.name] = true;
        
        let indexToRemove = unvisitedCities.indexOf(currentCity);
        if (index > -1) {
            unvisitedCities.splice(indexToRemove, 1);
        }

        for ( let prop in currentCity.routes) {
            if (visitedCities[prop])
        }
    }


}



var atlanta = new City('Atlanta');
var boston = new City('Boston');
var chicago = new City('Chicago');
var denver = new City('Denver');
var elPaso = new City('El paso');

atlanta.addRoute(boston, 100);
atlanta.addRoute(denver, 160);
boston.addRoute(chicago, 120);
boston.addRoute(denver, 180);
chicago.addRoute(elPaso, 80);
denver.addRoute(chicago, 40);
denver.addRoute(elPaso, 140);



















