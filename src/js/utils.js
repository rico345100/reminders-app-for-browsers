/* @flow */ 
class RandomGenerator {
	// Type Defs
	internalID: number;

	// Variable Defs
	internalID = 0

	generateNumber():number {
		return this.internalID++;
	}

	generateHexColor():string {
		return '#'+Math.floor(Math.random()*16777215).toString(16);
	}
}

export {
	RandomGenerator
};