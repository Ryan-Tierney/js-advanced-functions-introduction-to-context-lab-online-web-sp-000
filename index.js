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
    type: hour 
    
  })
} 

let createTimeOutEvent = function(employee, datestamp) { 
} 