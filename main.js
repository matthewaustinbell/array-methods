const struggleBus = [];

const addPassenger = (name,wallet, isStruggling, seat) => {
    //make a passenger object
    // add it on the bus 
    const passenger= {
        name: name,
        wallet: wallet,
        isStruggling: isStruggling
    };

    if (seat === 'back'){
        struggleBus.push(passenger);
    }
    else if (seat === 'front') {
        struggleBus.unshift(passenger);
    }
};

const unloadPassenger = (bus,seat) => {
    // remove from bus
    //return the passenger object
    if (seat === 'front') {
        // shirft return the elements at the first index 
        return bus.shift(); // 
    } else if (seat === 'back') {
        return bus.pop(); // greg
    }

};

const allAboard = (bus) => {
//loop 
//
//if the passenger can afford it we charge them
//
  const busFare = 5;
  const validPassengers = [];

bus.forEach((passenger) => {
    if (passenger.wallet >= busFare){
    passenger.wallet -= busFare;
    validPassengers.push(passenger);
    }
    
});

 
return validPassengers;

}

const printToDom =(divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint; 
};

const bustBuilder = (bus) => { 
    //build domstring from bus parameter
    let domString = '';
    for (let i = 0; i < bus.length; i++) {
    domString += `<div class="bus-seat">`;
    domString +=`<h4>${bus[i].name}</h4>`;
    domString +=`<p>${bus[i].wallet} </p>`;
    domString +=`<p>${bus[i].isStruggling}</p>`;
}
printToDom('the-bus', domString);
};

const init = () => {

    addPassenger('micheal', 3, true, 'front');
    addPassenger('zoe', 20, false, 'back');
    addPassenger('greg', 4, false, 'back');
    addPassenger('saul', 12, true, 'front');
    addPassenger('matt1', 5, true, 'front');
    addPassenger('matt2', 15, true, 'front');
    addPassenger('matt3', 3, true, 'front');
    addPassenger('sarah', 6, true, 'front');
    bustBuilder(struggleBus);
    console.log(struggleBus); 

    const firstPassenger = unloadPassenger (struggleBus, 'front');

    console.log(firstPassenger);

    const busPeople = allAboard (struggleBus);
    allAboard(struggleBus);
    bustBuilder(busPeople);

};

init();