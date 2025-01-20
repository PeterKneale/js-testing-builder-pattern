const { MeterBuilder } = require("./builders/meter_builder");
const { MeterCollectionBuilder } = require("./builders/meter_collection_builder");
const { MeterCalculator } = require("../src/meter_calculator");
describe("Meter Calculator Tests", () => {
  it("should add both active loads and ignore the inactive load", () => {
    const collection = new MeterCollectionBuilder()
      .withMeter(new MeterBuilder().withAveragedDailyLoad(1).withStatusActive().build())
      .withMeter(new MeterBuilder().withAveragedDailyLoad(5).withStatusInActive().build())
      .withMeter(new MeterBuilder().withAveragedDailyLoad(2).withStatusActive().build())
      .build();

    var result = MeterCalculator.calculateTotalAverageDailyByStatus(collection, "A");
    expect(result).toBe(3);

    var result2 = MeterCalculator.calculateTotalAverageDailyByStatus(collection, "I");
    expect(result2).toBe(5);
  });
});