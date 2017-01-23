import { observable } from 'mobx';

export default class Accordion {
	@observable active = null;

	constructor(tabs) {
		this.tabs = [];

		tabs.forEach((tab) => {
				this.tabs.push(tab.link);
		});

		this.active = this.tabs[0];
	}

	onItemClick(event) {
		event.preventDefault();
		this.active = event.target.dataset.js;
	}
}
