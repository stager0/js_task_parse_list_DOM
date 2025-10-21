'use strict';

// write code here
function convertSalary(salaryStr){
  return Number(salaryStr.match(/\d/g).join(''))
}


function sortList(employeesList) {
  const employeeArr = [];

  for (let employee of employeesList) {
    let userSalary = employee.getAttribute('data-salary')
    employeeArr.push([convertSalary(userSalary), employee])
  }

  const sortedEmployees = employeeArr.sort(
    (a, b) => Number(a[0]) - Number(b[0])
  );

  const arrSortedEmployees = () => {
    const arrToReturn = [];

    for (const employee of sortedEmployees) {
      arrToReturn.push(employee[1])
    }
    return arrToReturn;
  }

  return arrSortedEmployees();
}


function getEmployees(selectorToFind) {
  const empList = document.querySelectorAll(selectorToFind)
  let sortedEmpList = sortList(empList)
  const parent = empList[0].parentElement
  parent.innerHTML = '';

  for (const employeeHtml of sortedEmpList) {
    parent.appendChild(employeeHtml);
  }
}

getEmployees('li')
