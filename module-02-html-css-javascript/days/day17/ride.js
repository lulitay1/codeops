'use strict';

// --- PART 1: Function Basics --
// TODO: Write sumDistances
const sumDistances = (...distances) => {
    let sum=0;
    for (const p of distances){
        sum += p;
    }
        return sum;
};
// TODO: Write calculateBaseFare
const calculateBaseFare = (totalDistance, rate=15) => {
    let baseFare;
    baseFare= totalDistance * rate;
    return baseFare;
};
// TODO: Write formatCurrency
const formatCurrency =(amount)=>{

    return `${amount. toFixed(2)} ETB`;
};
// --- PART 2: Higher-Order Functions --
// TODO: Write makeSurgeMultiplier
function makeSurgeMultiplier(surgeRate) {
    return (baseFare) => baseFare*surgeRate;
}
// --- PART 3: Closures --
function makeDriverTracker(){
        let tripsCompleted=0
        return { 
            recordTrip(){tripsCompleted++;},
            getTrips(){ return tripsCompleted;},
        }
}
// --- PART 4: Composition & Callbacks --
function generateReceipt(distancesArray, surgeFn, tracker, onReceiptReady) {
    
    tracker.recordTrip();

    const totalDistance = sumDistances(...distancesArray);

    const baseFare = calculateBaseFare(totalDistance);
    
    const actualFare = surgeFn(baseFare);

    const formattedFare = formatCurrency(actualFare);

    const receipt = `Trip #${tracker.getTrips()}: Total Fare is ${formattedFare}.`;

    onReceiptReady(receipt);
}
// --- TESTING  --
// 1. Setup our driver tracker and regular/rush hour pricing
const tayesTracker = makeDriverTracker();
const standardPricing = makeSurgeMultiplier(1.0);
const rushHourPricing = makeSurgeMultiplier(1.5);
// 2. A simple callback function for logging
const printToConsole = (message) => console.log(message);
// 3. Process Ride 1 (Standard pricing)

generateReceipt([2, 3], standardPricing, tayesTracker, printToConsole); 
// Expected Output: "Trip #1: Total Fare is 75.00 ETB."
// 5 * 15 * 1.0 = 75

generateReceipt([10], rushHourPricing, tayesTracker, printToConsole);
// Expected Output: "Trip #2: Total Fare is 225.00 ETB." ```