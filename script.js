

let submit = document.querySelector('button') ;
submit.addEventListener('click', e => {
    e.preventDefault();
    // Totall wanted Watt Daily
let loseFactor = 1.3 ;
let dailyWatt = document.getElementById('dailyWatt').value ;
let totallWantedWatt = dailyWatt * loseFactor;
// Watt From Panel
let sunLight = 5 ;
let wattFromPanel = totallWantedWatt / sunLight ;
// Needed Solar Panel
let neededPanel100 = wattFromPanel / 100 ;
let neededPanel200 = wattFromPanel / 200 ;
// battey Voltage
let sunBlackOut = 2 ;
let batteryVolt12 = (totallWantedWatt * sunBlackOut * loseFactor) / 12 ;
// Needed Battey
let neededBattery100 = batteryVolt12 / 100 ;
let neededBattery150 = batteryVolt12 / 150 ;
// solar charger 
let panel100Isc = 4.21 ; 
let panel200Isc = 8.85 ; 
let chargeController100 = neededPanel100 * panel100Isc ;
let chargeController200 = neededPanel200 * panel200Isc ;
    console.log('whats happening');
    console.log(totallWantedWatt);
   document.getElementById('wattNeeded').innerHTML = totallWantedWatt ;
   document.getElementById('100W').innerHTML = neededPanel100 ;
   document.getElementById('200W').innerHTML = neededPanel200 ;
})