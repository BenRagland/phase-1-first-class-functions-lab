// Code your solution in this file!
const returnFirstTwoDrivers = (driversArray)=>{
    const firstTwoDrivers = [driversArray[0], driversArray[1]]
    return firstTwoDrivers
}

const returnLastTwoDrivers = (driversArray) =>{
    return driversArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// takes a fare and times by 5
const createFareMultiplier = (fareMultiplier) =>{
    return (fare) =>{
        return fare * fareMultiplier
    }
    
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
  
const selectDifferentDrivers = ( ScubersDriverList, twoDriversFunc ) => {
    return twoDriversFunc (ScubersDriverList)

}

// const fareTripler = (x) => {
//     const fare = createFareMultiplier(x)
//     return fare(3)*3
// }