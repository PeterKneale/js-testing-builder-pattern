class MeterCalculator {
    static calculateTotalAverageDailyByStatus(meters, status) {
        const activeMeters = meters.filter(meter => meter.Status === status);
        const totalLoad = activeMeters.reduce((sum, meter) => sum + parseFloat(meter.AveragedDailyLoad));
        return totalLoad;
    }
}

module.exports = MeterCalculator;