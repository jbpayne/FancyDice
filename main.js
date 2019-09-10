
async function rollDice() {
  await stateCheck();
  const dice = [...document.querySelectorAll(".die-list")];
  const diceJSON = await fetch('https://morning-sands-18318.herokuapp.com/roll');
  const diceArray = await diceJSON.json();
  console.log(diceArray);
  const total = await diceArray.reduce((a, b) => a + b);
  dice.forEach((die, i) => {
    toggleClasses(die);
    die.dataset.roll = diceArray[i];
  });
  displayStatus(total);
}

async function stateCheck() {
  const stateJSON = await fetch('https://morning-sands-18318.herokuapp.com/state');
  const state = await stateJSON.text();
  if (state.startsWith("You")) {
    location.reload();
  }
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function displayStatus(x) {
  setTimeout(async function () {
    document.getElementById("roll").style = "opacity: 1";
    document.getElementById("roll").innerHTML = `${x}<br>`;
    const pointJSON = await fetch('https://morning-sands-18318.herokuapp.com/point');
    const point = await pointJSON.json();
    const winLoseJSON = await fetch('https://morning-sands-18318.herokuapp.com/state');
    const winLose = await winLoseJSON.text();
    document.getElementById("roll").innerHTML += winLose != "" ? winLose : +point >= 2 && x <= 12 ? `<span style="opacity: 0.4;font-size:100px">Point is ${point}</span>` : "<br>";
  }, 1000);
}

function hideNumber() {
  document.getElementById("roll").style = "opacity: 0";
}

async function initialize() {
  document.getElementById("roll").innerHTML = `<span style="opacity: 0.4;font-size:100px">Please wait... Loading</span>`;
  const point = await fetch('https://morning-sands-18318.herokuapp.com/point');
  console.log(await point.json());
  document.getElementById("dice").addEventListener("click", hideNumber);
  document.getElementById("dice").addEventListener("click", rollDice);
  document.getElementById("roll").innerHTML = `<span style="opacity: 0.4;font-size:100px">Click dice to play</span>`;
}

initialize();