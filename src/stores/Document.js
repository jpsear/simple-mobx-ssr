import { observable } from 'mobx';

class Document {
	@observable hasScrolled = false;

	constructor() {
		// document.onscroll = this.onScroll;
	}

	onScroll() {
    // Commenting for now...
    // const body = document.body;

    // if (body.scrollTop > 0) {
    //   this.hasScrolled = true;
    // }
	}
}

const DocumentStore = new Document();
export default DocumentStore;
