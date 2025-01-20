const { MeterBuilder } = require('./meter_builder');

describe('Meter Builder Tests', () => {
    it('should create a valid Meter with default values', () => {
        const meter = new MeterBuilder().build();

        expect(meter.suffix).toBe('11');
        expect(meter.profileName).toBe('NSLP');
        expect(meter.averagedDailyLoad).toBe(10.0);
        expect(meter.dataStreamType).toBe('Consumption');
        expect(meter.status).toBe('A');
    });
});