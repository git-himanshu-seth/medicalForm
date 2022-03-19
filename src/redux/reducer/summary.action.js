import summaryType from "./summaryType";

export const setSummeryAction = (item) => ({
  type: summaryType.SUMMARY_DATA,
  payload: item,
});
