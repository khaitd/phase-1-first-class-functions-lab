// Code your solution in this file!
const returnFirstTwoDrivers = (driversArray) => {
    return driversArray.slice(0,2)
} 

const returnLastTwoDrivers = (driversArray) => {
    return driversArray.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers ]

function createFareMultiplier(multi){
    return (fare) => {
        return fare * multi
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, f) {
    return f(arrayOfDrivers)
}