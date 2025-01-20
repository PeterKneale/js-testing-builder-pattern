class Meter {
    constructor(suffix, profileName, averagedDailyLoad, dataStreamType, status) {
        this.suffix = suffix;
        this.profileName = profileName;
        this.averagedDailyLoad = averagedDailyLoad;
        this.dataStreamType = dataStreamType;
        this.status = status;
    }
}
module.exports = { Meter };