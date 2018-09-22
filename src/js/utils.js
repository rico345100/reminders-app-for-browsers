/* @flow */ 
let internalID = 0;

export function generateID(): number {
	return internalID++;
}