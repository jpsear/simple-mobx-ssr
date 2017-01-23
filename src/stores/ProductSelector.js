import { computed, observable } from 'mobx';

export default class ProductSelector {
    @observable capacity = 1;
    @observable colour = 1;

    constructor(products, copy) {
        this.products = products;
        this.copy = copy;
        this.capacities = this.getCapacities(products);
        this.colours = this.getColours(products);

        this.colour = this.colours[0].colour;
        this.capacity = this.capacities[0];
    }

    getCapacities(products) {
        let capacities = [];

        products.forEach((product) => {
            if (!capacities.includes(product.storage)) {
                capacities.push(product.storage);
            }
        });

        return capacities;
    }

    getColours(products) {
        let _colours = [];
        let colours = [];

        products.forEach((product) => {
            if (!_colours.includes(product.colour)) {
                let _obj = {};
                _obj['colour'] = product.colour;
                _obj['colour_hex'] = product['colour_hex'];

                _colours.push(product.colour);
                colours.push(_obj);
            }
        });

        return colours;
    }

    handleCapacityClick(event) {
        this.capacity = event.target.dataset.value;
    }

    handleColourClick(event) {
        this.colour = event.target.dataset.value;
    }

    @computed get product() {
        let _product = {};

        this.products.forEach((product) => {
            if (product.storage == this.capacity && product.colour == this.colour) {
                _product = product;
            }
        });

        return _product;
    }

}