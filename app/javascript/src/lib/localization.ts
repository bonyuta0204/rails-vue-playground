import i18next from "i18next";
import sprintf from "i18next-sprintf-postprocessor";

export default function () {
  i18next.use(sprintf);
  return {};
}
