const { MeterBuilder } = require("./builders/meter_builder");
const { MeterCollectionBuilder } = require("./builders/meter_collection_builder");
const { MeterCalculator } = require("../src/meter_calculator");
describe("Meter Calculator Tests", () => {
  it("should total the loads mamtching the status", () => {
    const collection = new MeterCollectionBuilder()
      .withMeter(new MeterBuilder().withAveragedDailyLoad(1).withStatusActive().build())
      .withMeter(new MeterBuilder().withAveragedDailyLoad(5).withStatusInActive().build())
      .withMeter(new MeterBuilder().withAveragedDailyLoad(2).withStatusActive().build())
      .build();

    var activeLoad = MeterCalculator.calculateTotalAverageDailyByStatus(collection, "A");
    expect(activeLoad).toBe(3);

    var inactiveLoad = MeterCalculator.calculateTotalAverageDailyByStatus(collection, "I");
    expect(inactiveLoad).toBe(5);
  });
});