// Code your solution here
function findMatching (array, query) {
    return array.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

function fuzzyMatch (array, query) {
    return array.filter((element) => element[0] === query[0])
}

function matchName (array, query) {
    let driverObject
    if (driverObject = array.filter((element) => element.name === query)) {
        return driverObject
    }
}