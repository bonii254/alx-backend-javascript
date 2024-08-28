export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const employees of Object.values(report.allEmployees)) {
    allEmployees = allEmployees.concat(employees);
  }
  return allEmployees[Symbol.iterator]();
}
