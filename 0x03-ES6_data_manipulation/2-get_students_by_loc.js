export default function getStudentsByLocation(queryObject, city) {
  const result = queryObject.filter((obj) => obj.location === city);
  return result;
}
