Config.history.controls = false;

Config.history.maxStates = 1;

// Credits to DoL for the wikifier.
window.wikifier = function(widget, args, args2){
	if(args2 !== undefined){
		new Wikifier(null, '<<' + widget + ' ' + args + ' ' + args2 + '>>');
	}
	else if(args !== undefined){
		new Wikifier(null, '<<' + widget + ' ' + args + '>>');
	}
	else if(args === undefined){
		new Wikifier(null, '<<' + widget + '>>');
	}
};

window.lastSaveVersion = 1;
Config.saves.version = 1;

Config.saves.onLoad = function(save) {
	if(Config.saves.version !== window.lastSaveVersion){
		window.saveUpdate = true;
		Config.saves.version = window.lastSaveVersion;
	}
};

window.saveUpdate = true;
//This is just a function to change an image on the go, it will be implemented when visuals get implemented in the game.

//function setCar() {
//    var img = document.getElementById("image");
//    img.src = this.value + ".png";
//    return false;
//}
//document.getElementById("CarList").onchange = setCar;