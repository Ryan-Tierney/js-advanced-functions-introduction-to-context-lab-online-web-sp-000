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

let createEmployees = function(employeeRowData) { 
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row)
  })
}

let createTimeInEvent = function(employee, datestamp) { 
  let [date, hour] = datestamp.split(' ')
  
  employee.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  })
  return employee
} 


let createTimeOutEvent = function(employee, datestamp) {
  let [date, hour] = datestamp.split(' ')
  
  employee.timeOutEvents.push({
    type: "TimeOut", 
    hour: parseInt(hour, 10), 
    date, 
  })
  return employee
} 

let hoursWorkedOnDate = function(employee, soughtDate) { 
} 

let wagesEarnedOnDate = function(employee, soughtDate, hoursWorkedOnDate) { 
}

let allWagesFor = function(employee) { 
}