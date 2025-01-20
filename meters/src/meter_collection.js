const { Meter } = require('./meter');

class MeterCollection {
    constructor() {
        this.meters = [];
    }

    addMeter(meter) {
        if (meter instanceof Meter) {
            this.meters.push(meter);
        } else {
            throw new Error('Only instances of Meter can be added.');
        }
    }

    removeMeter(meter) {
        this.meters = this.meters.filter(m => m !== meter);
    }

    findMetersByStatus(status) {
        return this.meters.filter(meter => meter.status === status);
    }

    count() {
        return this.meters.length;
    }
}

module.exports = {MeterCollection};