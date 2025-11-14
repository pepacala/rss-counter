import {
  config,
  DisplayData,
  InputBlockType,
  multipliers,
  ResourceFormData,
} from "../../../config/config";

export function getInputBlockCount(blocks?: InputBlockType[]) {
  return blocks
    ? blocks.map((f) => f.value * getMultiplier(f.name)).reduce((a, b) => a + b)
    : NaN;
}

function getMultiplier(name: string) {
  const index = multipliers.findIndex((element) => element.name === name);
  return index >= 0 ? multipliers[index].multiplier : 1;
}

export function getLabel(name: string) {
  const index = config.form.findIndex((element) => element.name === name);
  return index >= 0 ? config.form[index].label : name;
}

export function getDisplayData(formData: ResourceFormData): DisplayData {
  return formData.map((el) => {
    let roundedFunction, priority;
    const matchIndex = config.form.findIndex((e) => e.name === el.name);
    if (matchIndex >= 0) {
      roundedFunction = config.form[matchIndex].roundedFunction;
      priority = config.form[matchIndex].priority;
    }
    return {
      name: el.name,
      label: getLabel(el.name),
      value: getInputBlockCount(el.blocks),
      roundedFunction,
      priority,
    };
  });
}
