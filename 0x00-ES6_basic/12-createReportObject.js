export default function createReportObject(employeesList) {
  const allEmployees = {};
  for (const department in employeesList) {
    const cleanDepartmentName = department.slice(1);
    allEmployees[cleanDepartmentName] = employeesList[department];
 }
 const getNumberOfDepartments = function() {
    return Object.keys(allEmployees).length;
  };
  return {
    allEmployees,
    getNumberOfDepartments
  };
}
