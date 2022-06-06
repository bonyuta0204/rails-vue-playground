/*
 * 頻度設定関連のutil
 */
import * as momentTZ from "moment-timezone";

const timeZone = "Asia/Tokyo";

type Cycle = {
  cycle_type: string;
  minute: number;
  hour: number;
  day_of_week: number;
  day_of_month: number;
};

/*
 * 画面表示用のラベル付きの頻度設定
 */
export type CycleWithLabel = {
  [K in keyof Required<Cycle>]: { label: string; value: Required<Cycle>[K] };
};

/**
 * デフォルトのサイクル
 */
export const defaultCycle: Cycle = {
  cycle_type: "daily",
  day_of_week: 0,
  day_of_month: 1,
  hour: 0,
  minute: 0,
};

/*
 * 数字を2桁でゼロパディングする
 */
export function padStartWithZero(num: number) {
  return ("0" + num).slice(-2);
}

/*
 * 頻度設定を画面表示用のラベル付きの型に変換する
 */
export function createCycleWithLabel(cycle: Cycle): CycleWithLabel {
  return {
    cycle_type: {
      label: cycleTypeLabel(cycle.cycle_type),
      value: cycle.cycle_type,
    },
    minute: { label: padStartWithZero(cycle.minute), value: cycle.minute },
    hour: { label: padStartWithZero(cycle.hour), value: cycle.hour },
    day_of_week: {
      label: weekLabel(cycle.day_of_week ?? 0),
      value: cycle.day_of_week ?? 0,
    },
    day_of_month: {
      label: padStartWithZero(cycle.day_of_month ?? 0),
      value: cycle.day_of_month ?? 0,
    },
  };
}

/*
 * 頻度のタイプのラベルを返却する
 */
function cycleTypeLabel(cycle_type: Cycle["cycle_type"]) {
  return { hourly: "毎時", daily: "毎日", weekly: "毎週", monthly: "毎月" }[
    cycle_type
  ];
}

/*
 * 曜日のラベルを返却する
 */
function weekLabel(week: number) {
  return ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"][
    week
  ];
}

/*
 * 12:45のような時分のラベルを返却する
 */
function hhmmLabel(hour: Cycle["hour"], minute: Cycle["minute"]): string {
  return `${padStartWithZero(hour)}:${padStartWithZero(minute)}`;
}

function mmLabel(minute: Cycle["minute"]): string {
  return `${padStartWithZero(minute)}`;
}

/*
 * 周期設定のラベルを返却する
 */
export function cycleLabel(cycle: Cycle): string {
  const typeLabel = cycleTypeLabel(cycle.cycle_type);

  switch (cycle.cycle_type) {
    case "hourly":
      return `${typeLabel} ${mmLabel(cycle.minute)}分`;
    case "weekly":
      return `${typeLabel} ${weekLabel(cycle.day_of_week ?? 0)} ${hhmmLabel(
        cycle.hour,
        cycle.minute
      )}`;
    case "daily":
      return `${typeLabel} ${hhmmLabel(cycle.hour, cycle.minute)}`;
    case "monthly":
      return `${typeLabel} ${cycle.day_of_month}日 ${hhmmLabel(
        cycle.hour,
        cycle.minute
      )}`;
  }
}

/**
 * ローカル時間スケジュール設定をUTCに変換する
 */
export const convertUtcSchedule = (schedule: Required<Cycle>): Cycle => {
  const utcDate = splitExtractionDate(getExtractionDate(schedule, "utc"));
  const hour = utcDate.hour;
  const dayOfMonth = utcDate.date;
  let dayOfWeek = schedule.day_of_week;

  // タイプごとに値の補正をかける
  switch (schedule.cycle_type) {
    case "weekly":
      if (schedule.hour - hour < 0) {
        // 曜日がマイナスの場合、土曜日(6)を設定
        dayOfWeek =
          schedule.day_of_week - 1 >= 0 ? schedule.day_of_week - 1 : 6;
      }
      break;
    default:
      break;
  }

  return Object.assign({}, schedule, {
    hour,
    day_of_week: dayOfWeek,
    day_of_month: dayOfMonth,
  });
};

/**
 * UTCスケジュール設定をローカル時間に変換する
 */
export const convertLocalSchedule = (schedule: Required<Cycle>): Cycle => {
  const utcDate = splitExtractionDate(getExtractionDate(schedule, "local"));
  const hour = utcDate.hour;
  const dayOfMonth = utcDate.date;
  let dayOfWeek = schedule.day_of_week;

  // タイプごとに値の補正をかける
  switch (schedule.cycle_type) {
    case "weekly":
      if (hour - schedule.hour < 0) {
        // 曜日が7以上の場合、日曜日(0)を設定
        dayOfWeek =
          schedule.day_of_week + 1 >= 7 ? 0 : schedule.day_of_week + 1;
      }
      break;
    default:
      break;
  }
  return Object.assign({}, schedule, {
    hour,
    day_of_week: dayOfWeek,
    day_of_month: dayOfMonth,
  });
};

/**
 * 日付の文字列を抽出する
 *
 * @param {Required<Cycle>} schedule 対象のスケジュール
 * @param {'utc' | 'local'} convertType 変換先の形式
 * @return {string} 'YYYY/MM/DD HH:mm'形式の日付
 */
const getExtractionDate = (
  schedule: Required<Cycle>,
  convertType: "utc" | "local"
): string => {
  // NOTE: 時刻変換で31日と1日をまたいでしまう場合、実行した月に影響されてしまう
  // NOTE: そのため、startOfで1月を固定基準とし、12月と1月で31日が連続するパターンで変換する
  if (convertType === "utc") {
    return momentTZ()
      .tz(timeZone)
      .startOf("year")
      .set("date", schedule.day_of_month)
      .set("hour", schedule.hour)
      .set("minute", schedule.minute)
      .utc()
      .format("YYYY/MM/DD HH:mm");
  } else {
    return momentTZ
      .utc()
      .startOf("year")
      .set("date", schedule.day_of_month)
      .set("hour", schedule.hour)
      .set("minute", schedule.minute)
      .tz(timeZone)
      .format("YYYY/MM/DD HH:mm");
  }
};

/**
 * YYYY/MM/DD HH:mm 文字列から日付を分割抽出する
 *
 * @param {string} stringDate 'YYYY/MM/DD HH:mm'形式の日付
 * @return {object} 抽出した日付オブジェクト
 */
const splitExtractionDate = (stringDate: string) => {
  const date = stringDate && stringDate.split(" ");
  const time = date[1] && date[1].split(":");
  return {
    date: parseInt(date[0].substring(8), 10),
    hour: parseInt(time[0], 10),
    minute: parseInt(time[1], 10),
  };
};
