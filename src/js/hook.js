/* @flow */

// Global Hooks for trigger some specific logic.
// Note that these options are not recommended, it's just for temporal uses.
// Current rendering issues are:
// - <ListPanelContainer /> doesn't updated when store updated.

let registeredFns = [];

export function register(fn:Function) {
	registeredFns.push(fn);
}

export function trigger() {
	for(let i = 0; i < registeredFns.length; i++) {
		if(typeof registeredFns[i] === "function") {
			registeredFns[i]();
		}
	}
}