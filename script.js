const all = document.querySelector("#all");
const electric = document.querySelector("#electric");
const two = document.querySelector("#mintwo");
const elecJonas = document.querySelector("#elec_jonas");
const rug = document.querySelector("#rugbrod");
const ulPointer = document.querySelector("ul");
const newInner = `<li><strong>Type</strong></li>
<li><strong>Fuel</strong></li>
<li><strong>Passengers</strong></li>
<li><strong>Stops</strong></li>
<li><strong>OwnedBy</strong></li>
<li><strong>Electric</strong></li>
<li><strong>Tandem</strong></li>`;

const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

window.addEventListener("load", showAll);

function showAll() {
  ulPointer.innerHTML = "";
  ulPointer.innerHTML = newInner;
  showTheseVehicles(vehicles);
}

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;
    if (each.fuel === undefined) {
      ulPointer.innerHTML += `<li>-</li>`;
    } else {
      ulPointer.innerHTML += `<li>${each.fuel}</li>`;
    }

    ulPointer.innerHTML += `<li>${each.passengers}</li>`;

    if (each.stops === undefined) {
      ulPointer.innerHTML += `<li>-</li>`;
    } else {
      ulPointer.innerHTML += `<li>${each.stops}</li>`;
    }
    if (each.ownedBy === undefined) {
      ulPointer.innerHTML += `<li>-</li>`;
    } else {
      ulPointer.innerHTML += `<li>${each.ownedBy}</li>`;
    }
    if (each.isElectric === undefined) {
      ulPointer.innerHTML += `<li>-</li>`;
    } else {
      ulPointer.innerHTML += `<li>x</li>`;
    }
    if (each.isTandem === undefined) {
      ulPointer.innerHTML += `<li>-</li>`;
    } else {
      ulPointer.innerHTML += `<li>x</li>`;
    }
  });

  all.addEventListener("click", showAll);
  electric.addEventListener("click", showElectrics);
  two.addEventListener("click", showTwo);
  elecJonas.addEventListener("click", showElecJonas);
  rug.addEventListener("click", showRug);
}

function showElectrics() {
  const onlyElectric = vehicles.filter(isElectric);
  ulPointer.innerHTML = "";
  ulPointer.innerHTML = newInner;
  showTheseVehicles(onlyElectric);

  function isElectric(vehicle) {
    if (vehicle.isElectric === true) {
      return true;
    } else {
      return false;
    }
  }
}

function showTwo() {
  const twoOrMore = vehicles.filter(haveTwoOrMore);
  ulPointer.innerHTML = "";
  ulPointer.innerHTML = newInner;
  showTheseVehicles(twoOrMore);

  function haveTwoOrMore(vehicle) {
    if (vehicle.passengers >= 2) {
      return true;
    } else {
      return false;
    }
  }
}

function showElecJonas() {
  const jonasElecVeh = vehicles.filter(jonasElVe);
  ulPointer.innerHTML = "";
  ulPointer.innerHTML = newInner;
  showTheseVehicles(jonasElecVeh);

  function jonasElVe(vehicle) {
    if (vehicle.isElectric === true && vehicle.ownedBy === "Jonas") {
      return true;
    } else {
      return false;
    }
  }
}

function showRug() {
  const rugWithSpace = vehicles.filter(rugVehWithSpace);
  ulPointer.innerHTML = "";
  ulPointer.innerHTML = newInner;
  showTheseVehicles(rugWithSpace);

  function rugVehWithSpace(vehicle) {
    if (vehicle.fuel === "Rugbrød" && vehicle.passengers > 0) {
      return true;
    } else {
      return false;
    }
  }
}
