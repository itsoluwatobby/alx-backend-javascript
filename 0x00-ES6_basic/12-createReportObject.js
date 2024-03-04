export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments: (numberOfDepartments) => Object.keys(numberOfDepartments).length,
  };
}
