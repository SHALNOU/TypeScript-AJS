import CounterCart from "./CounterCart";

export default class Device implements CounterCart {
	constructor(
		readonly id: number,
		readonly name: string,
		readonly price: number,
		readonly year: number | string,
		public count = 1
	) { }

	add(): void {
		this.count += 1;
	}

	delete(): void {
		this.count -= 1;
	}
}