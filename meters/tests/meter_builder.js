const { Meter } = require('../src/meter');

class MeterBuilder {
    constructor() {
        this.suffix = '11';
        this.profileName = 'NSLP';
        this.averagedDailyLoad = 10.0;
        this.dataStreamType = 'Consumption';
        this.status = 'A';
    }

    withSuffix(suffix) {
        this.suffix = suffix;
        return this;
    }

    withProfileName(profileName) {
        this.profileName = profileName;
        return this;
    }

    withAveragedDailyLoad(averagedDailyLoad) {
        this.averagedDailyLoad = averagedDailyLoad;
        return this;
    }

    withDataStreamConsumption() {
        this.dataStreamType = "Consumption";
        return this;
    }
    withDataStreamInterval() {
        this.dataStreamType = "Interval";
        return this;
    }
    
    withDataStreamCustom() {
        this.dataStreamType = "XXXXX";
        return this;
    }

    withStatusActive() {
        this.status = "A";
        return this;
    }

    withStatusInActive() {
        this.status = "I";
        return this;
    }

    build() {
        return new Meter(
            this.suffix,
            this.profileName,
            this.averagedDailyLoad,
            this.dataStreamType,
            this.status
        );
    }
}
module.exports = { MeterBuilder };