function cookPatty(){
	if (resources[0].amount <= 0) {
		notify("Not Enough Uncooked Patties");
		return;
	}
	currentHeat += heatPerClick;
	if (currentHeat < requiredHeat){
		document.getElementById("currentHeat").innerHTML = currentHeat;
		return;
	}
	currentHeat -= requiredHeat;
	resources[1].amount += 1;
	resources[0].amount -= 1;
	document.getElementById("currentHeat").innerHTML = currentHeat;
	updateSingleUI(0);
	updateSingleUI(1);

}
function assembleBurger(){
	if (resources[1].amount <= 0) {
		notify("Not Enough Cooked Patties");
		return;
	}
	resources[2].amount += 1;
	resources[1].amount -= 1;
	updateSingleUI(1);
	updateSingleUI(2);
	
}

function updateSingleUI(idx) {
	document.getElementById(resources[idx].location).innerHTML = resources[idx].amount;
}

function notify(message){
	document.getElementById("notifications").innerHTML = message;
}

function updateAllUI() {
	for (i = 0; i < resources.length; i++) {
		updateSingleUI(i);
	}
}

function decreasePrice(){
	resources[2].cost -= 0.01;
}

function increasePrice(){
	resources[2].cost += 0.01;
}


const tickSpeed = 100; // 20 tick per sec
setInterval(function() {
	currentCustomerInterval+= tickSpeed;
	notify(currentCustomerInterval);
	if (currentCustomerInterval < customerInterval) return;
	currentCustomerInterval -= customerInterval;
	if (resources[2].amount <= 0) return;

	resources[2].amount -= 1;
	resources[3].amount += resources[2].cost;
	updateSingleUI(2);
	updateSingleUI(3);
	
}, tickSpeed)


function saveGame() {
	var savedGame = resources;
	localStorage.setItem("savedResources", JSON.stringify(savedGame));
}
function loadGame() {	// SCUFFED LOADING
	var savedGame = JSON.parse(localStorage.getItem("savedResources"));
	if (savedGame[0].name !== "undefined") resources = savedGame;
	updateAllUI();
}
function resetSave() {
	var confirmTest = prompt("To reset your save type: 'BATCHEST'", "");
	if (confirmTest !== "BATCHEST") return;
	localStorage.clear();
	window.location.reload(true);
}


