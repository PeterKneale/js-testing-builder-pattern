const { MeterBuilder } = require("./builders/meter_builder");
const { MeterCollectionBuilder } = require("./builders/meter_collection_builder");

describe("MeterCollection Tests", () => {
  it("should have the right count", () => {
    const collection = new MeterCollectionBuilder()
      .withMeter(MeterBuilder.ActiveMeter())
      .withMeter(MeterBuilder.ActiveMeter())
      .build();

    expect(collection.count()).toBe(2);
  });

  it("should filter meters by status", () => {
    const collection = new MeterCollectionBuilder()
      .withMeters([MeterBuilder.ActiveMeter(), MeterBuilder.InactiveMeter()])
      .build();

    const activeMeters = collection.findMetersByStatus("A");
    expect(activeMeters.length).toBe(1);
    expect(activeMeters[0].status).toBe("A");
  });
});
