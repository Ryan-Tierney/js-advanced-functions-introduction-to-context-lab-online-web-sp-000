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

let createEmployeeRecords = function(employeeRowData) { 
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row)
  })
}

let createTimeinEvent = function(employee, datestamp) { 
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
    hour: parseint(hour, 10), 
    date, 
  })
  return employee
} 