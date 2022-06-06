import { convertLocalSchedule } from "../../src/lib/cycle";

describe("convertLocalSchedule", () => {
  it("when minute", () => {
    const schedule = { cycle_type: "hour", minute: 15, hour: null };
    expect(convertLocalSchedule(schedule)).toEqual({});
  });
});
