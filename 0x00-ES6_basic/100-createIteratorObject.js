export default function createIteratorObject(report) {
  const employeesInDepartment = [];
  for (const department in report.allEmployees) {
    for (const depart of report.allEmployees[department]) {
      employeesInDepartment.push(depart);
    }
  }
  return employeesInDepartment;
}