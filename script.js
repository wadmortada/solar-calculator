

let submit = document.getElementById('solarForm') ;
submit.addEventListener('submit', e => {
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
   document.getElementById('wattNeeded').innerHTML = `${Math.round(totallWantedWatt)} واط في اليوم` ;
   document.getElementById('100W').innerHTML = `${Math.round(neededPanel100)} لوح` ;
   document.getElementById('200W').innerHTML =  `${Math.round(neededPanel200)} لوح` ;
   document.getElementById('100A').innerHTML =  `${Math.round(neededBattery100)} بطاربة`;
   document.getElementById('150A').innerHTML =  `${Math.round(neededBattery150)} بطارية`;
   document.getElementById('chargeAmp100').innerHTML =  `${Math.round(chargeController100)} امبير` ;
   document.getElementById('chargeAmp200').innerHTML =  `${Math.round(chargeController200)} امبير` ;
    setTimeout( () => {
        document.getElementById('dailyWatt').value = '';
    }, 2000);
})