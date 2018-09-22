/* @flow */

// Global Hooks for trigger some specific logic.
// Note that these options are not recommended, it's just for temporal uses.
// Current rendering issues are:
// - <ListPanelContainer /> doesn't updated when store updated.

let registeredFns = {};

export function register(namespace:string, fn:Function) {
	if(typeof registeredFns[namespace] === 'undefined') {
		registeredFns[namespace] = [];
	}

	registeredFns[namespace].push(fn);
}

export function trigger(namespace:string) {
	if(typeof registeredFns[namespace] === 'undefined') {
		return;
	}

	for(let key in registeredFns) {
		if(key === namespace) {
			let ns = registeredFns[key];

			for(let i = 0; i < ns.length; i++) {
				if(typeof ns[i] === "function") {
					ns[i]();
				}
			}
		}
	}
}