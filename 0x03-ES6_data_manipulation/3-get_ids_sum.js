export default function getStudentIdsSum(queryObject) {
  const ids = queryObject.map((obj) => obj.id);
  const result = ids.reduce((a, b) => a + b);
  return result;
}
