export default function createIteratorObject(report) {
  const employeesInDepartment = [];
  for (const department of Object.keys(report.allEmployees)) {
    employeesInDepartment.push(...report.allEmployees[department]);
  }
  return employeesInDepartment;
}
