const { Meter } = require("../../src/meter");
const { MeterCollection } = require("../../src/meter_collection");

class MeterCollectionBuilder {
    constructor() {
        this.meters = [];
    }

    withMeter(meter) {
        if (meter instanceof Meter) {
            this.meters.push(meter);
        } else {
            throw new Error('Only instances of Meter can be added.');
        }
        return this;
    }

    withMeters(meters) {
        meters.forEach(meter => this.withMeter(meter));
        return this;
    }

    build() {
        const collection = new MeterCollection();
        this.meters.forEach(meter => collection.addMeter(meter));
        return collection;
    }
}
module.exports = { MeterCollectionBuilder };