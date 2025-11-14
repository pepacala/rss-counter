import { config } from "../config/config";
import { getInputBlockCount } from "../modules/rssCounter/utils/utils";
import { dbData } from "../services/db";

export function makeDays(value: number) {
  return Math.trunc(value / 24 / 60) + " days";
}

export function makeMega(value: number) {
  return (
    <>
      <b>{Math.round(value / 100000) / 10}</b>M
    </>
  );
}

export function makeMatsLvl7(value: number) {
  return (
    <>
      <b>{Math.round(value / Math.pow(3, 6))}</b> lvl7
    </>
  );
}

export function transformRecords(records: dbData[], RSS_TO_SHOW: string[]) {
  const roundedFunctionsArray = RSS_TO_SHOW.map((el) => {
    return [el, config.form.find((e) => e.name === el)?.roundedFunction];
  });
  const roundedFunctions = Object.fromEntries(roundedFunctionsArray);

  return records.map((rec) => {
    const rss = rec.formData.filter((el) => RSS_TO_SHOW.includes(el.name));
    return {
      id: rec.id,
      time: rec.time,
      rss: rss.map((el) => {
        return {
          name: el.name,
          value: roundedFunctions[el.name]
            ? roundedFunctions[el.name](getInputBlockCount(el.blocks))
            : getInputBlockCount(el.blocks),
        };
      }),
    };
  });
}
