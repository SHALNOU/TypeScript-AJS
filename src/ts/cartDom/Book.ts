import CounterCart from "./CounterCart";

export default class Book implements CounterCart {
	constructor(
		readonly id: number,
		readonly name: string,
		readonly author: string,
		readonly price: number,
		readonly pages: number,
		readonly count = 1
	) { }
}