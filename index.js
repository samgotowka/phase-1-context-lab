/* Your Code Here */
let createEmployeeRecord = function(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour:row[3],
        timeInEvents: [],
        timeOutEvents:[]
    }
 }
function createEmployeeRecords(employeeRowData){
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row)
    })
}
function createTimeInEvent(employee,dateStamp) {
let [date,hour] = dateStamp.split(' ')
this.timeInEvents.push({
    type:'TimeIn',
    hour: parseInt(hour,10),
    date,
})
        return this
}

function createTimeOutEvent(employee,dateStamp) {
    let[date,hour] = dateStamp.split(' ')
    
    this.timeOutEvents.push({
        type:'TimeOut',
        hour: parseInt(hour,10),
        date,
    })
    return this
}

function hoursWorkedOnDate(employee,soughtdate){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === soughtdate
    })
    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === soughtdate
    })
        return (outEvent.hour - inEvent.hour) /100
}

function wagesEarnedOnDate(employee,dataSought) {
let rawWage = hoursWorkedOnDate(employee, dataSought) * this.payPerHour
return parseFloat(rawWage.toString())
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(function(rec){
        return rec.firstName === firstName
    })
}

function calculatePayroll(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    })
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

