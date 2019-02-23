

module.exports.groupAdultsByAgeRange = function(arr) {
let fiftyAndOlder = {}
let fortyOneToFifty = {}
let thirtyOnetoForty = {}
let twentyOneToThirty = {}
let twentyAndYounger = {}
let invalidEntry = {}

const names = arr
.map(x => x)
.filter(y => (y.age >= 51))
fiftyAndOlder = {'51 and older': names}

const names2 = arr
.map(x => x)
.filter(y => (y.age < 50 && y.age >= 41))
fortyOneToFifty = {'41-50': names2}

const names3 = arr
.map(x => x)
.filter(y => (y.age < 40 && y.age >= 31))
thirtyOnetoForty = {'31-40': names3}

const names4 = arr
.map(x => x)
.filter(y => (y.age < 30 && y.age >= 18))
twentyOneToThirty = {'18-30': names4}

}

