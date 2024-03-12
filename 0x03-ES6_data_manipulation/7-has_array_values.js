export default function hasValuesFromArray(setValues, val) {
  return val.every((v) => setValues.has(v));
}
