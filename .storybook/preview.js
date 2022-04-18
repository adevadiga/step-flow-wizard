import "../stories/theme.css";
import { addDecorator } from "@storybook/react";

addDecorator(story => <div className="wizard-container">{story()}</div>);;

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
