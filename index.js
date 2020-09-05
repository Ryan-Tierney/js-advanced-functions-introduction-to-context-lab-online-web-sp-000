let createEmployeeRecord = function(row) { 
  return {
    firstName: row[0],
    familyName: row[1],
    title: row[2], 
    payPerHour: row[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

createEmployeeRecords = function(employeeRowData) { 
  return employeeRowData.map(function(row) {
    return 
  })
}

function createTimeInEvent() { 
} 

function createTimeOutEvent() { 
}