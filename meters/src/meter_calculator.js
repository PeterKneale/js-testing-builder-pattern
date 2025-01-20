class MeterCalculator {
  static calculateTotalAverageDailyByStatus(meters, status) {
    const filtered = meters.findMetersByStatus(status);
    const total = filtered.reduce((sum, meter) => {
      return sum + meter.averagedDailyLoad;
    }, 0); // Initialise sum with 0
    return total;
  }
}

module.exports = { MeterCalculator };
