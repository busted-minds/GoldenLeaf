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
}