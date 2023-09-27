import CounterCart from "./CounterCart";

export default class Movie implements CounterCart {
	constructor(
		readonly id: number,
		readonly name: string,
		readonly price: number,
		readonly year: number,
		readonly country: string,
		readonly tagline: string,
		readonly genre: string[],
		readonly time: string,
		readonly author: string,
		readonly count = 1
	) { }
}