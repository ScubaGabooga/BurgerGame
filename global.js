let strength = 1;

let resources = [
{	
	name: "Uncooked Patties",
	location: "uncookedpatties",
	amount: 100,
	max: 100,
	perSec: 0,
	cost: 1
}, {
	name: "Cooked Patties",
	location: "cookedpatties",
	amount: 0,
	max: 100,
	perSec: 0
}, {	
	name: "Burgers",
	location: "burgers",
	amount: 0,
	max: 100,
	perSec: 0,
	cost: 5
}, {
	name: "Cash",
	location: "cash",
	amount: 0,
	max: 9999999999999999999999,
	perSec: 0
}];

let upgrades = [
{
	name: "Upgrade Grill",
	desc: "Increase click power of 'cook patty'"

}];


let heatPerClick = 100;
let requiredHeat = 500;
let currentHeat = 0;



let customerInterval = 1000; // 60 sec
let currentCustomerInterval = 0;


let currentQueueLength = 0;
let maxQueueLength = 10;



avaiableUpgrades = [];