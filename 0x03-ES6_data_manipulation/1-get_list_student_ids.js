export default function getListStudentIds(entrys) {
  if (!Array.isArray(entrys)) return [];
  const result = entrys.map((entry) => entry.id);
  return result;
}
