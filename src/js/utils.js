/* @flow */ 
let internalID = 0;

export function GenerateID(): string {
	return (internalID + 1).toString();
}