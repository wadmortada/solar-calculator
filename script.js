// Totall wanted Watt Daily
let loseFactor = 1.3 ;
let dailyWatt = document.getElementById('dailly_watt').value ;
let totallWantedWatt = dailyWatt * loseFactor ;
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

let submit = document.querySelector('button') ;
submit.addEventListener('click', e => {
    e.preventDefault() ;
    console.log('whats happening')
    let addSection = document.getElementById('requireds') ; 
    addSection.innerHTML += `<div class="text-center"><p>cdewcedw</p><div>
    <div class="text-center"><p>cdewcedw</p><div>
    `
    
})