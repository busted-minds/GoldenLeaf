Config.history.controls = false;

Config.history.maxStates = 1;

// Credits to DoL for the wikifier.
window.wikifier = function(widget, args, args2, args3){
	if (args3 !== undefined){
		new Wikifier(null, '<<'+ widget + ' ' + args + ' ' + args2 + ' ' + args3 + '>>');
	}
	else if(args2 !== undefined){
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
    location.reload();
};

var l = document.createElement('link');
l.rel = "icon";
l.href = "img/sidebar-icons/arousal.png";
l.type = "img/png";

document.head.appendChild(l);

window.saveUpdate = true;

//This is just a function to change an image on the go, it will be implemented when visuals get implemented in the game.

//function setCar() {
//    var img = document.getElementById("image");
//    img.src = this.value + ".png";
//    return false;
//}
//document.getElementById("CarList").onchange = setCar;

(function () {
    // disable.js, by chapel, for sugarcube 2
    // v1.0.0

    'use strict';

    var cls = 'disabled';
    var interactive = ['button', 'fieldset', 'input', 'menuitem', 'optgroup', 'option', 'select', 'textarea'];

    function getEl (self) {
        // get the first interactive element
        var $el = $(self).find(interactive.join(',')).first();
        if (!$el[0]) {
            $el = $(self).children().eq(0);
            if (!$el[0]) {
                return $(self);
            }
        }
        return $el;
    }

    function changeCls ($el) {
        if ($el.ariaIsDisabled()) {
            $el.addClass(cls);
        } else {
            $el.removeClass(cls);
        }
    }

    function disable ($el, bool) {
        if (!($el instanceof $)) {
            $el = $($el);
        }
        $el.ariaDisabled((bool === undefined) ? true : !!bool);
        changeCls($el);
        return $el;
    }

    // no need for JS API as there us a built-in jQuery extension

    Macro.add('disable', {
        tags : null,
        handler : function () {
            var bool, $wrapper = $(document.createElement('span'))
                .addClass('macro-' + this.name)
                .wiki(this.payload[0].contents);

            try {
                bool = this.args.raw.trim() ? !!Scripting.evalJavaScript(this.args.full) : undefined;
            } catch (err) {
                return this.error("bad evaluation: " + err.message);
            }

            disable(getEl($wrapper), bool);

            // output
            $(this.output).append($wrapper);
        }
    });

}());
