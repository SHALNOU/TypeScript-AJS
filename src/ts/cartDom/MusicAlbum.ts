import CounterCart from "./CounterCart";

export default class MusicAlbum implements CounterCart {
	constructor(
		readonly id: number,
		readonly name: string,
		readonly author: string,
		readonly price: number,
		readonly count = 1,
	) { }
}